import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div style={{display : 'flex', justifyContent : 'center'}}>
    <BottomBar />
    </div>
  )
}

function BottomBar () {

  const colors = ['#ff0000', '#ffff00', '#000000', '#800080', '#008000', '#0000ff', '#ffa500'];
  return <div style={{ display : 'flex' , justifyContent : 'space-between', marginBottom : '30px' ,position : 'fixed' , bottom : 0,width : '50%', borderRadius : '5px' ,boxShadow : '0 8px 10px rgb(0 0 0 / 0.2)', backgroundColor : '#fafafa', height : '35px'}}>
  {colors.map((color,index) => <ColorDiv key={index} color={color}></ColorDiv>)}
  </div>
}

function ColorDiv(props) {

  function onClickHandler(){
    document.body.style.backgroundColor = props.color;
  }
  
  const textColor = props.color === '#000000' ? '#ffffff' : '#000000';
  return (<div style={{borderRadius : '5px' , backgroundColor : props.color , position : 'relative' , flex : 1, height : '25px', margin : '2px', cursor : 'pointer'}} onClick={onClickHandler}>
  <div style={{textAlign : 'center', marginTop : '2px', color : textColor}}>{props.color}</div>
  </div>)
}

export default App
