import {
  faAward,
  faMapSigns,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './expertise.css'

export default function Expertise() {
  const font = '30px'
  return (
    <section className="expert">
      <h2>Mon expertise :</h2>
      <div className="expert-container">
        <div className="expert-bloc bordered">
          <div className="expert-icon-container parm">
            <FontAwesomeIcon
              className=""
              icon={faThumbsUp}
              style={{
                fontSize: '30px',
                width: '30px',
                height: '30px',
                color: 'white',
              }}
              size="lg"
            />
          </div>
          <div className="expert-right">
            <span>Experte du recrutement</span>
            <span className="duration">depuis 20 ans</span>{' '}
          </div>
        </div>
        <div className="expert-bloc bordered">
          <div className="expert-icon-container parm">
            <FontAwesomeIcon
              className=""
              icon={faAward}
              style={{
                fontSize: '30px',
                width: '30px',
                height: '30px',
                color: 'white',
              }}
              size="lg"
            />
          </div>
          <div className="expert-right">
            <span>Coach certifée</span>
            <span className="duration">RNCP</span>
          </div>
        </div>
        <div className="expert-bloc bordered">
          <div className="expert-icon-container parm">
            <FontAwesomeIcon
              className=""
              icon={faMapSigns}
              style={{
                fontSize: '30px',
                width: '30px',
                height: '30px',
                color: 'white',
              }}
              size="lg"
            />
          </div>
          <div className="expert-right">
            <span>Orientation des jeunes</span>
            <span className="duration">depuis 7 ans</span>{' '}
          </div>
        </div>
      </div>
    </section>
  )
}
