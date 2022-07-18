import React, { useEffect, useState } from 'react';
import "./CardContentPage.css"
import Navbar from "../Navbar/Navbar"


function CardContentPage({ el, jl, mc }) {

    const [elec, setElec] = useState([])
    const [jwel, setJwel] = useState([])
    const [men, setMen] = useState([])
    const [women, setWomen] = useState([])

    const URL = `https://fakestoreapi.com/products/`
    const EURL = `${URL}/category/electronics`
    const JURL = `${URL}/category/jewelery`
    const MURL = `${URL}/category/men's%20clothing`
    const WURL = `${URL}/category/women's%20clothing`

    function callApi(url, setVariable) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setVariable(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        callApi(EURL, setElec)
        callApi(JURL, setJwel)
        callApi(MURL, setMen)
        callApi(WURL, setWomen)
    }, [])

    if (el) {
        return (
            <div>
                <Navbar/>
                {
                    elec.map((value) => (
                        <div className='card_container'>
                            <img src={value.image} height="200px" width="250px" alt="" />
                            <div className='card'>
                                <p className='card_title'>{value.title}</p>
                                <p className='card_price'>{"Cost :$"}{value.price}</p>
                                <p className='card_des'>{value.description}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
        );
    }

    else if (jl) {
        return (
            <div>
                <Navbar/>
                {

                    jwel.map((value) => (
                        <div className='card_container'>
                            <img src={value.image} height="200px" width="250px" alt="" />
                            <div className='card'>
                                <p className='card_title'>{value.title}</p>
                                <p className='card_price'>{"Cost :$"}{value.price}</p>
                                <p className='card_des'>{value.description}</p>
                            </div>
                        </div>
                    ))

                }

            </div>
        );
    }

    else if (mc) {
        return (
            <div>
                <Navbar/>
                {

                    men.map((value) => (
                        <div className='card_container'>
                            <img src={value.image} height="200px" width="250px" alt="" />
                            <div className='card'>
                                <p className='card_title'>{value.title}</p>
                                <p className='card_price'>{"Cost :$"}{value.price}</p>
                                <p className='card_des'>{value.description}</p>
                            </div>
                        </div>
                    ))

                }

            </div>
        );
    }

    else {

        return (
            <div>
                <Navbar/>
                {

                    women.map((value) => (
                        <div className='card_container'>
                            <img src={value.image} height="200px" width="250px" alt="" />
                            <div className='card'>
                                <p className='card_title'>{value.title}</p>
                                <p className='card_price'>{"Cost :$"}{value.price}</p>
                                <p className='card_des'>{value.description}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
        );
    }


}

export default CardContentPage;