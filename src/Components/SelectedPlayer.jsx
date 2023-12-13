import { Link, useNavigate, useParams } from "react-router-dom";
import './SelectedPlayer.css'
import axios from "axios";

const SelectedPlayer=({players,setPlayers})=>{

   //get the id from url 
 const {id} = useParams();
 const navigate = useNavigate();

   //get selected player details from data
   const selectedPlayer = players?.find((player) => {
    return player.id === Number(id);
  });

 function handleDelete()
  {
    try{ 
    //call api DELETE
    const deletePlayer= async ()=>{
      const response = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${selectedPlayer.id}`)
      const updatedplayers = updatePlayerList(selectedPlayer.id);
      //update state
       setPlayers(updatedplayers);
       
       alert("The player was deleted from database !")
       //goback to all players
      navigate('/players');
    }
    deletePlayer();
  }catch(error){
    console.log(error);
  }
  }

  //remove deleted user from state data
  function updatePlayerList(deletedPlayerId){
    return players.filter((player)=>{
          return player.id !== deletedPlayerId;
      })     
  }

  return(
    // <p> selected player</p>
    <div className="selectedPlayer">                  
      <h3>{selectedPlayer?.name}</h3>          
      <div className="playerDetails">              
        <img src={selectedPlayer?.imageUrl} alt="" className="playerImage"/> 
        <ul>
          <li><span className="bold">Team Id : </span>{selectedPlayer?.teamId}</li> 
          <li><span className="bold"> Status :  </span>{selectedPlayer?.status}</li>
          <li><span className="bold"> Breed :  </span>{selectedPlayer?.breed}</li>          
        </ul>
        <button className="delete" onClick={handleDelete}>Delete Player</button>
      </div>
      <Link to="/players" className="goBackLink">Go back to all players</Link>
    </div>
  )
}

export default SelectedPlayer;