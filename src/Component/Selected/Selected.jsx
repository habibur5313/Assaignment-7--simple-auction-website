const Selected = ({selectedPlayers, handleRemove}) => {
                            
                    console.log(selectedPlayers);
                    
                    return (
                                        <div className="min-h-[500px] mb-8">
                                             {selectedPlayers.map(selectedPlayer => <div className="flex mb-3 justify-between  items-center border rounded-xl py-4 px-5" key={selectedPlayer.id}>
                                             <div className="flex items-center gap-3">
                                                            <img className="w-[80px] rounded-xl" src={selectedPlayer.image} alt="" />
                                             <div>
                                                   <h3 className="text-2xl font-semibold">{selectedPlayer.playerName}</h3>
                                                   <p className="text-xl font-medium text-gray-500">{selectedPlayer.battingBowlingType}</p>                    
                                        </div>
                                        </div>
                                        <button onClick={() => handleRemove(selectedPlayer)}><i className="fa-solid text-2xl text-red-600 fa-trash"></i></button>
                                             </div>)}   
                                             <button className="text-2xl font-semibold py-2 px-3 border rounded-xl bg-[#E7FE29]">Add More Players</button>      
                                        </div>
                    );
};

export default Selected;


                  