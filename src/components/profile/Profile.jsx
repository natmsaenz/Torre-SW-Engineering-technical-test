import { useState, useEffect } from "react";
import ProfilePicture from "./ProfilePicture";
import { SkillGroup } from "../skills/SkillGroup";
import Navbar from "../navbar/Navbar";
import { fetchUserData } from "../../data-services/DataServices";
import "./Profile.css";
import { useSearchParams } from "react-router-dom";

function Profile() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const [userData, setUserData] = useState({});
  const [skillsData, setSkillsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const { person, skills=[] } = await fetchUserData(username);
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
            <SkillGroup key={index} proficiency={proficiency} skills={skills} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
