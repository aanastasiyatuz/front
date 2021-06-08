import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../../../contexts/MainContext';

const AddPlace = () => {
    const [inpName, setInpName] = useState('Name');
    const [inpAddress, setInpAddress] = useState('Address');
    const [inpInfo, setInpInfo] = useState('Info');
    const [selectedFile, setSelectedFile] = useState({});
    let {addPlace} = useContext(mainContext)

    function handleClick(){
        const newObj = new FormData()
        newObj.append('name', inpName)
        newObj.append('address', inpAddress)
        newObj.append('main_image', selectedFile)
        newObj.append('info', inpInfo)
        addPlace(newObj)
    }

    return (
        <div className="inner">
            <form>
                <h1>Add Place: </h1>
                <input value={inpName} onChange={(e) => setInpName(e.target.value)} type="text" />
                <br></br>
                <input value={inpAddress} onChange={(e) => setInpAddress(e.target.value)} type="text" />
                <br></br>
                <input value={inpInfo} onChange={(e) => setInpInfo(e.target.value)} type="text" />
                <br></br>
                <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
                <Link to="/"><button onClick={handleClick}>Add</button></Link>
            </form>
        </div>
    );
};

export default AddPlace;