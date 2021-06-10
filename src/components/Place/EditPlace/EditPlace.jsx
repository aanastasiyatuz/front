import React, { useContext, useEffect, useState } from 'react';
import { mainContext } from '../../../contexts/MainContext';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router';


const EditPlace = () => {
    const {placeToEdit, savePlace, editPlace} = useContext(mainContext)
    const {id} = useParams()
    const [inpName, setInpName] = useState('');
    const [inpAddress, setInpAddress] = useState('');
    const [inpInfo, setInpInfo] = useState('')
    const [selectedFile, setSelectedFile] = useState(placeToEdit.main_image);
    
    useEffect(() => {
        editPlace(id)
    }, [])

    useEffect(() => {
        setInpName(placeToEdit.name);
        setInpAddress(placeToEdit.address);
        setInpInfo(placeToEdit.info);
    },[placeToEdit])

    function editItems(){
        let newPlace = new FormData()
        newPlace.set('id', id)
        newPlace.set('name', inpName)
        newPlace.set('address', inpAddress)
        newPlace.set('info', inpInfo)
        newPlace.set('main_image', selectedFile)
        savePlace(newPlace)
    }

    return (
        <>
            {inpName ? (
            <div className="inner">
                <img src={placeToEdit.main_image} style={{'width':'90%'}} />
                <form>
                    <h1>Edit Place: </h1>
                    <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" />
                    <br></br>
                    <input value={inpAddress} onChange={(e) => setInpAddress(e.target.value)} type="text" />
                    <br></br> 
                    <input value={inpInfo} onChange={(e) => setInpInfo(e.target.value)} type="text" />
                    <br></br>
                    <input  type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                    <Link to="/"><button onClick={editItems}>Edit</button></Link>
                </form>
            </div>
            ) : (null)}
        </>
    );
};

export default EditPlace;