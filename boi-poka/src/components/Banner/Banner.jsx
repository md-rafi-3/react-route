import React from 'react';
import bookimage from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className=' bg-gray-300 flex md:justify-around md:flex-row flex-col-reverse items-center py-10'>
        <div className='text-center md:text-left'>
          <h3 className='text-5xl font-bold'>Books to freshen up <br /> your bookshelf</h3>
          <button className='btn bg-green-500 text-white mt-5'>View The List</button>
        </div>
        <div>
    <img className='' src={bookimage}  alt="" />
        </div>
    </div>
    );
};

export default Banner;