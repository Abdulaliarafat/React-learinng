import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottoles/Bottles'

const bottlesPromise= fetch('./bottle.json').then(res=>res.json());
// const bottlesPromise2 = fetch('https://raw.githubusercontent.com/Abdulaliarafat/bottles-data/refs/heads/main/bottles.json').then(res=>res.json())

function App() {
   
  // const bottle=[
  //   {id:1, name:'pink bottle',price:250,color:'pink'},
  //   {id:2, name:'pink bottle',price:250,color:'pink'},
  //   {id:3, name:'pink bottle',price:250,color:'pink'},
  //   {id:4, name:'pink bottle',price:250,color:'pink'},
  // ]

  return (
    <>

      <h2>Buy awsome water bottle</h2>
     <Suspense fallback={<h3>Bottles are loading.............</h3>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
     </Suspense>
    </>
  )
}

export default App
