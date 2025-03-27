import { useState } from "react"

export default function Batsman(){

    const [runs,setRuns]=useState(0)
    const [sixes,setSixes] = useState(0)

    const handleSingle=()=>{
        const updateRuns=runs+1;
        setRuns(updateRuns)
    }
    const handleFour=()=>{
      const updateRuns=runs+4;
      setRuns(updateRuns)
    }
    const handleSixes=()=>{
      const updateRuns=runs+6;
      const countSixes= sixes + 1;
      setSixes(countSixes)
      setRuns(updateRuns)
    }
const runsStyle={
    border:'2px solid yellow'
}
    return(
        <div style={runsStyle}>
            <h2>Team: Bangladesh</h2>
            <span>Sixes: {sixes}</span>
            {
                runs >=50 && <p>Congretulation !! your score: 50</p> 
                
            }
            <h3>Score: {runs}</h3>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSixes}>Six</button>
            <br />
        </div>
    )
}