import "./App.css"
import { useState } from 'react'

function App() {
  const [leftNumber, setLeftNumber] = useState(0)
  // const operationSimbol = useState('+')
  const [operationSimbol, setOperationSimbol] = useState('+')
  const [rightNumber, setRightNumber] = useState(0)
  // const resultNumber = getResult()
  const [resultNumber, setResultNumber] = useState(0)
  const [storeNumber, setStoreNumber] = useState(0)

  const getLeftNumber = (e) => {
    if(leftNumber === 0) {
      setLeftNumber(e.target.innerText)
    }else if (e.target.innerText !== ".") {
      setLeftNumber(leftNumber + e.target.innerText)
    } else if (e.target.innerText === "." && !String(leftNumber).includes(".") ) {
      setLeftNumber(leftNumber + e.target.innerText)
    }
  }

  const recallLeftNumber = () => {
    setLeftNumber(storeNumber)
  }

  const getRightNumber = (e) => {
    if(rightNumber === 0) {
      setRightNumber(e.target.innerText)
    }else if (e.target.innerText !== ".") {
      setRightNumber(rightNumber + e.target.innerText)
    } else if (e.target.innerText === "." && !String(rightNumber).includes(".") ) {
      setRightNumber(rightNumber + e.target.innerText)
    }
  }

  const recallRightNumber = () => {
    setRightNumber(storeNumber)
  }

  const getOperationSimbol = (e) => {
    setOperationSimbol(e.target.innerText)
  }

  const setStore = () => {
    setStoreNumber(resultNumber)
  }

function roundBigNumber(number) {
  if (number.toString().length > 14 && String(number).includes(".")) {
    return number.toFixed(3)
  } else {
    return number
  }
}

  function getResult() {
    if (operationSimbol === "+") {
      let risultato = Number(leftNumber) + Number(rightNumber)
      return setResultNumber(roundBigNumber(Number(leftNumber) + Number(rightNumber)))
    } else if (operationSimbol === "-") {
      return setResultNumber(roundBigNumber(Number(leftNumber) - Number(rightNumber)))
    } else if (operationSimbol === "*") {
      return setResultNumber(roundBigNumber(Number(leftNumber) * Number(rightNumber)))
    } else if (operationSimbol === "÷") {
      return setResultNumber(roundBigNumber(Number(leftNumber) / Number(rightNumber)))
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
        <p>{leftNumber}</p>
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
          <button onClick={getLeftNumber}>.</button>
          <button onClick={() => setLeftNumber(0)}>Clear</button>
          <button onClick={recallLeftNumber}>Recall</button>
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
          <button onClick={getRightNumber}>.</button>
          <button onClick={() => setRightNumber(0)}>Clear</button>
          <button onClick={recallRightNumber}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{resultNumber}</p>
        <div>
          <button onClick={getResult}>=</button>
          <button onClick={setStore}>Store</button>
          <button>Stored Number: {storeNumber}</button>
        </div>
      </div>
    </div>
  )
}

export default App
