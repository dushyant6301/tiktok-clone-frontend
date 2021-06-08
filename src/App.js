import axios from './axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';

function App() {
  document.body.style = 'background-color: black;';
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/v2/posts")
      setVideos(res.data)
    }
    fetchVideos();
  }, [])

  return (

    <div className="app">
      <div className="app__video">
        {videos.map(({ _id, url, channel, description, song, likes, shares, messages }) => (
          <Video
            key={_id}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />

        ))}
      </div>
    </div>
  );
}

export default App;
