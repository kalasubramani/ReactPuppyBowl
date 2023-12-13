import { useState } from "react";

function SearchPlayer({players,setFilteredPlayers}){
 const [searchText,setSearchText]=useState("");
 const [matchingPlayers,setMatchingPlayers] = useState([]);
 
 function handleSearch(e){

  //update search text to useState
  setSearchText(e.target.value)

  //get all players that matches search text
    let matchingPlayers=players.filter((player)=>{
        return player.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
   })
   //update useState
   setMatchingPlayers(matchingPlayers);
   setFilteredPlayers(matchingPlayers);
  }

  // add search bar 
  return (  
  <div> 
    <label  className='search'> Search player : <input type='text' value={searchText} onChange={handleSearch}/></label> 
    {
      searchText.length>0 ? 
      <span> &nbsp;
      Showing {matchingPlayers.length} matches of {players.length} players.
      </span>
      :null
    }
  </div>
  )
}

export default SearchPlayer