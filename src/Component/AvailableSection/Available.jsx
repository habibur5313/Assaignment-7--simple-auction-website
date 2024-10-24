

const Available = ({player,handleChoosePlayer}) => {

const {playerName,country,image,role,battingBowlingType,biddingPrice} = player
                    return (
                                        <div className="border rounded-xl">
                                         <div className="card card-compact ">
  <figure className=" p-4">
  <img className="w-full h-[300px] border rounded-xl " src={image} alt="" /> 
  </figure>
  <div className="px-4  font-medium">
    <h2 className="card-title"><i className="fa-solid fa-user"></i>{playerName}</h2>

    <div className="flex justify-between items-center border-b pb-5">
                    <p className="lg:text-xl text-gray-500"><i className="fa-solid fa-flag"></i> {country}</p>
                    <button className=" px-5 py-2 border rounded-xl bg-gray-300 text-xl">{role}</button>
    </div>
    <p>Rating</p>

    <div className="flex justify-between items-center">
                    <p>{battingBowlingType}</p>
                    <p className="text-gray-400">{battingBowlingType}</p>
    </div>

    <div className="flex justify-between items-center mb-5">
                    <p>Price: {biddingPrice} <i className="fa-solid fa-dollar-sign"></i></p>
                    <button onClick={() => handleChoosePlayer(player)} className="py-1 px-2 border rounded-xl text-xl font-medium">Choose Player</button>
    </div>
    
  </div>
</div>                  
                                        </div>
                    );
};

export default Available;