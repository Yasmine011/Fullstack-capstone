import React, { Component } from 'react';
import GroomerService from '../services/GroomerService';

class ViewGroomers extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 groomers:{}

             }
     
        
        }//constructor

     componentDidMount()
     {
        GroomerService.getGroomersById(this.state.id).then((res) =>{
            this.setState({groomer:res.data})
         });
     }

     render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Groom Client Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>Groom Client ID: </label>
                                    <input placeholder={this.state.groomer.id} readOnly={true} name="id" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                    <label>Owner Name: </label>
                                    <input placeholder={this.state.groomer.ownername} readOnly={true} name="Owner Name" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                    <label> Pet Name: </label>
                                    <input placeholder={this.state.groomer.petname} readOnly={true} name="Pet Name" className="form-control" />
                                   </div> 
                                   <div className="form-group">
                                    <label> Pet Breed: </label>
                                    <input placeholder={this.state.groomer.petbreed} readOnly={true} name="Pet Breed" className="form-control" />
                                   </div>
                                   <div className="form-group">
                                    <label> Pet Age: </label>
                                    <input placeholder={this.state.groomer.petage} readOnly={true} name="Pet Age" className="form-control" />
                                   </div> 

                                   </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewGroomers; 