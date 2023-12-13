import axios from 'axios';

//api calls only
//fetch player data api
export const fetchPlayers = async ()=>{
  try {
    const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players');
    return data.data.players;
  } catch(error) {
    console.log(error)
  }
  
}

