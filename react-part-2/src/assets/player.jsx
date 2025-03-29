import { use, useEffect, useState } from "react"

export default function Player(){
    const [player,setPlayer]=useState([])
    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setPlayer(data))
    },[])
    return(
        <div className="cards">
            <h4>Players :{player.length} </h4>
            <ol>
            {
                player.map(play=><li>{play.name}</li>)
            }
            </ol>
        </div>
    )
}