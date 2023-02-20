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
                <div className="clash-card__unit-name">El come penes</div>
                
                <div className='clash-card__stats'>
                    
                </div>
                    <button onClick={handleclick}>click</button>
            </div>
        </div>
        <div className='back'>
            <div className="clash-card barbarian ">
                <div className="clash-card__image">
                    <img className="clash-card__barbarian" src={'../../public/img/barbaro.jpg'} alt="Barbarian" />
                </div>
                <div className="clash-card__unit-name">The Barbarian</div>
                <div className="clash-card__unit-description">
                    The Barbarian is a single target melee troop that have a hight damage
                </div>
                <div className='clash-card__stats'>
                    <button onClick={handleclick}>click</button>
                </div>
            </div>
        </div>

    </ReactCardFlip>
  )
}

export default Card