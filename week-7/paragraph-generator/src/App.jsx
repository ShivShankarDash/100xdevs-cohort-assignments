
import { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';


function App() {
  
  return (
    <div style={{display : 'flex', alignItems : 'center', position : 'relative', justifyContent : 'center', flexDirection : 'column'}}>
      <Heading />
      <WordsInput />
    </div>
  )
}

function Heading(){
  return (
    <div style={{color : '000000', fontSize : '30px', marginTop : '60px', fontWeight : 'bold'}}>
      Para Generator
    </div>
  )
}

function WordsInput(){

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

  const [value, setValue] = useState(0)
  const [wordNumber, setWordNumber] = useState(0)

  function changeHandler(e) {
    setValue(parseInt(e.target.value))
  }

  function wordGenerator(){
    setWordNumber(value)
  }
  return (
    <>
    <div style={{display : 'flex', width : '70%', marginTop : '20px'}}>
      <input placeholder='Enter Number of Words' style={{fontSize : '15px', width : '100%', marginRight : '30px'}} onChange={changeHandler}></input>
      <button style={buttonStyle} onClick={wordGenerator}>Generate</button>
    </div>
    <div>
      <Paragraph textLength={wordNumber}/>
    </div>
    </>
  )
}

function Paragraph(props){

  const loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.

Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.

Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.

Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar.

Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.

Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.`;

const newGeneratedText = loremIpsumText.substring(0,props.textLength)

  return (
    <div>
      <p>{newGeneratedText}</p>
    </div>
  )
}



export default App
