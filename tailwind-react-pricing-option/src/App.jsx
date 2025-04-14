
import { Suspense } from 'react'
import './App.css'
import DaisyNavber from './components/DaisyNvaber/DaisyNavber'
import Navber from './components/Navber/Navber'
import PricingOption from './PricingOption/PricingOption'
 
const peicingPromise=fetch('pricingData.json').then(res=>res.json())

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
    </main> 
    </>
  )
}

export default App
