import React from 'react'
// import {useStore} from 'reto'
// import { Button } from 'antd';
// import FooStore from '../stores/FooStore'

function About(props) {
  return (
    <div className="about_page">
      <p>{props.route.name}</p>
    </div>
  )
}

export default About