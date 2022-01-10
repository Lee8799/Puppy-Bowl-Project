// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2110-vpi-web-pt';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${2110-vpi-web-pt}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2110-vpi-web-pt/players}/players');
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.players;
      } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
      }
 };

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2110-vpi-web-pt/playerId');
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.playerId;
       } catch (err) {
           console.error(`Oh no, trouble fetching player #${playerId}!`, err);
       }
   };

export const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2110-vpi-web-pt/playerId');
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.playerObj;
    } catch (err) {
        console.error(`Oh no, trouble adding new player #${playerObj}` , err);
    }
};

export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.error) throw result.error;
        return;
       } catch (err) {
        console.error(
          `Whoops, trouble removing player #${playerId} from the roster!`,
          err);
       }
   };


