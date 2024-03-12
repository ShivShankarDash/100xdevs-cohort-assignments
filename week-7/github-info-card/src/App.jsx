
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [data,setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(0)

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get('https://api.github.com/users/hkirat');
        setData(response.data);
      }catch(error){
        setError(error)
      }
      finally{
        setLoading(false)
      }
    }
    fetchData()
  },[])


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const githubUser = {
    "login" : data.login,
    "avatar_url" : data.avatar_url,
    "public_repos" : data.public_repos,
    "followers" : data.followers,
    "following" : data.following
  }
  return (
    <div style={{display : 'flex', justifyContent : 'center',alignItems : 'center', flexDirection : 'column'}}>
     <img src={githubUser.avatar_url} style={{borderRadius : '50%', width : '50px', height : '50px'}}/>
     <p>Public Repos : {githubUser.public_repos}</p>
     <p>Followers : {githubUser.followers}</p>
     <p>Following : {githubUser.following}</p>
    
    </div>
  )
}

export default App
