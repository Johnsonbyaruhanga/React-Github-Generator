import React from 'react';
// import{Routes,Route} from "react-router-dom"
import GithubAPI from './Components/GithubAPI';
import Logo from './Components/Logo';
// import Users from "./Routes/Users";


function App(){
  return(
    <div className="min-h-screen bg-white">
      <nav className="container text-black-200 py-3">
        <a href="/" className="navbar-brand">Github Profile Generator App</a>
        
      </nav>
       <GithubAPI/> 
       <Logo/>
       

    </div>
  );
}
export default App;
console.log(App)
  
