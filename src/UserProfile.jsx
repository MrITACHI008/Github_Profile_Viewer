import React from 'react'

const UserProfile = ({userData}) => {
  return (
    <div>
        <h2>User Profile</h2>
        <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
        <p>Username: {userData.login}</p>
        <p>NAme: {userData.name}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Public Repositories: {userData.public_repos}</p>
    </div>
  )
}

export default UserProfile