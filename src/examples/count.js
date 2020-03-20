import React from 'react'
import {useStore} from 'reto'
import { observer } from "mobx-react-lite";
import { Button } from 'antd';
import FooStore from '../stores/FooStore'

function Count() {
  const fooStore = useStore(FooStore)
  function changeStore() {
    fooStore.setCounter(fooStore.counter + 1)
  }
  console.log('===count====')
  return (
    <div>
      <p>{fooStore.counter}</p>
      <Button type="primary" onClick={changeStore}>Change</Button>
      <Button type="dashed" onClick={fooStore.reset}>Reset</Button>
    </div>
  )
}

export default observer(Count)