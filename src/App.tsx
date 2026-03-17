import { useState } from "react"
import './assets/App.scss'
import SetCounter from "../components/SetCounter"
function App() {
 

  interface Post{

    id:number,
    title:string,
    likes:number,
    todo:boolean
  }

  const [inputpost,setinputPost]=useState('')
  const [posts,setPosts]=useState<Post[]>([
{id:0,title:'Gardening 🍏',likes:34,todo:false},
{id:1,title:' Burger🍔',likes:44,todo:true},
{id:2,title:'Car 🚗',likes:24 ,todo:false},

  ])



  const handleAdd=()=>
  {
    const newPost=
    {

      id:Math.max(0,...posts.map(ids=>ids.id))+1,
      title:inputpost,
      likes:0,
      todo:false
    }

    setPosts([...posts,newPost])
    setinputPost('');
  }


  const handleLikes=(post:Post)=>
  {
    post.likes++;
    setPosts([...posts])
  }

  
  const handleDelete=(post:Post)=>
  {
   setPosts(posts.filter(p=>p.id!==post.id))
  }

  return (
    <>
   <p> in the name of Allah</p>

   <div className="container mb-5 bg-grey">
    <div className="input-group">
    <input
     type="text" 
     className="form-control fw-semibold" 
     value={inputpost}
     onChange={e=>setinputPost(e.target.value)}
     required
     placeholder=" enter title"
         />
    <button className="btn btn-success" onClick={handleAdd}>Add</button>
    </div>
   </div>

   <div className="container m-5">

    {posts.length>0 ?(<> <ul className="list-group">

      { posts.map(post=> <li className="list-group-item text-bold fw-semibold" key={post.id}>
       <span style={post.todo?{color:'red'}:{}}>{post.title}
        ({post.likes}) likes</span> 
        <button
         className="btn btn-success btn-sm mx-1 fw-semibold"
         onClick={()=>handleLikes(post)}>❤</button>
        <button className=" btn btn-warning btn-sm mx-1 fw-semibold"
        onClick={()=>handleDelete(post)}>❌</button>
        
        </li>)}
    </ul>
    <SetCounter count={posts.length} todos={posts.map(todo=>todo.todo)}
    />
    
    </>    ):(<p className="container border m-1 fw-bold text-danger">There are no todos</p>)

    }


   </div>
    </>
  )
}

export default App
