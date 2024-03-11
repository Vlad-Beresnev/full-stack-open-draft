import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter);
  
  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  // Distructured version of Display component
  const DisDisplay = ({ counter}) =>{
    return (
      <div>{counter}</div>
    )
  }

  // More compact form of arrow function
  const SimpleDisDisplay = ({ counter }) => <div>{counter}</div>

  const Button = ({ onSofa, name}) => (
    <button onClick={onSofa}>
      {name}
    </button>
  )
  
    
    console.log('rendering...', counter);

    const handleClick = () => {
      console.log('clicked');
    }

    const plusClick = () => {
      console.log('increasing, value before', counter);
      setCounter(counter + 1);
    }

    const minusClick = () => {
      console.log('decresing, value before', counter);
      setCounter(counter - 1);
    }

    const setToZero = () => {
      console.log('resetting to zero, value before', counter);
      setCounter(0);
    }

  return (
    <>
      <Display counter={counter} />
      <Button onSofa={() => { handleClick(); plusClick();}} name='plus' />
      <Button onSofa={setToZero} name='zero' />
      <Button onSofa={minusClick} name='minus' />
    </>
  )
}

export default App
