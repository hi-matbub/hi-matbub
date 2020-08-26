import React from 'react';
import clsx from 'clsx';
import Particle from './particles';
import data from '../shared/json/about_me.json'
import { motion } from "framer-motion"

const date = new Date().getFullYear()

const Involvements = () => {
  const array = Object.keys(data.involvements)
  return (
    <ul className='mt-4 mb-4'>
      {array.map(i => (        
        <li key={data.involvements[i].title}>
          {data.involvements[i].title}
            &nbsp; @ &nbsp; 
            <a href={data.involvements[i].url} target='_blank'> 
              <u>{data.involvements[i].co}</u>
            </a>
        </li>
      ))}
    </ul>
  )
}

const Resources = () => {
  const array = Object.keys(data.resources)
  return (
    <ul className='mt-4 mb-4'>
      {array.map(i => (        
        <li key={data.resources[i].title}>          
          <a href={data.resources[i].url} target='_blank'> 
            <u>{data.resources[i].title}</u>
          </a>
        </li>
      ))}
    </ul>
  )
}

const Archives = () => {
  const array = Object.keys(data.archives)
  return (
    <ul className='mt-4 mb-4'>
      {array.map(i => (        
        <li key={data.archives[i].title}>
          {data.archives[i].title}
            &nbsp; @ &nbsp; 
            <a href={data.archives[i].url} target='_blank'> 
              <u>{data.archives[i].co}</u>
            </a>
        </li>
      ))}
    </ul>
  )
}

const Certificates = () => {
  const array = Object.keys(data.certificates)
  return (
    <ul className='mt-4 mb-4'>
      {array.map(i => (        
        <li key={data.certificates[i].title}>          
          <a href={data.certificates[i].path} target='_blank'> 
            <i>
              <u>
                {data.certificates[i].title}
                  &nbsp; @ &nbsp; 
                {data.certificates[i].co}
              </u>
            </i>
          </a>
        </li>
      ))}
    </ul>
  )
}

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
          {data.intro}
          <br/><br/>
          {'I specialize in soft skills, as well as integrating and developing Front End interfaces.'} 
          <br/><br/>
          <i>
            {'I also specialize in email curation.'}
          </i>
          <br/><br/>
          {data.tech} 
          <br/><br/>
          {'I love the convenience of Serverless Backends such as AWS or Firebase, however I am well versed in TTD towards Server Side tech such as SQL, PostgreSQL, mySQL, and mongo.db'}             
        </p>

        <h3 className='mt-5'>Involvements</h3>
        <small className='small'>{'Featured & professional involvements.'}</small>
        <Involvements /> 
        
        <h3 className='mt-5'>Resources</h3>
        <small className='small'>{'Open Source resources I maintain as side-projects.'}</small>
        <Resources />

        <h3 className='mt-5'>Archives</h3>
        <small className='small'>{'Project\'s & involvements that didn\'t quite make the featured list.'}</small>
        <Archives />

        <h3 className='mt-5'>Certificates</h3>
        <small className='small'>{'Certified resources I apply to my everyday workflow.'}</small>
        <Certificates />

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