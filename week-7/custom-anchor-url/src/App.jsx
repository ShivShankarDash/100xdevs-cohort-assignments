
import './App.css'

function App() {
  
  return (
    <>
    <CustomUrl url='https://www.google.com' text='Click on me to visit google'/>
    </>
  )
}

function CustomUrl(props) {
  return (
    <div>
      <a href={props.url}>{props.text}</a>
    </div>
  )
}

export default App
