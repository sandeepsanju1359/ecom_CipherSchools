import React, { useEffect, useState } from 'react';
import "./HomePageContent.css"
import Mobile from "../../images/mobiles.png"
import Men from "../../images/men.png"
import Women from "../../images/women.png"
import Jwellery from "../../images/jwellery.png"
import { useNavigate } from 'react-router-dom';

function HomePageContent() {


    const [categeory, setCategeory] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategeory(data))
            .catch(error => console.log(error))
    }, [])

    const items = [
        {
            image: Mobile,
            title: categeory[0]
        },
        {
            image: Jwellery,
            title: categeory[1]
        },
        {
            image: Men,
            title: categeory[2]
        },
        {
            image: Women,
            title: categeory[3]
        }
    ]



    function goToProductPage(value) {
        navigate(`/${value}`)

    }




    return (
        <>
            <div className='homepage_container'>
                <div className='homepage_content'>
                    <h3>Get your desired Mobile</h3>
                    <h4>at 50% off</h4>
                    <h5>*limited time offer</h5>
                </div>

                <div className='homepage_image'>
                    <img src={Mobile} alt="Mobile" height="300px" />
                </div>


            </div>

            <div className='homepage_card_row'>

                {items.map((value) => (
                    <div className='homepage_card' onClick={() => goToProductPage(value.title)}>
                        <img src={value.image} height="100px" alt={value.title} />
                        <p>{value.title}</p>
                    </div>

                ))}




            </div>
        </>
    );
}

export default HomePageContent;
