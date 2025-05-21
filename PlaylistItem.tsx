import React from 'react';

interface Playlist {
  id: string;
  name: string;
  imageUrl: string;
  creator: string;
}

interface PlaylistItemProps {
  playlist: Playlist;
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({ playlist }) => {
  return (
    <div className="playlist-item">
      <img src={playlist.imageUrl} alt={playlist.name} className="playlist-image" />
      <div className="playlist-info">
        <p className="playlist-name">{playlist.name}</p>
        <p className="playlist-artist">By {playlist.creator}</p>
      </div>
    </div>
  );
};

export default PlaylistItem; 