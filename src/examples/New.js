import React, {useEffect, useContext} from 'react'
// import {useStore} from 'reto'
import { Button } from 'antd';
import { observer } from "mobx-react-lite";
import stores from '../stores'

function New(props) {
  const newStore = useContext(stores.NewStore)
  
  const handleClick = ()=>{
    newStore.setTitle('hello world!')
  }
  
  useEffect(()=>{
    console.log('===new====')
  })

  return (
    <div className="new_page">
      <p>{props.route.name}</p>
      <p>{newStore.title}</p>
      <Button onClick={handleClick}>获取</Button>
    </div>
  )
}

export default observer(New)