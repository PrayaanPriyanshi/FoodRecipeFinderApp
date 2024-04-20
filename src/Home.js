
import Main from './Component/Main';
import React, { useState } from 'react';
import './Home.css'

function Home() {
  // State variable to track whether to show the Main component
  const [showMain, setShowMain] = useState(false);
// Function to handle the click event on the Search button
  const handleClick = () => {
    setShowMain(true);
  };
  return (
    <div>

      <div className='logo'>
        
         <h1><span>F</span>ood <span>R</span>ecipe <span>F</span>inder</h1>
      </div>
      <br></br><br></br><br></br>
      <div>
      <div className='discription'>
        <h2 color='rgb(224, 16, 16)'>Welcome!</h2>
        <h1 >Please Search Your Favourite Recipe</h1>
        
        <br></br>
        <br></br>
        {!showMain &&
          <button  className='search' onClick={handleClick}>Search</button>}
        {showMain && <Main></Main>}
       </div>

       <div className='search-bar'>
       

     
       </div>
       </div>

    </div>
  )
}

export default Home
