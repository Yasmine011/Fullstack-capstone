import React, { Component } from 'react';
import GroomerService from '../services/GroomerService';

class AddGroomers extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           id: '',
           ownername:'',
           petname:'',
           petbreed:'',
           petage:'',
        }
      
        this.ownernameHandler = this.ownernameHandler.bind(this);
        this.petnameHandler = this.petnameHandler.bind(this);
        this.petbreedHandler = this.petbreedHandler.bind(this);
        this.petageHandler = this.petageHandler.bind(this);

    }//constructor


    ownernameHandler=(event) => {
        this.setState({
           ownername: event.target.value}); 
           console.log(this.state.ownername)
    }

     
    petnameHandler=(event) => {
        this.setState({
             petname: event.target.value});
    }

    petbreedHandler=(event) => {
        this.setState({
           petbreed: event.target.value});
    }

    petageHandler=(event) => {
        this.setState({
           petage: event.target.value});
    }

    saveGroomers = (e) => {
        e.preventDefault();
        console.log("saveGroomers")
        let groomer={
           id: this.state.id,
           ownername: this.state.ownername,
           petname: this.state.petname,
           petbreed: this.state.petbreed,
           petage: this.state.petage
        };
        console.log(groomer);
        GroomerService.createGroomer(groomer).then(res =>{
                this.props.history.push('/groomers');  
            }).catch(err=>{
                console.log("record not saved.");
            });



 }//closing save method

 cancel(){
    this.props.history.push('/groomers');
}

render() {
    return (
        <div>
           <div className="container">
               <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center"> Add Groom Client </h3> //issue
                      <div className="card-body">
                          <form>                               
                               <div className="form-group">
                                  <label>Owner Name: </label>
                                  <input placeholder="Owner Name" name="Owner Name" className="form-control"
                                     value={this.state.ownername} onChange={this.ownernameHandler} />
                               </div> 
                               <div className="form-group">
                               <label> Pet Name: </label>
                               <input placeholder="Pet Name" name="Pet Name" className="form-control"
                                  value={this.state.petname} onChange={this.petnameHandler} />
                            </div> 
                            <div className="form-group">
                            <label> Pet Breed: </label>
                            <input placeholder="Pet Breed" name="Pet Breed" className="form-control"
                               value={this.state.petbreed} onChange={this.petbreedHandler} />
                            </div>
                            <div className="form-group">
                            <label>Pet Age: </label>
                            <input placeholder="Pet Age" name="Pet Age" className="form-control"
                               value={this.state.petage} onChange={this.petageHandler} />
                         </div>
                         <button className="btn btn-success" onClick={this.saveGroomers}> Save </button>
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

export default AddGroomers;
