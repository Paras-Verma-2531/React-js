import React from "react";
function ProfileCard(user) {
  return (
    <div className="profile-card">
      <img src={user.image} alt={user.firstName}/>
      <h2 className="title">{`${user.firstName} ${user.lastName}`}</h2>
      <p className="email">{user.email}</p>
    </div>
  );
}
export default ProfileCard;
