import React from 'react';
import ProfileHeader from '../ProfileHeader';
import PlaylistGrid from '../PlaylistGrid';

const ProfilePage: React.FC = () => {
  const userData = {
    name: 'John Doe',
    avatarUrl: 'https://via.placeholder.com/150', // Replace with actual avatar URL or a local image
    publicPlaylists: 2,
    followers: 100,
    following: 100,
  };

  const playlists = [
    {
      id: '1',
      name: 'Playlist 1',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      creator: 'John Doe',
    },
    {
      id: '2',
      name: 'Playlist 2',
      imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
      creator: 'John Doe',
    },
    // Add more playlists as needed
  ];

  return (
    <div className="profile-page">
      <ProfileHeader user={userData} />
      <div className="public-playlists-section">
        <h2>Public Playlists</h2>
        <PlaylistGrid playlists={playlists} />
      </div>
    </div>
  );
};

export default ProfilePage; 