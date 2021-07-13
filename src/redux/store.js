import { createStore } from 'redux'

const initialState = {
    dominios: []
}

const reducerBuscaDominio = (state = initialState, objAction) => {

    console.log(objAction)
    return state
}

export default createStore(reducerBuscaDominio)

