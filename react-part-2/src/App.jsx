import './App.css'
import Batsman from './assets/Batsman'
import Counter from './assets/counter'

function App() {
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
