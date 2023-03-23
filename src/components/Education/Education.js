import React from 'react';
import PropTypes from 'prop-types';
import styles from './Education.module.css';
import { FaUserGraduate } from "react-icons/fa";

const Education = ({education}) => {
return(
  <div className={styles.Education}>
    <h2 className= {styles.tittleSection}><FaUserGraduate/> Formación académica</h2>
    <div className="education card">
        {education.main.map((item) => {
          return (
            <div>
            <div className= {styles.itemEducation} >
              <p  className= {styles.principalEducation}>{item.name}</p>
              <p>{item.where} | {item.date}</p>
            </div>
            </div>
          );
        })}
      </div>
      <h3 className= {styles.tittleOthers}>y además...</h3>
      <div className="education card">
        {education.others.map((item) => {
          return (
            <div>
            <div className= {styles.itemEducation} >
              <p  className= {styles.principalEducation}>{item.title}</p>
              <p>{item.more}</p>
            </div>
            </div>
          );
        })}
      </div>
  </div>
)};

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
