import axios from 'axios';
const baseUrl="http://localhost:3000/user";
class Service{
    getuser(username,password){
        return axios.get(`${baseUrl}?q=${username}&${password}`)
    }
}
export default new Service();