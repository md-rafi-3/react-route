import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({book}) => {
    
    // console.log(book)
    const {bookName,publisher,image,tags,category,rating,bookId

    }=book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100  shadow-sm p-3 border border-[#f3f3f3] md:w-[350px]">
     
     <figure className='bg-[#f3f3f3] p-7'>
       <img className='h-40'
         src={image} />
     </figure>

    
     <div className="card-body">
          
     <div className="card-actions justify-start">
        {
          tags.map(tag=> <div className="badge badge-outline bg-[#23be0a10] text-[#23be0a] font-bold">{tag}</div>)
        }
         
       </div>
    

       <h2 className="card-title">
         {bookName}
         <div className="badge badge-secondary">NEW</div>
       </h2>
       <p className='opacity-70'>By: {publisher}</p>
       <div className='border-t-2 border-dashed border-[#f3f3f3]'></div>
       <div className="card-actions justify-end">
   <div className='badge'>{category}</div>
   <div className="badge ">{rating} <FaStar  color='gold' size={15}/></div>
 </div>
     </div>
   </div>
        </Link>
    );
};

export default Book;