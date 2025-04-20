import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/daisyNav/DaisyNav'
import Navbar from './component/Navbar/Navbar'
import PricingOptions from './component/priceingOptions/PricingOptions'
import axios from 'axios'
import MarkChats from './component/marksChart/MarkChats'


const pricingPromise=fetch('pricingData.json').then(res=>res.json());

const markPromise=axios.get('marksData.json');

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>

        <Suspense>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <MarkChats markPromise={markPromise}></MarkChats>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
