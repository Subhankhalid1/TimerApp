import React, {useState} from 'react';
// import Loading from '../../Loading';
import './App.css';
import Timer from '../Timer/Timer';

function App() {
  const [day, setDay]=useState(true);
  return (
    
    <div className={`App1 ${day ? 'App1': 'darkNight'}`}>
      <button className="darkBtn" onClick={()=>{setDay(!day)}} style={{width:'100px', color:'whitesmoke',backgroundColor:"slateblue", height:'40px', margin:'1%', marginTop:'1%'}}>Dark-Mode</button>
      {/* {<Loading/>} */}
  <h2 style={{ color:"green", textAlign:"center"}}>Hello Subhan! Welcome to the Test Driven Development World.</h2>
  <h4 style={{color:"green", margin:"1%", textAlign:"center"}}>
    The purpose of TDD is to make the code clearer,
     simple and bug-free.  
    </h4>
  <Timer/>
    </div>
    
  );
}

export default App;
