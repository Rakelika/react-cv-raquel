import React from 'react';
import PropTypes from 'prop-types';
import styles from './Technologies.module.css';
import {FaLaptop} from "react-icons/fa";

const Technologies = ({technologies}) => {
  return(
    <div className={styles.Technologies}>
      <h2 className= {styles.tittleSection}><FaLaptop/> Tecnologías</h2>
      <div className= {styles.containerTechno}>
          {technologies.map((item) => {
            return (
              <div >
                <p className= {styles.itenTechno}>{item}</p>
              </div>
            );
          })}
        </div>
    </div>
  )};

Technologies.propTypes = {};

Technologies.defaultProps = {};

export default Technologies;
