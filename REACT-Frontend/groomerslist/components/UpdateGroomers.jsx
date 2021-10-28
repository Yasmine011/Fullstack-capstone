import React, { Component } from 'react';
import GroomerService from '../services/GroomerService';

class UpdateGroomers extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                id: this.props.match.params.id, 
                ownerName:'',
                petName:'',
                petBreed:'',
                petAge:'',
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.ownerNameHandler = this.ownerNameHandler.bind(this);
        this.petNameHandler = this.petNameHandler.bind(this);
        this.petBreedHandler = this.petBreedHandler.bind(this);
        this.petAgeHandler = this.petAgeHandler.bind(this);
        this.updateGroomer = this.updateGroomer.bind(this);

    }//constructor

    componentDidMount()
     {
        GroomerService.getGroomerById(this.state.id).then((res) =>{
          let groomer = res.data;
          this.setState({ownerName:groomer.petName,
                  petName:groomer.petName,
                  petBreed:groomer.petBreed,
                  petAge:groomer.petAge,
                });
        });
           
     }
     
     idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }

    ownerNameHandler=(event) => {
        this.setState({
           ownerName: event.target.value});
    }

   petNameHandler=(event) => {
        this.setState({
             petName: event.target.value});
    }

    petBreedHandler=(event) => {
        this.setState({
             petBreed: event.target.value});
    }

    petAgeHandler=(event) => {
        this.setState({
             petAge: event.target.value});
    }

   updateGroomer = (e) => {
        e.preventDefault();
        let groomer={
           id: this.state.id,
           ownername: this.state.ownername,
           petname: this.state.petname,
           petbreed: this.state.petbreed,
           petage: this.state.petage
        };
        
        GroomerService.updateGroomer(groomer,this.state.id).then((res) => {
                this.props.history.push('/groomers');
        });
      
        
    }

    cancel(){
        this.props.history.push('/groomers');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Groomer Client</h3>
                          <div className="card-body">
                              <form>
                                <div className="form-group">
                                      <label>Groom Client ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>  
                                <div className="form-group">
                                      <label>Groom Client Name: </label>
                                      <input placeholder="Owner Name" name="Owner Name" className="form-control"
                                         value={this.state.ownername} onChange={this.ownernameHandler} />
                                   </div>
                                <div className="form-group">
                                      <label>Pet Name: </label>
                                      <input placeholder="Pet Name" name="Pet Name" className="form-control"
                                         value={this.state.petname} onChange={this.petnameHandler} />
                                   </div>
                                <div className="form-group">
                                      <label> Pet Breed: </label>
                                      <input placeholder="Pet Breed" name="Pet Breed" className="form-control"
                                         value={this.state.petbreed} onChange={this.petbreedHandler} />
                                   </div>
                                <div className="form-group">
                                      <label> Pet Age: </label>
                                      <input placeholder="Pet Age" name="Pet Age" className="form-control"
                                         value={this.state.petage} onChange={this.petageHandler} />
                                   </div>
                                   <button className="btn btn-success" onClick={this.updateGroomer}> Update </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default UpdateGroomers;
