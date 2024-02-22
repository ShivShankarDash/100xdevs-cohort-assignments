import Developer from './classes/Developer'
import BusinessCard from './components/BusinessCard';


const dev = new Developer("Shiv","Software Developer",["Software Development","Games","Travelling","Reading"],["LinkedIn","Twitter"]);

function App() {
  
  return (
    <>
    <BusinessCard name={dev.name} title={dev.title} interests={dev.interests} creds={dev.creds}></BusinessCard>
    </>
  )
}

export default App
