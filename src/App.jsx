// import GithubAPI from "./Components/GithubAPI";
import Logo from "./Components/Logo";
import GithubProfile from "./Components/GithubProfile";


import { useEffect, useState } from "react";


function App() {
  const [username, setUsername] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const updateInput = (e) => {
    setUsername(e.target.value);
  };

  const searchUser = (e) => {
    e.preventDefault();
    fetchData();
  };

  function fetchData() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div className="min-h-screen bg-gray-800 text-white">
    
      
        
          
      <div className="container mt-8 mx-auto">
        <Logo/>

        <h3 className="text text-white">Github Profile Search</h3>

        <form onSubmit={searchUser}>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="user name"
              value={username}
              onChange={updateInput}
              className="text-black  border-2 border-gray-300 px-4 py-2 rounded-md flex-grow"
            />
          </div>

          <div>
            <button type="submit" 
className="ml-2 bg-blue-500 hover:bg-blue-600 
           text-white px-4 py-2 rounded-md">

            Search</button>
          </div>
        </form>

      </div>
      
      {userProfile !== null ? (
      <GithubProfile userProfile={userProfile}/> 
      ):(
      <h1>Loading...</h1>
    )}
    
    
      
        
        
    

    </div>
    
  );
}

export default App;
