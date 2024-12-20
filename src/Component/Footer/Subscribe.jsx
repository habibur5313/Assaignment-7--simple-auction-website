

const Subscribe = () => {
                    return (
                                        
                                        <div className="border p-3 newsletter hidden md:block">
                                                            <div className=" lg:p-10 lg:w-[1000px]  rounded-xl bg-gradient-to-tr from-blue-200 to-yellow-50 lg:space-y-3">
                                        <h2 className="lg:text-3xl text-xl font-medium lg:font-semibold">Subscribe to our Newsletter</h2>
                                        <p className="lg:text-xl lg:font-medium">Get the latest news, updates, and special offers in your inbox!</p>
                                        <div className="lg:w-1/2 px-4 mx-auto flex flex-col md:flex-row gap-3">
                                        <input type="email" placeholder="Enter your email" className="w-full py-2 rounded-xl" />
                                        <button className="px-3 py-2 text-xl font-semibold border rounded-xl bg-gradient-to-br from-red-400 to-yellow-300 ">Subscribe</button>
                                        </div>
                                        </div>
                                        </div>


                    );
};

export default Subscribe;