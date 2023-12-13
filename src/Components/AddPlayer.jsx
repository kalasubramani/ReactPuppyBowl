import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './AddPlayer.css'


const AddPlayer = ({setPlayers})=>{

  const [teamData,setTeamData]=useState([]);
  const[name,setName]=useState("");
  const[breed,setBreed]=useState("");
  const[status,setStatus]=useState("bench");
  const[imageUrl,setImageUrl]=useState("");
  const[teamId,setTeamId]=useState("");

 const navigate = useNavigate();

//get team details from api
useEffect(()=>{
  try{ 
    const fetchTeams = async ()=>{
     const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/teams');
     console.log( "Fetching teams data --",data.data.teams);
     //update team data to useState
     setTeamData(data.data.teams);    
   }
   fetchTeams();   
 }catch(error){
   console.log(error.message)
 }
 },[]);

 //fetch team names from api
 const teamNames = teamData.map((team)=>{
 return <option value={team.id} key={team.id}>{team.name}</option>  
})

function handlesubmit(e){
  e.preventDefault();
 
  //create newPlayer obj
  const newPlayer={
    name,
    breed,
    status,
    imageUrl,
    teamId: teamId?Number(teamId):undefined
  }
 
 //call api
  try{ 
  const createNewPlayer=async (newPlayer)=>{
      const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2310/players",newPlayer);
     
      const createdUser=data.data.newPlayer;
      //add new user to players useState
      setPlayers((players) => {return [...players, createdUser]})
      alert("New player added to database !")
      //goback to all players
      navigate('/players');
  }
  createNewPlayer(newPlayer);
}catch(error){
  console.log(error.message);
}
}

  return(
    <>
    <form onSubmit={handlesubmit} className="addPlayerForm">
      <h3 className="addplayerHeading"> Enter new player details and click Submit</h3>
      <label>Name: <input type="text" value={name} onChange={e=>{setName(e.target.value)}} required></input></label>
      <label>Breed: <input type="text" value={breed} onChange={e=>{setBreed(e.target.value)}} required></input></label>
      <label>Status: &nbsp;
        <select value={status} onChange={e=>{setStatus(e.target.value)}}>
          <option value="bench" selected>Bench</option>
          <option value="field">Field</option>          
        </select>
      </label>
      <label>Image url: <input type="text"  value={imageUrl} onChange={e=>{setImageUrl(e.target.value)}} placeholder="Copy paste URL to the image here" required></input></label>   
      <label>Team Id: &nbsp;
        <select  value={teamId} onChange={e=>{setTeamId(e.target.value)}}>
          <option value="" disabled>Select team</option>
          {teamNames}                  
        </select>
      </label> 
      <input type="submit" className="addButton"></input>
      </form>
      <Link to="/players">Go back to all players</Link>
    </>
    
  )
}

export default AddPlayer;