import {useCallback, useEffect, useState} from "react";
import url from './misc'

function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newArray =  data.filter( (item)=> item.id<=10)
        setPost(newArray);
       });
  }, []);

   console.log(post)


  return (
    <div className="posts-container">


        { post.map( (item)=> (
             <div key={item.id}>
               <div>
               <h1>{item.title}</h1>
                <p>{item.body}</p>
                 </div>
               </div>
        ) )}

    </div>
  );
}

export default Posts
