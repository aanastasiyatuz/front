import React, { useState } from 'react';
import axios from 'axios'


const Footer = () => {
    const [inpEmail, setInpEmail] = useState('');
    const [inpTel, setInpTel] = useState('');
    const [inpPassword, setInpPassword] = useState('');
    const [inpPasswordConfirm, setInpPasswordConfirm] = useState('');
    // const [inpCity, setInpCity] = useState('');
    // const [inpCountry, setInpCountry] = useState('');

    const registerUser = async (newUser) => {
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        await axios.post('http://34.121.250.236/account/register/', newUser, config)
    }
    
    function handleClick(){
        const form_data = new FormData()
        form_data.append('email', inpEmail)
        form_data.append('phone', inpTel)
        form_data.append('password', inpPassword)
        form_data.append('password_confirmation', inpPasswordConfirm)
        // form_data.append('city', inpCity)
        // form_data.append('country', inpCountry)  
        registerUser(form_data)
    }

    return (
        <div className="inner">
            <section>
                <h2>Create new account</h2>
                    <div className="fields">
                        <div className="field">
                            <input type="email" onChange={(e) => setInpEmail(e.target.value)} name="email" key="email" placeholder="*Email" />
                        </div>
                        <div className="field">
                            <input type="tel" onChange={(e) => setInpTel(e.target.value)} name="tel" key="tel" placeholder="*Tel" />
                        </div>		
                        <div className="field">
                            <input type="password" onChange={(e) => setInpPassword(e.target.value)} name="password" key="password" placeholder="*Password"/>
                        </div>
                        <div className="field">
                            <input type="password" onChange={(e) => setInpPasswordConfirm(e.target.value)} name="password-confirm" key="password-confirm" placeholder="*Password confirmation"/>
                        </div>
                        {/* <div className="field">
                            <input type="text" onChange={(e) => setInpCity(e.target.value)} name="city" key="city" placeholder="City"/>
                        </div>
                        <div className="field">
                            <input type="text" onChange={(e) => setInpCountry(e.target.value)} name="country" key="country" placeholder="Country"/>
                        </div> */}
                    </div>
                    <br/>
                    <ul className="actions">
                        <a href={`/profile/${inpEmail.split('@')[0]}`} key={inpEmail}>
                            <li><button onClick={handleClick}>Sign up</button></li>
                        </a>
                    </ul>
            </section>
            <section>
                <h2>Follow</h2>
                <ul className="icons">
                    <li><a href="https://vk.com/aanastasiyatuz" className="icon brands style2 fa-vk"><span className="label">Vk</span></a></li>
                    <li><a href="https://www.instagram.com/aanastasyatuz/" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/aanastasiyatuz/" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="tel:+9960222010101" className="icon solkey style2 fa-phone"><span className="label">Phone</span></a></li>
                    <li><a href="mailto:aanastasiyatuz@gmail.com" className="icon solkey style2 fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </section>
        </div>
    );
};

export default Footer;