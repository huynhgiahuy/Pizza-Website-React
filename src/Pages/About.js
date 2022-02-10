import React from 'react'
import MultiplePizzas from '../Assets/multiplePizzas.jpeg'
import '../Styles/About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>
                    VN Best Pizza is a company that gives you a lots of choice about pizza. We
                    have the best selling pizzas all around Vietnam like Pepperoni Pizza, Chicken 
                    Pizza, Beef Pizza, Seafood Pizza, Expensive Pizza... more and more are wating for you
                    to taste!
                </p>
            </div>
        </div>
    )
}

export default About