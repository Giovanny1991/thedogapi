import { useEffect, useState } from 'react';
// import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (

    <div className="posts-container">
      {posts.map((post) => {
        return (

          <div>
            <b >ID Imagen:</b>
            {post.id}
            <br/>
              <img  src={post.url} width='500' alt='Cargando imagen API'/>
          </div>
        );
      })}
    </div>

  );
};

export default App;
