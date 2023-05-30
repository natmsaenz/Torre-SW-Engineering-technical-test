//Functions for API integration and to fetch the API data
const API_URL = 'https://cors-anywhere.herokuapp.com/https://torre.bio/api'
const defaultUser = {
  person : {
    name: "",
    picture:""
  },
  strengths : []
}


function groupByProficiency(data){
  return data.reduce((result,item) => {
    const {proficiency} = item;
    if(!result[proficiency]){
      result[proficiency] = [];
    }
    result[proficiency].push(item);
    return result;
  },{});
}

export async function fetchUserData(username) {
    try {
      const response = await fetch(`${API_URL}/bios/${username}`);
      const data = await response.json();
      const {person,strengths} = data || defaultUser;

      const skills = groupByProficiency(strengths);
      return {person,skills};
    } catch (error) {
      console.error('Error fetching user data:', error);
      return defaultUser;
    }
  }
  
  export async function fetchSkillsData(id) {
    try {
      const response = await fetch(`${API_URL}/opportunities/${id}`);
      const data = await response.json();
      return data || []; 
    } catch (error) {
      console.error('Error fetching skills data:', error);
      return [];
    }
  }
  
  