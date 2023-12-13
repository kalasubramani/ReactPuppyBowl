import { Link } from 'react-router-dom'
import './Players.css'
import { useState } from 'react'
import SearchPlayer from './SearchPlayer'


const Players=({players})=>{

 const [filteredPlayers, setFilteredPlayers]=useState();

 //player list to display
  const playerList= (filteredPlayers??players).map((player)=>{
      return (<div key={player.id} className="player"><Link to={`/players/${player.id}`} >{player.name}</Link></div>)      
  })
 
  return (
    <div className='playerContainer'>
      {/* search bar */}
      <SearchPlayer players={players} setFilteredPlayers={setFilteredPlayers}/>
      {/* add new player  */}
      <Link to='/addplayer' className='addPlayer' ><button >Add New Player</button></Link>
      {/* display list of players */}
      <div className="players">        
            {playerList}          
      </div>
   </div>
  )
}
export default Players;