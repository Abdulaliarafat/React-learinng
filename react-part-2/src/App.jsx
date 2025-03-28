import { Suspense } from 'react'
import './App.css'
import Batsman from './assets/Batsman'
import Counter from './assets/counter'
import Users from './assets/user'
import Friends from './assets/friends'
import Posts from './assets/posts'
// const fetchuser=fetch('https://jsonplaceholder.typicode.com/users')
//                .then(res=>res.json())
//  const fetchFriends= async()=>{
//     const res=await fetch('https://jsonplaceholder.typicode.com/users')
//     return res.json()
//  }
const fetchPosts=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  // const friendsPromise = fetchFriends();
  const postPromise= fetchPosts()
  
  function handleclick(){
     alert('I am clicked')
  }
  const handleclick3=()=>{
    alert('Clicked 3')
  }
  const handleAdd5=(num)=>{
    const addNum=num+5;
    alert(addNum);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<h4>Post are comming......</h4>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>
       {/* <Suspense fallback={<h3>@Loading.....</h3>}>
       <Users fetchuser={fetchuser}></Users>
        </Suspense>  */}

        {/* <Suspense fallback={<h4>Friends are comming soon........</h4>}>
          <Friends friendsPromise ={friendsPromise}>
          </Friends>
          </Suspense>    */}

      <br />
      <Batsman></Batsman>
      <br />
      <Counter></Counter>
      <br />
     <button onClick={handleclick}>Click me</button>
     <button onClick={function handleclick2(){
     alert('clicked 2')}}>Click me 2</button>
     <button onClick={handleclick3}>Click me 3</button>
     <button onClick={()=>alert('click me 4')}>Click me 4</button>
     <button onClick={()=>handleAdd5(20)}>Click me 5</button>
    </>
  )
}

export default App
