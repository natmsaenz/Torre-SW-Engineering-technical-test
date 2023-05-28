import React from "react";

function ProfilePicture({ src,alt, name }){
    return(
        <div className="profile-picture">
            <img src={src} alt={alt}/>
            <h2 className="name">{name}</h2>
        </div>
    );
}

export default ProfilePicture