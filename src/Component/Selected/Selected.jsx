const Selected = ({selectedPlayers}) => {
                            
                    console.log(selectedPlayers);
                    
                    return (
                                        <div>
                                             {selectedPlayers.map(selectedPlayer => <div className="flex justify-between  items-center border rounded-xl py-4 px-5" key={selectedPlayer.id}>
                                             <div className="flex items-center gap-3">
                                                            <img className="w-[80px] rounded-xl" src={selectedPlayer.image} alt="" />
                                             <div>
                                                   <h3 className="text-2xl font-semibold">{selectedPlayer.playerName}</h3>
                                                   <p className="text-xl font-medium text-gray-500">{selectedPlayer.battingBowlingType}</p>                    
                                        </div>
                                        </div>
                                        <button>delete</button>
                                             </div>)}         
                                        </div>
                    );
};

export default Selected;


                  