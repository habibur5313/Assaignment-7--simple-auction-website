import logo from '..//..//assets/logo.png'
import PropTypes from 'prop-types'

const Navbar = ({freeDolor}) => {
                    return (
                                        <div className='flex justify-between items-center w-11/12 mx-auto sticky pt-4 pb-3 '>
                                            <div>
                                                   <img className='w-20' src={logo} alt="" />                    
                                        </div>  
                                        <div className='flex items-center gap-6 text-gray-500  font-medium'>
                                            <ul className='gap-4 flex '>
                                                <a href="home.html"><li className='hover:text-[#E7FE29]'>Home</li></a>
                                                <a href="fixture.html"><li className='hover:text-[#E7FE29]'>Fixture</li></a>
                                               <a href="teams.html"> <li className='hover:text-[#E7FE29]'>Teams</li></a>
                                                <a href="schedules.html"><li className='hover:text-[#E7FE29]'>Schedules</li></a>
                                            </ul>
                                            <button className='btn'>{freeDolor} Dolor  <i className="fa-solid fa-dollar-sign"></i>  </button>
                                            </div>              
                                        </div>
                    );
};

Navbar.propTypes = {
    freeDolor: PropTypes.number.isRequired
}

export default Navbar;