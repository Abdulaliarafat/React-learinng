
import { Suspense } from 'react'
import './App.css'
import DaisyNavber from './components/DaisyNvaber/DaisyNavber'
import Navber from './components/Navber/Navber'
import PricingOption from './PricingOption/PricingOption'
import ReasultChart from './ReasultChart/ReasultChart'
import axios from 'axios'
import MarksChart from './MarksChart/MarksChart'
 
const peicingPromise=fetch('pricingData.json').then(res=>res.json())
const marksPromise=axios.get('marksData.json')
function App() {
  return (
    <>
  <header>
    <Navber></Navber>
   {/* <DaisyNavber></DaisyNavber> */}
  </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <PricingOption peicingPromise={peicingPromise}></PricingOption>
      </Suspense>
      <ReasultChart></ReasultChart>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
       <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
    </main> 
    </>
  )
}

export default App
