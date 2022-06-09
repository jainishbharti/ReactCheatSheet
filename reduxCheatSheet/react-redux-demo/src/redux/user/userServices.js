import axios from 'axios';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from './userActions';


export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            // response.data is the array of users
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        }).catch(err => {
            //error.message is the error description
            dispatch(fetchUsersFailure(err.message) )
        })
    }
}