import React from "react"
import { Link } from 'react-router-dom'
import BannerImage from '../Assets/pizza.jpeg'
import '../Styles/Home.css'

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>VN Best Pizza</h1>
                <p>Chose Pizza</p>
                <Link to='/menu'>
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home