import React, {useState} from 'react';
import UserProfile from './UserProfile';
import './App.css';
function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
       const response = await fetch(`https://api.github.com/users/${username}`);
       if(response.ok){
        const data = await response.json();
        setUserData(data);
       }else{
        console.error('Error fetching user data');
       }
    }catch(error){
      console.error('Error fetching user data :', error)
    }
  }

  return (
    <div className="App">
        <h1>Github Profile Viwer</h1>
        <input 
          type="text"
          placeholder='Enter github username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUserData}>Fetch Profile</button>
        {userData && <UserProfile userData={userData} />}
    </div>
  );
}

export default App;
