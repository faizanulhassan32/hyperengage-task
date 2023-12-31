import React from 'react'
import '../App.css'

export default function ImgsOverlapped() {
    return (
        <div className='main'>
            <div className="container">
                <h2 className="heading">Contract Intelligence to drive financial <br /> performance</h2>
                <div className="image-container">
                    <img className="image-back" src="pic.png" alt="Stats on left side under" />
                    <img className="image-front" src="pic.png" alt="Stats on main side " />
                    <img className="image-back" src="pic.png" alt="Stats on right side under" />
                </div>
                <p className="description">Terzo helps leaders <span className="highlight">track every dollar</span> coming in <br /> and going out of the organization</p>
                <button className="bookdemo-button1" style={{ color: "black", fontWeight: "bold" }}>Learn More</button>
            </div>
        </div>
    )
}