import React from 'react';
import bookimage from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className=' md:justify-around items-center py-10 bg-gray-300 md:flex md:flex-row flex-col-reverse justify-center'>
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