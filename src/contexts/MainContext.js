import React, { useReducer } from 'react';
import axios from 'axios'
export const mainContext = React.createContext();

let URL1 = 'http://127.0.0.1:8000'
let URL2 = 'http://35.192.150.161'
let URL3 = 'http://104.154.16.185'

const INIT_STATE = {
    places: [],
    exactplace: {}, 
    placeToEdit: {},
    uaer: {}
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_PLACES_DATA": return {...state, places: action.payload}
        case "GET_EXACT_PLACE_DATA": return {...state, exactplace: action.payload}
        case "EDIT_PLACE": return {...state, placeToEdit:action.payload}
        case "GET_USER_DATA": return {...state, user:action.payload}
        default: return state
    }
}

const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    
    const getPlacesData = async () => {
        let {data} = await axios('http://104.154.16.185/place')
        dispatch({
            type: "GET_PLACES_DATA",
            payload: data
        })
    }

    const getExactPlaceData = async (id) => {
        let {data} = await axios(`http://104.154.16.185/place/${id}`)
        dispatch({
            type: "GET_EXACT_PLACE_DATA",
            payload: data
        })
    }

    const editPlace = async (id) => {
        let {data} = await axios(`http://104.154.16.185/place/${id}`)
        dispatch({
            type: "EDIT_PLACE",
            payload: data
        })
    }

    const getUserData = async (email) => {
        let {data} = await axios(`http://104.154.16.185/profile_client/${email}`)
        dispatch({
            type: "GET_USER_DATA",
            payload: data
        })
    }

    const addPlace = async (newPlace) => {
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        await axios.post(`http://104.154.16.185/place/`, newPlace, config)
        getPlacesData()
    }

    const deletePlace = async (id) => {
        await axios.delete(`http://104.154.16.185/place/${id}`)
        getPlacesData()
    }

    const savePlace = async (newPlace) => {
        await axios.patch(`http://104.154.16.185/place/${newPlace.get('id')}/`, newPlace)
        getPlacesData()
    }

    return (
        <mainContext.Provider value={{
            places: state.places,
            exactplace: state.exactplace,
            placeToEdit: state.placeToEdit,
            user: state.user,
            getPlacesData,
            getExactPlaceData,
            getUserData,
            addPlace,
            deletePlace,
            editPlace,
            savePlace
        }}>
            {children}
        </mainContext.Provider>
    )
}

export default MainContextProvider;