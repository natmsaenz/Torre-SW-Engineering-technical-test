import { useState , useEffect} from "react";
import ProfilePicture from "./ProfilePicture";
import SkillGroup from "./SkillGroup";
import Navbar from "./Navbar";
import { fetchUserData } from "./DataServices";
import "./Profile.css";
import { useParams } from "react-router-dom";

function Profile() {
  const {username} = useParams();
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
      console.log(window.location)
      const userData = await fetchUserData(username);
      //const skillsData = await fetchSkillsData();

      setUserData(userData);
      //setSkillsData(skillsData);
    }
    fetchData();
  }, [username]);
console.log('user: ',username)
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
