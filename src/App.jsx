import { useState } from 'react'
import './App.css'
import Navbar from './Component/Header/Navbar'
import Banner from './Component/Header/Banner'
import Availables from './Component/AvailableSection/Availables'
import Footers from './Component/Footer/Footers'
import Selected from './Component/Selected/Selected'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
const [freeDolor , setFreeDolor] = useState(0)

const [SelectedPlayers, setSelectedPlayers] = useState([])

const [buttonActive, setButtonActive] = useState(true)


const handleFreeDolor = () => {
  setFreeDolor (freeDolor + 1000000)
  toast.success('Free Credit Added Succesfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
   
    });
}

const handleChoosePlayer = (player) => {
  if(freeDolor > player.biddingPrice){
    const newPlayers =  SelectedPlayers.find(p => p.id === player.id )
    if( SelectedPlayers.length >= 6){
      toast.error('Maximum 6', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
       
        });
    }
    else if( newPlayers){
      toast.warn(`${player.playerName} is already selected`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
    }
    else{
      toast.success(`${player.playerName} Choose Succesfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
     
        });
      setSelectedPlayers([...SelectedPlayers,player])
      setFreeDolor(freeDolor - player.biddingPrice)
    }
  }
  else{
    toast.error('Insufficiant Balance', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
     
      });
  }
}

const handleAvailable = () => {
  setButtonActive(!buttonActive)
}
const handleSelected = () => {
  setButtonActive(!buttonActive)
}

const handleAddPlayers = () => {
  setButtonActive(!buttonActive)
  
}

const handleRemove = (selectedPlayers) => {
  const remainingPlayers =  SelectedPlayers.filter(b => selectedPlayers.id !== b.id )
  setSelectedPlayers(remainingPlayers)
  setFreeDolor(freeDolor + selectedPlayers.biddingPrice)
  toast.warn(`${selectedPlayers.playerName} removed`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    
    });
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
  <button onClick={handleAvailable} className={` px-2 py-2 ${buttonActive && 'active'} text-xl font-medium`}>Available</button>
  <button onClick={handleSelected} className={`px-2 py-2 ${buttonActive || 'active' } text-xl font-medium`}>Selected({SelectedPlayers.length})</button>
  </div>
</div>

<div className='mt-10'>
{buttonActive && (
  <Availables handleChoosePlayer={handleChoosePlayer}></Availables>
)}
{buttonActive || (
<Selected selectedPlayers ={SelectedPlayers} handleRemove={handleRemove} handleAddPlayers={handleAddPlayers}></Selected>
)}

</div>
      </div>
<Footers></Footers>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    </div>
  )
}

export default App
