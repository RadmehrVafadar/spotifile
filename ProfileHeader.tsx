import React from 'react';

interface UserData {
  name: string;
  avatarUrl: string;
  publicPlaylists: number;
  followers: number;
  following: number;
}

interface ProfileHeaderProps {
  user: UserData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <header className="profile-header">
      <div className="avatar-container">
        <img src={user.avatarUrl} alt={`${user.name}'s avatar`} className="avatar" />
      </div>
      <div className="user-info">
        <p className="profile-text">Profile</p>
        <h1>{user.name}</h1>
        <p className="stats">
          {user.publicPlaylists} Public Playlists &bull; {user.followers} Followers &bull; {user.following} Following
        </p>
        <div className="actions">
          <button className="following-button">Following</button>
          <button className="options-button">&bull;&bull;&bull;</button>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader; 