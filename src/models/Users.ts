import axios from '../utils/axios';

export class Users {
  static all() {
    return axios.get('/users.json').then((resp) => resp.data);
  }
}
