import bannerImg from '..//..//assets/banner-main.png'
import PropTypes from 'prop-types'
const Banner = ({handleFreeDolor}) => {
                    return (
                                        <div>
                                           <div
  className="hero mt-10 mx-auto   bg-opacity-60 banner">
  <div className="hero-overlay rounded-xl"></div>
  <div className="flex flex-col items-center my-10 text-neutral-content text-center">
                    <img className='mb-4' src={bannerImg} alt="" />
    
      <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5 text-xl font-medium">
        PrBeyond Boundaries Beyond Limits
      </p>
      <button onClick={handleFreeDolor} className="btn bg-[#E7FE29] text-xl font-medium">Claim Free Credit</button>
    
  </div>
</div>                
                                        </div>
                    );
};

Banner.propTypes = {
                    handleFreeDolor: PropTypes.func.isRequired
}
export default Banner;