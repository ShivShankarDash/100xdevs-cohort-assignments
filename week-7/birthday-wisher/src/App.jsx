
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div style={{display : 'flex', alignItems : 'center', position : 'relative', justifyContent : 'center', flexDirection : 'column'}}>
     <Heading />
     <UserNameInput />
  
    </div>
  )
}


function Heading(){
  return (
    <div style={{color : '000000', fontSize : '30px', marginTop : '60px', fontWeight : 'bold'}}>
      Birthday Wisher
    </div>
  )
}
function UserNameInput(){

  const buttonStyle = {
    backgroundColor: '#333', // Dark background color
    color: '#fff', // White text color
    border: 'none',
    padding: '10px 20px', // Adjust padding as needed
    borderRadius: '10px', // Curved radius
    cursor: 'pointer',
    fontSize: '16px', // Adjust font size as needed
    transition: 'background-color 0.3s ease', // Add a smooth transition effect
  };

  const [value, setValue] = useState("")
  const [name, setName] = useState("")

  function changeHandler(e) {
    setValue((e.target.value))
  }

  function cardGenerator(){
    setName(value)
  }

  return (
    <>
    <div style={{display : 'flex', width : '70%', marginTop : '20px'}}>
      <input placeholder='Name of the user' style={{fontSize : '15px', width : '100%', marginRight : '30px'}} onChange={changeHandler}></input>
      <button style={buttonStyle} onClick={cardGenerator}>Generate</button>
    </div>
    <BirthdayCard name={value} message='You will fight back and win!'/>
    <BirthdayCard name={value} message='You will fight back and win!'/>
    <BirthdayCard name={value} message='You will fight back and win!'/>
    </>
  )
}

const BirthdayCard = ({ name, message }) => {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      margin: '20px',
      width: '300px',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Happy Birthday, {name}!</h2>
        <p style={{ fontSize: '16px', color: '#666' }}>{message}</p>
      </div>
    </div>
  );
};

export default App
