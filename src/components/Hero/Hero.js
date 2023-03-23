import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';

const Hero = ({ hero }) => {
  return (
    <div className={styles.Hero}>
    <div>
      <img className= {styles.imgProfile} src={hero.image} alt="" /> 
    </div>
    <div>
      <h2 className= {styles.tittleSection}>Hola :)</h2>
      {hero.aboutMe.map((item) => {
            return (
              <div>
                <p className= {styles.textInfo}>{item.info}</p>
              </div>
            );
          })}
      <button className= {styles.pdfBtn}><a href= {hero.pdf} target="_blank" rel="noopener noreferrer">Descargar CV pdf</a></button>
    </div>
    </div>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
