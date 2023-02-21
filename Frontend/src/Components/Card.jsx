import React, { Fragment, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import '../Styles/Card.css'

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleclick = () => {
        setIsFlipped(!isFlipped)
    }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
        <div className="front">
            <div className="clash-card barbarian ">
                <div className="clash-card__image">
                    <img className="clash-card__barbarian" src={'../../public/img/barbaro.jpg'} alt="Barbarian" />
                </div>
                <div className="clash-card__unit-name ">The Barbarian</div>
                
                <div className='clash-card__stats'>
                    <div className='container'>
                        <h1>hola mundo</h1>
                        <h2>hola mundo</h2>
                        <h3>hola mundo</h3>
                        <h4>hola mundo</h4>
                        <h5>hola mundo</h5>
                    </div>
                </div>
                <div className='card-footer'>
                    <button id='btn-fav'>
                    <i className="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <button id='btn-car'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button id='btn-rotate' onClick={handleclick}>
                        <i className="fa-solid fa-rotate"></i>
                    </button>
                </div>
            </div>
        </div>
        <div className='back'>
            <div className="clash-card barbarian ">
                
                <div className="clash-card__unit-name">Description</div>
                <div className="clash-card__unit-description">
                    The Barbarian is a single target melee troop that have a hight damage
                </div>
                <div className='card-footer'>
                    <button id='btn-fav'>
                    <i className="fa-sharp fa-regular fa-heart"></i>
                    </button>
                    <button id='btn-car'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button id='btn-rotate' onClick={handleclick}>
                        <i className="fa-solid fa-rotate"></i>
                    </button>
                </div>
            </div>
        </div>

    </ReactCardFlip>
  )
}

export default Card