import {ADD_MESSAGE} from './constants'

export const addMessage = (message) => {
    return {
        type:ADD_MESSAGE,
        message
    }
}