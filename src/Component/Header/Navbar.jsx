import logo from '..//..//assets/logo.png'
const Navbar = ({freeDolor}) => {
                    return (
                                        <div className='flex justify-between items-center w-11/12 mx-auto sticky pt-4 pb-3 '>
                                            <div>
                                                   <img className='w-20' src={logo} alt="" />                    
                                        </div>  
                                        <div className='flex items-center gap-6'>
                                            <ul className='gap-4 flex'>
                                                <li>Home</li>
                                                <li>Fixture</li>
                                                <li>Teams</li>
                                                <li>Schedules</li>
                                            </ul>
                                            <button className='btn'>{freeDolor} Dolor  <i className="fa-solid fa-dollar-sign"></i>  </button>
                                            </div>              
                                        </div>
                    );
};


export default Navbar;