import React from 'react';
import PlaylistItem from './PlaylistItem';

interface Playlist {
  id: string;
  name: string;
  imageUrl: string;
  creator: string;
}

interface PlaylistGridProps {
  playlists: Playlist[];
}

const PlaylistGrid: React.FC<PlaylistGridProps> = ({ playlists }) => {
  return (
    <div className="playlist-grid">
      {playlists.map((playlist) => (
        <PlaylistItem key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default PlaylistGrid; 