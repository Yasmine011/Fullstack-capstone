import React, { Component } from 'react';
import GroomerService from '../services/GroomerService';

class ListGroomers extends Component {
      constructor(props)
      {
          super(props)
          this.state={
                groomers:[] 
          }
          this.addGroomer=this.addGroomer.bind(this);
          this.editGroomer=this.editGroomer.bind(this);
          this.deleteGroomer=this.deleteGroomer.bind(this);
          this.viewGroomer=this.viewGroomer.bind(this);
      }
      
      
    componentDidMount() {
        GroomerService.getGroomer().then((res) => {
            
                        this.setState({groomers:res.data});
                        console.log(this.state.groomers.ownername)
        });
    }
    
    addGroomer()
    {
       
       this.props.history.push('/add-groomer');
    }

    editGroomer(id)
    {
       this.props.history.push(`/update-groomer/${id}`);
       
    }

    deleteGroomer(id)
    {
    
        this.props.history.push(`/delete-groomer/${id}`);
        // GroomerService.deleteGroomer(id).then(res => {
        //     this.setState({
        //          groomer: this.state.groomers.filter(groomer => groomer.id !== id)
        //     })
        // })
        
     }

     viewGroomer(id)
     {
        this.props.history.push(`/view-groomer/${id}`);
        
     }
     
     
    render() {
        return (
            <div>
                <h2 className="text-center">Groomers List</h2>
                <div> 
                    <button className="btn btn-primary" onClick={this.addGroomer}> Add Groomer</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Groomer Id</th>
                                <th> Owner Name</th>
                                <th> Pet Name</th>
                                <th> Pet Breed</th>
                                <th>Pet Age </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.groomers.map(
                                     groomer =>
                                     <tr key={groomer.id}>
                                         <td>{groomer.id}</td>
                                         <td>{groomer.ownername}</td>
                                         <td>{groomer.petname}</td>
                                         <td>{groomer.petbreed}</td>
                                         <td>{groomer.petage}</td>
                                         <td>
                                            <button onClick={() =>this.editGroomer(groomer.id)} className="btn btn-primary">Update</button> 
                                            <button onClick={() =>this.deleteGroomer(groomer.id)} className="btn btn-danger">Delete</button> 
                                            <button onClick={() =>this.viewGroomer(groomer.id)} className="btn btn-primary">View</button> 
                                         </td>
                                     </tr>
                                )
                            }
                            </tbody>
                            </table>
                        </div>
        
                    </div>
                );
            }
        }
        
        export default ListGroomers;