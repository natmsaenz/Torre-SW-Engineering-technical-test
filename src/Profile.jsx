import { useState , useEffect} from "react";
import ProfilePicture from "./ProfilePicture";
import SkillGroup from "./SkillGroup";
import Navbar from "./Navbar";
import { fetchUserData } from "./DataServices";
import "./Profile.css";

function Profile() {
  const [userData, setUserData] = useState({});
  const skillsData = [{
    proficiency: "Beginner",
    skills: ["CSS", "HTML"]

  },
{
  proficiency: "Intermediate",
  skills: ["C", "Python"]
},

{    proficiency: "Expert",
skills: ["Ruby", "C++"]
},
]
  

  useEffect(() =>{
    async function fetchData(){
      const userData = await fetchUserData('natmsaenz25');
      //const skillsData = await fetchSkillsData();

      setUserData(userData);
      //setSkillsData(skillsData);
    }
    fetchData();
  }, []);
console.log('user: ',{userData, skillsData})
  return (
 <>
    <Navbar />
          <div className="profile">
      <ProfilePicture
        src={userData.picture}
        alt="profile picture"
        name={userData.name}
      />
      <h2 className="name">{userData.name}</h2>
      <div className="skills">
        <h3>Skills and interests</h3>
        {skillsData.map((skillGroup, index) => (
          <SkillGroup
            key={index}
            proficiency={skillGroup.proficiency}
            skills={skillGroup.skills}
          />
        ))}
      </div>
    </div>

 </>
  );
}

export default Profile;
