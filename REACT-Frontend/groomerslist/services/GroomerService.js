import axios from 'axios';

const GROOMER_API_BASE_URL= "http://localhost:8081/api";
class GroomerService{

    getGroomer(){
       return axios.get(GROOMER_API_BASE_URL+"/groomers");
    }

    createGroomer(groomer){
        console.log("createGroomer" + groomer) 
        return axios.post(GROOMER_API_BASE_URL+"/addgroomers",groomer);
    }
    getGroomerById(id){
        return axios.get(GROOMER_API_BASE_URL+"/groomers/"+id);
    }

    updateGroomer(groomer,id){
        return axios.put(GROOMER_API_BASE_URL+"/groomers/"+id,groomer);
    }

    deleteGroomer(id){
        return axios.delete(GROOMER_API_BASE_URL+"/groomers/"+id);
    }

}
export default new GroomerService();