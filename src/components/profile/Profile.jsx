import { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import { SkillGroup } from "./SkillGroup";
import Navbar from "./Navbar";
import { fetchUserData } from "./DataServices";
import "./Profile.css";
import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});
  const [skillsData, setSkillsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { person, skills } = await fetchUserData(username);
        console.log({ person, skills });

        setUserData(person);
        setSkillsData(skills);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    }
    fetchData();
  }, [username]);

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
          {Object.entries(skillsData).map(([proficiency, skills], index) => (
            <SkillGroup
              key={index}
              proficiency={proficiency}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </>
  );
}

{
  /*
function Profile() {
  const {username} = useParams();
  const [userData, setUserData] = useState({});
  const [skillsData,setSkillsData] = useState([]); 
  

  useEffect(() =>{
    async function fetchData(){
     
      const {person,strengths} = await fetchUserData(username);

      setUserData(person);
      setSkillsData(strengths);
    }
    fetchData();
   
  }, [username]);

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
            name={skillGroup.name}
          />
        ))}
      </div>
    </div>

 </>
  );
}
*/
}
export default Profile;
