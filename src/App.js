import "./App.css"
import { useState } from 'react'

function App() { 
  const [LeftNumber, setLeftNumber] = useState(0)
  // const operationSimbol = useState('+')
  const [operationSimbol, setOperationSimbol] = useState('+')
  const [rightNumber, setRightNumber] = useState(0)
  // const resultNumber = getResult()
  const [resultNumber, setResultNumber] = useState(0)
  const [storeNumber, setStoreNumber] = useState(0)

  const getLeftNumber = (e) => {
    setLeftNumber(parseInt(LeftNumber+e.target.innerText, 10))
  }

  const getRightNumber = (e) => {
    setRightNumber(parseInt(rightNumber+e.target.innerText, 10))
  }

  const getOperationSimbol = (e) => {
    setOperationSimbol(e.target.innerText)
  }
  
  const setStore = () => {
    console.log('before set store', storeNumber, resultNumber)
    setStoreNumber(resultNumber)
    console.log('after set store', storeNumber)
  }

  function getResult(){
    if (operationSimbol === "+") {
      return (setResultNumber(LeftNumber+rightNumber), console.log('resultNumber:', resultNumber))
    } else if (operationSimbol === "-") {
      return setResultNumber(LeftNumber-rightNumber)
    } else if (operationSimbol === "*") {
      return setResultNumber(LeftNumber*rightNumber)
    } else if (operationSimbol === "÷") {
      return setResultNumber(LeftNumber/rightNumber)
    }
  }
 
  
  // const [LeftNumber, setLeftNumber] = useState(0)
  // const [operationSimbol, setoperationSimbol] = useState('+')
  // const [rightNumber, setrightNumber] = useState(0)
  // const [resultNumber, setresultNumber] = useState(0)
  // const [storeValue, setStoreValue] = useState(0)
  // function setLeftNumber(inputNumber) {
  //   return LeftNumber = inputNumber
  // }
  // const countStateArrayle = useState(0)
  return (
    <div className="calculator">
        <div className="panel">
          <p>{LeftNumber}</p>
          <div className="numbers">
            <button onClick={getLeftNumber}>1</button>
            <button onClick={getLeftNumber}>2</button>
            <button onClick={getLeftNumber}>3</button>
            <button onClick={getLeftNumber}>4</button>
            <button onClick={getLeftNumber}>5</button>
            <button onClick={getLeftNumber}>6</button>
            <button onClick={getLeftNumber}>7</button>
            <button onClick={getLeftNumber}>8</button>
            <button onClick={getLeftNumber}>9</button>
            <button onClick={getLeftNumber}>0</button>
            <button onClick={() => setLeftNumber(0)}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operationSimbol}</p>
          <div className="numbers">
            <button onClick={getOperationSimbol}>+</button>
            <button onClick={getOperationSimbol}>-</button>
            <button onClick={getOperationSimbol}>*</button>
            <button onClick={getOperationSimbol}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{rightNumber}</p>
          <div className="numbers">
            <button onClick={getRightNumber}>1</button>
            <button onClick={getRightNumber}>2</button>
            <button onClick={getRightNumber}>3</button>
            <button onClick={getRightNumber}>4</button>
            <button onClick={getRightNumber}>5</button>
            <button onClick={getRightNumber}>6</button>
            <button onClick={getRightNumber}>7</button>
            <button onClick={getRightNumber}>8</button>
            <button onClick={getRightNumber}>9</button>
            <button onClick={getRightNumber}>0</button>
            <button onClick={() => setRightNumber(0)}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{resultNumber}</p>
          <div>
            <button onClick={getResult}>=</button>
            <button onClick={setStore}>Store</button>
          </div>
        </div>
    </div>
  )
}

export default App
