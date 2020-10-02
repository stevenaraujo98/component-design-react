import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './backLogo.css';

export default function Inicio(props) {
    console.log(props);
    return (
        <>
          <i className={props.logo+" logo"}></i>
          {/*<FontAwesomeIcon className="logo" icon={faGithub} />*/}
        </>
    )
}
