import logo from '..//..//assets/logo.png'
import Subscribe from '..//..//assets/Frame 11.png'
const Footer = () => {
                    return (
                                        <div className='bg-neutral'>
                                                           <div className='max-w-52 pt-5 mx-auto'>
                                                           <img className='w-full'  src={logo} alt="" />
                                                           </div>
                                          <footer  className="footer  text-neutral-content p-2 md:p-6 lg:p-10">
                    <section className="container mx-auto">
                                        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row gap-5 justify-between ">
                                                            <div>
                                                             <div className=" mb-3">
                                                                                
                                                                                 <h1 className="text-3xl font-semibold">About Us</h1>
                                                             <p>We are a passionate <br /> team dedicated to providing the best <br /> services to our customers.</p>
                                                             </div>
                                                             
                                                            
                                                            </div>
                     
                                                            <div>
                                                             <h4 className="text-xl font-medium mb-3">Useful Links</h4>
                                                             <ul>
                                                                                <a href="Home.html"><li>Home</li></a>
                                                                                 <a href="About.html"><li>About Us</li></a>
                                                                                <a href="Service.html"><li>Service</li></a>
                                                                                <a href="Contact.html"> <li>Contact</li></a>
                                                             </ul>
                                                            </div>

                                                            <div className="flex flex-col ">
                                                             <h1 className="text-xl font-medium mb-3">Subscribe</h1>
                                                             <p>Subscribe to our newsletter <br /> for the latest updates.</p>
                                                             <div className="flex">
                                                             <input type="text" placeholder="Type your email" className="input input-bordered w-full max-w-xs mb-3" />
                                                             <img className='h-[50px]' src={Subscribe} alt="" />
                                                             </div>
                                                            </div>
                                         </div>
                     
                    </section>
                </footer>                    
                                        </div>
                    );
};

export default Footer;