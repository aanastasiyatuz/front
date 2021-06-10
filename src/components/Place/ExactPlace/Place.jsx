import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { mainContext } from '../../../contexts/MainContext';

const Place = () => {
    const { exactplace, 
        getExactPlaceData,
        deletePlace,
        editPlace
    } = useContext(mainContext)
    const {id} = useParams()
    useEffect(() => {getExactPlaceData(id)}, exactplace)

    try{
        return (
            <div className="inner">
                <h1>{exactplace.name}</h1>
                <div className="container" style={{'display':'flex', 'flex-direction':'row', 'justify-content':'flex-start'}}>
                <img src={exactplace.main_image} alt="" style={{'width': '250px', 'height': 'auto'}}/>
                <p style={{'margin-left':'20px'}}>{exactplace.info}</p>
                </div>
                <br />
                <Link to="/"><button onClick={() => deletePlace(exactplace.id)}>Delete</button></Link>
                <Link to={`/edit-place/${id}`}><button onClick={() => editPlace(exactplace.id)}>Edit</button></Link>
            </div>
        );
    }catch{
        <div className="inner">
            <h3>...</h3>
        </div>
    }
};

export default Place;