import {useState} from 'react'

function FooStore() {
  const [counter, setCounter] = useState(0)
  function reset() {
    setCounter(0)
  }
  return {
    counter,
    setCounter,
    reset,
  }
}

export default FooStore