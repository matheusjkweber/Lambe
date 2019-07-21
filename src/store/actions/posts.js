import {
    ADD_POST,
    ADD_COMMENT
} from './actionTypes'
import axios from 'axios'

export const addPost = post => {
    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
    console.log("Test")
    return dispatch => {
        console.log("Test 1")
        axios.post('/posts.json', {...post})
            .catch(err => console.log(err))
            .then(res => console.log(res))
    }
}

export const addCommentt = payload => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}