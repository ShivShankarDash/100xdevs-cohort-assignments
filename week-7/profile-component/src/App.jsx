import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dp from './assets/dp.jpg'
import './App.css'

function App() {
  
  return (
  <>
    <CardComponent></CardComponent>
    </>
  )
}

function CardComponent() {
  return (
    <div style={{ width: '350px', height: '250px', position: 'relative', borderColor : 'black', borderStyle : 'solid'}}>
      <BackgroundImage />
      <ProfilePicture />
      <UserInfo />
      <LineComponent />
      <AccountInfo />
      
    </div>
  );
}

function LineComponent() {
  return (
    <div style={{position : 'absolute', width : '100%', backgroundColor : 'lightgray' , height : '1px', marginTop : '190px'}}>
    </div>
  )
}

function BackgroundImage(){
  return ( 
  <div style={{backgroundColor : '#2196f3', width : '100%', height : '30%' , position : 'absolute'}}></div>
  );
}

function ProfilePicture() {
  return (
    <div style={{ position: 'absolute', top: '25px', left: '120px' }}>
      <img style={{ borderRadius: '50%', height: '100px', width: '100px' }} src={dp} alt="Profile" />
    </div>
  );
}

function UserInfo(){
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: '130px', left: '115px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ color: 'black', marginRight: '5px', fontWeight : 'bold'}}>Rita Correia</div>
      <div style={{ color: 'grey' }}>32</div>
    </div>
    <div style={{ color: 'grey', marginTop: '5px' }}>London</div>
  </div>
   )
}

function AccountInfo(){
  return (
    <div style={{display : 'flex', justifyContent: 'space-between', position : 'absolute',marginTop : '205px', width : '100%'}}>
    <div style={{display : 'flex',flexDirection : 'column', alignItems : 'center', flexGrow : 1}}>
      <div style={{color : 'black', fontWeight : 'bold', fontSize : '20px'}}>80K</div>
      <div>Followers</div>
    </div>
    <div style={{display : 'flex', flexDirection : 'column',  alignItems : 'center', flexGrow : 1}}>
      <div style={{color : 'black', fontWeight : 'bold', fontSize : '20px'}}>803K</div>
      <div>Likes</div>
    </div>
    <div style={{display : 'flex', flexDirection : 'column',  alignItems : 'center', flexGrow : 1}}>
      <div style={{color : 'black', fontWeight : 'bold', fontSize : '20px'}}>1.4K</div>
      <div>Photos</div>
    </div>
    </div>

  )
 
}


export default App
