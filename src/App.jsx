import { useEffect, useState } from 'react'
import './App.css'
import {Link,useLocation,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Players from './Components/Players'
import SelectedPlayer from './Components/SelectedPlayer'
import AddPlayer from './Components/AddPlayer'
import {fetchPlayers} from './API'

function App() {
     const [players,setPlayers] = useState([]);     
    //useLocation hook
    const {pathname}= useLocation();
     
   //must run only once on page load, so dependency array must be []
  useEffect(()=>{
  const getPlayerData = async ()=>{
   const playerList = await fetchPlayers();
   console.log("playerdata ...",playerList);
   setPlayers(playerList);
  };
  getPlayerData();
  
},[])

  return (  
    <div className='parentDiv'>
      <h2 className='header'> React - Puppy Bowl</h2>
      {/* add a nav bar to the page */}
      <nav className="navBar">
        <Link to="/" className={pathname==="/"?'highlight': 'normal'}>Home</Link>
        <Link to="/players" className={pathname==="/players"?'highlight': 'normal'}>Players</Link>
       </nav>
    
      {/* add routes to components based on url path */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/players' element={<Players players={players}/>} />
        <Route path='/players/:id' element={<SelectedPlayer players={players} setPlayers={setPlayers}/>}/>
        <Route path='/addplayer' element={<AddPlayer  setPlayers={setPlayers}/>}/>
      </Routes>
     
     </div>
  )
}

export default App
