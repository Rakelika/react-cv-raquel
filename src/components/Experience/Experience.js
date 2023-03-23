import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';
import { FaUserAstronaut } from "react-icons/fa";

const Experience = ({experience}) => {
  return(
    <div className={styles.Experience}>
      <h2 className= {styles.tittleSection}><FaUserAstronaut/> Experiencia laboral</h2>
      <div className="education card">
          {experience.map((item) => {
            return (
              <div>
              <div className= {styles.itemExperience} >
                <p  className= {styles.principalExperience}>{item.name}</p>
                <p className= {styles.dataExperience}>{item.where} | {item.date}</p>
                {item.description.map((item) => {
                  return (
                    <p className= {styles.descriptionExperience}>- {item.info}</p>
                  )
                })}
              </div>
              </div>
            );
          })}
        </div>
    </div>
  )};

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
