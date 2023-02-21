import React from 'react'
import '../Styles/Flipped.css'

function flipped() {
  return (
    <div className='card'>
        <div className='front'>
        <div className="clash-card barbarian ">
                <div className="clash-card__image">
                    <img className="clash-card__barbarian" src={'../../public/img/barbaro.jpg'} alt="Barbarian" />
                </div>
                <div className="clash-card__unit-name">The Barbarian</div>
                <div className="clash-card__unit-description">
                    The Barbarian is a single target melee troop that have a hight damage
                </div>
                <div className='clash-card__stats'>

                </div>
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

                </div>
            </div>
        </div>
    </div>
  )
}

export default flipped