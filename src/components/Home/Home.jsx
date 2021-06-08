import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import photo1 from './img/pic02.jpg'
import { mainContext } from '../../contexts/MainContext';


const Home = () => {
    const { places, 
            getPlacesData
        } = useContext(mainContext)
    useEffect(() => {
        getPlacesData()
        console.log('effect')
    }, [])
    console.log(places)
    return (
        <div className="inner">
            <header>
                <h1>Welcome to Kyrgyzstan</h1>
                <p>Kyrgyzstan is a nation defined by its natural beauty. Joyously unspoilt mountainscapes, stark craggy ridges and rolling jailoos (summer pastures) are brought to life by semi-nomadic, yurt-dwelling shepherds. Add to this a well-developed network of homestays and visa-free travel, and it's easy to see why Kyrgyzstan (officially the Kyrgyz Republic), is the gateway of choice for many travelers in Central Asia.</p>
            </header>
            <section className="tiles">
                {places.map(place => (
                    <article className="style1" key={place.id}>
                        <span className="image" style={{'width': '350px', 'height': '350px'}}>
                            <img src={place.main_image} alt="" />
                        </span>
                        <Link to={`/place/${place.id}`} id={place.id}>
                            <h2>{place.name}</h2>
                            <div className="content">
                                <p>{place.info.slice(0, 200) + '...'}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Home;