import { useEffect, useState } from "react";
import Available from "./Available";
import PropTypes from 'prop-types'

const Availables = ({handleChoosePlayer}) => {

                    const [Players, setPlayers] = useState([])

                    useEffect(() => {
                                        fetch('fakeItems.json')
                                        .then(res => res.json())
                                        .then(data => setPlayers(data))
                    },[])
                   
                    
                    return (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-40">
                                        {Players.map((player, idx) => <Available key={idx} player={player} handleChoosePlayer={handleChoosePlayer}></Available>)}                    
                                        </div>
                    );
};
Availables.propTypes = {
               
                    handleChoosePlayer: PropTypes.func.isRequired
               }
export default Availables;