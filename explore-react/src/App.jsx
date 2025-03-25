
import './App.css'
import ToDo from './assets/todo'

function App() {
  const time=50;
  
  return (
    <>
      <h1>React Coure concept</h1>
      <ToDo task='learn react' isDone={true} time={time}></ToDo>
      <ToDo task='Revise js' isDone={true} time='100'></ToDo>
      <ToDo task='Take an nap' isDone={false}></ToDo>
      {/* <Students></Students>
      <Students></Students>
      <Person></Person>
      <Developer name='Arafat' tech='jS'></Developer>
      <Developer name='Rahat' tech='jS'></Developer>
      <Developer name='Refat' tech='jS'></Developer>
      <Player name='tamim' runs='5000'></Player>
      <Player name='Musfiqur' runs='5000'></Player> */}
      
    </>
  )
}
function Player({name,runs}){
  return(
     <div className='students'>
      <h3>Name: {name}</h3>
      <p>Run: {runs}</p>
     </div>
  )
}
function Students(){
  return(
   <div className='students'>
    <p>Name:</p>
    <p>Dept:</p>
   </div>
  )
}
function Developer(props){
  console.log(props)
  return(
    <div style={{
      border:'2px solid blue',
      borderRadius:'20px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Tecnology: {props.tech
        }</p>
    </div>
  )
}


function Person(){
  const age = 17;
  const name = "jolil"
  const personStyle={
    color:"red",
    textAlign:'center'
  }
  return(
    <p style={personStyle}>I am Person {name} {age}</p>
  )
}
function Criket(){
  return(
    <div>
      <h1>Criket</h1>
      <p>Play and loseing</p>
    </div>
  )
}

export default App
