import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'
import "./ProfilePicture.css"

function ProfilePicture({ src, name }){
    return(
        <div className="profile-picture">
            <img src={src} alt={name}/>

        </div>
    );
}
ProfilePicture.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

export default ProfilePicture