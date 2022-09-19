import axios from '../utils/axios';

class Users {
  static all() {
    return axios.get('/users.json').then((resp) => resp.data);
  }
}
