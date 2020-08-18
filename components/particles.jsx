import React from 'react';
import Particles from "react-tsparticles";
import particleOptions from '../shared/json/particlesjs-config.json'
import clsx from 'clsx';
import styles from '../styles/particles.module.css'

const Particle = (props) => {
  return (
    <div className={clsx(styles.particlesContainer, props.className, 'd-flex')}>      
      <Particles
        id="tsparticles"
        width="242px"
        height="24px"
        className={clsx(styles.particles)}
        options={particleOptions}
      />
    </div>
  )
}


export default Particle;