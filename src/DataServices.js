//Functions for API integration and to fetch the API data


export async function fetchUserData() {
    try {
      const response = await fetch('https://torre.bio/api/bios/$username');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return {};
    }
  }
  
  export async function fetchSkillsData() {
    try {
        //MODIFY THE FETCH PARAMETER
      const response = await fetch('https://api.example.com/skills');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching skills data:', error);
      return [];
    }
  }
  