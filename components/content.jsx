import React from 'react';
import clsx from 'clsx';
import Particle from './particles';
import data from '../shared/json/about_me.json'
import { motion } from "framer-motion"

const date = new Date().getFullYear()

const Content = (props) => {
  return( 
    <div className={clsx(props.className, 'flex-column')}>
      
      <div className="avatar row justify-content-end mt-5 mb-5">
        <img src={data.avatar} alt="" style={{borderRadius: '50%', opacity: '.7'}}/>
      </div>      

      <div className="d-flex flex-column">
        <a href="https://github.com/hi-matbub">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
            <h1 className='fade-in'>{'/hi-matbub'}</h1>
        </motion.button>
        </a>
        <Particle />
      </div>

      <div id="container">
        <a href={`mailto:${data.email}`} target='_blank'>{data.email}</a>      
        <hr></hr>
        <br/>
        <p>
          <span style={{fontSize: '24px', lineHeight: '0'}}><b>{'Hi there'}</b></span>, &nbsp; 
          {data.about_me.intro}
          <br/><br/>
          {data.about_me.tech}          
        </p>
        <h3>Involvements</h3>
        <ul className='mb-4'>
          <li>
            {data.about_me.involvements.inv_1.title} 
              &nbsp;@&nbsp; 
              <a href={data.about_me.involvements.inv_1.co} 
                target='blank_'>
                  {data.about_me.involvements.inv_1.co}
              </a>
          </li>
          <li>
            {data.about_me.involvements.inv_2.title} 
              &nbsp;@&nbsp; 
              <a href={data.about_me.involvements.inv_2.co} 
                target='blank_'>
                  {data.about_me.involvements.inv_2.co}
              </a>
          </li>          
          <li>
            {data.about_me.involvements.inv_3.title} 
              &nbsp;@&nbsp; 
              <a href={data.about_me.involvements.inv_3.co} 
                target='blank_'>
                  {data.about_me.involvements.inv_3.co}
              </a>
          </li>
          <li>
            {data.about_me.involvements.inv_4.title} 
              &nbsp;@&nbsp; 
              {data.about_me.involvements.inv_4.co}
          </li>
          <li>
            {data.about_me.involvements.inv_5.title} 
              &nbsp;@&nbsp; 
              {data.about_me.involvements.inv_5.co}
          </li>
          <li>
            {data.about_me.involvements.inv_6.title} 
              &nbsp;@&nbsp; 
              {data.about_me.involvements.inv_6.co}
          </li>
        </ul>        
        <a href='mailto:hi@matbub.co' target='_blank'>
          <i>Let's get in touch.
            &nbsp;&nbsp;
            <small>{'>>'}</small>
          </i>
        </a>

      </div>
      <hr></hr>
      <footer className='d-flex flex-column mb-5'>
        <div className='align-self-end d-flex justify-content-end mb-4'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              <a href={data.linkedin}>
                <img src={'https://i.imgur.com/lX92tIx.png'} alt="linkedin"/>
              </a>    
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              <a href={data.github}>
                <img src={'https://i.imgur.com/NND1GYH.png'} alt="github"/>
              </a>
          </motion.button>
        </div>
        <small className='align-self-center'>
          <i>hi-matbub ©&nbsp;{date}</i>
        </small>
      </footer>
    </div>
  )
}

export default Content;