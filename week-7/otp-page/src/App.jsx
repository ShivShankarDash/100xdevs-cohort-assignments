
import { useRef } from 'react'
import './App.css'

function App() {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]
  const handleChange = (index,e) => {
    const inputLength = e.target.value.length
    if(inputLength===1 && index < inputRefs.length - 1){
      inputRefs[index+1].current.focus()
    }
  }
  return (
    <div style={{display : 'flex'}}>
     {[0,1,2,3].map((index)=> <input key={index} ref={inputRefs[index]} style={{width : '30px', marginLeft : index > 0 ? '5px' : '0' }} maxLength={1} onChange={(e)=>handleChange(index,e)} />)}
    </div>
  )
}

export default App
