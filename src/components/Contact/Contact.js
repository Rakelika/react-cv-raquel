import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = ({contact}) => {
  return(
    <div className={styles.Contact}>
      <h3 className= {styles.tittleSection}>¿Quieres conocerme un poco más?</h3>
      <h2 className= {styles.tittleSection}>Contacta conmigo</h2>
      <button className= {styles.mailBtn}>

<a href= {contact.email} target="_blank" rel="noopener noreferrer"><FaRegEnvelope/> ¡Escríbeme un mail!</a>
      </button>
      <div>
        <a href={contact.gitHub} target="_blank" rel="noopener noreferrer"><FaGithubSquare  className= {styles.rrss}/></a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin  className= {styles.rrss}/></a>
      </div>
    </div>
  )};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
