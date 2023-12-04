
import { useEffect, useState } from "react"

export default function Post(){

    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h3>Post: {post.length}</h3>
            {
                post.map(post => <Post></Post>)
            }
        </div>
    )
}