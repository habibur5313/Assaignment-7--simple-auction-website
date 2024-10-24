import { useState } from 'react'
import './App.css'
import Navbar from './Component/Header/Navbar'
import Banner from './Component/Header/Banner'
import Availables from './Component/AvailableSection/Availables'
import Footer from './Component/Footer/Footer'
import Selected from './Component/Selected/Selected'


function App() {
const [freeDolor , setFreeDolor] = useState(0)

const [SelectedPlayers, setSelectedPlayers] = useState([])

const [buttonActive, setButtonActive] = useState(true)

console.log(SelectedPlayers);


const handleFreeDolor = () => {
  setFreeDolor (freeDolor + 1000000)
}

const handleChoosePlayer = (player) => {
  if(freeDolor > player.biddingPrice){
    const workItem =  SelectedPlayers.find(b => player.id === b.id )
    if( SelectedPlayers.length >= 6){
      alert('not allowed')
    }
    else if( workItem){
      alert('not allowed2')
    }
    else{
      setSelectedPlayers([...SelectedPlayers,player])
      setFreeDolor(freeDolor - player.biddingPrice)
    }
  }
  else{
    alert('Insufficiant Balance')
  }
}

const handleAvailabe = () => {
  setButtonActive(!buttonActive)
}
const handleSelected = () => {
  setButtonActive(!buttonActive)
}


  return (
    <div >
      <div className='container mx-auto'>
      <Navbar freeDolor={freeDolor}></Navbar>
      <Banner handleFreeDolor={handleFreeDolor}></Banner>
<div className='flex justify-between mt-10 items-center'>
  <div>
  <h1 className='text-3xl font-semibold'> {buttonActive && ('Available Players')} </h1>
  <h1 className='text-3xl font-semibold'> {buttonActive || (`Selected Players ${SelectedPlayers.length} / 6`)} </h1>
  </div>
  <div className='flex border rounded-xl'>
  <button onClick={handleAvailabe} className={` px-2 py-2 ${buttonActive && 'active'} text-xl font-medium`}>Available</button>
  <button onClick={handleSelected} className={`px-2 py-2 ${buttonActive || 'active' } text-xl font-medium`}>Selected</button>
  </div>
</div>

<div className='mt-10'>
{buttonActive && (
  <Availables handleChoosePlayer={handleChoosePlayer}></Availables>
)}
{buttonActive || (
<Selected selectedPlayers ={SelectedPlayers}></Selected>
)}

</div>
      </div>
<Footer></Footer>
    </div>
  )
}

export default App
