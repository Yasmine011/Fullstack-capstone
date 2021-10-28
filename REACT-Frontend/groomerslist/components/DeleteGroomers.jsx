import React, { Component } from 'react';
import GroomerService from '../services/GroomerService';

class DeleteGroomers extends Component {
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
     
        
        this.deleteGroomer = this.deleteGroomer.bind(this);

    }//constructor

    componentDidMount()
     {
        GroomerService.getGroomerById(this.state.id).then((res) =>{
          let groomer = res.data;
          this.setState({ownerName:groomer.ownerName,
                  petName:groomer.petName,
                  petBreed:groomer.petBreed,
                  petAge:groomer.petAge
                });
        });
           
     }
     

     deleteGroomer = (e) => {
        e.preventDefault();
        let groomer={
           id: this.state.id,
           ownerName: this.state.ownerName,
           petName: this.state.petName,
           petBreed: this.state.petBreed,
           petAge: this.state.petAge
        };

        console.log(groomer);
        GroomerService.deleteGroomer(this.state.id).then(res => {
            
            this.props.history.push('/groomer');
        })

    }

    cancel(){
        this.props.history.push('/groomer');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Delete Groom Client</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label> Groom Client ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label>Owner Name: </label>
                                      <input placeholder="Owner Name" readOnly= "true" name="Owner Name" className="form-control"
                                         value={this.state.ownerName} onChange={this.ownerNameHandler} />
                                   </div> 
                                   <div className="form-group">
                                      <label> Pet Name: </label>
                                      <input placeholder="Pet Name" readOnly="true" name="Pet Name" className="form-control"
                                         value={this.state.petName} onChange={this.petNameHandler} />
                                   </div>
                                   <div className="form-group">
                                      <label> Pet Breed: </label>
                                      <input placeholder="Pet Breed" readOnly="true" name="Pet Breed" className="form-control"
                                         value={this.state.petBreed} onChange={this.petBreedHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label> Pet Age: </label>
                                      <input placeholder="Pet Age" readOnly="true" name="Pet Age" className="form-control"
                                         value={this.state.petAge} onChange={this.petAgeHandler} />
                                   </div>
                                   <button className="btn btn-success" onClick={this.deleteGroomer}> Delete </button>
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

export default DeleteGroomers;