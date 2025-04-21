import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const bookDetails = data.find((book) => book.bookId === bookId);
  const {
    image,
    author,
    bookName,
    category,
    publisher,
    review,
    totalPages,
    yearOfPublishing,
    rating,
    tags,
  } = bookDetails;
  console.log(bookDetails);

const handleMarkAsRead=(id)=>{
    addToStoreDB(id)

}


  return (
    <div className="flex gap-5 md:flex-row flex-col justify-center px-3 md:px-0">
      <div className="md:w-[50%] bg-[#f3f3f3] p-10 flex items-center justify-center  md:h-[650px]">
        <img className="md:w-[400px] md:h-[550px]" src={image} alt="" />
      </div>
      <div className="md:w-[50%]">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="text-xl font-medium opacity-70">By: {author}</p>
        <hr className="opacity-15 my-2" />
        <h3 className="text-xl font-medium opacity-70">{category}</h3>
        <hr className="opacity-15 my-2" />
        <p className="font-bold">
          Review: <span className="font-normal opacity-70">{review}</span>
        </p>

        <div className="mt-3">
          <div className="badge font-bold">Tag</div>
          {tags.map((tag) => (
            <div className="badge badge-outline bg-[#23be0a10] text-[#23be0a] font-bold ml-3">#{tag}</div>
          ))}
        </div>

         <hr className="opacity-15 my-6" />

        <div className="flex items-center gap-5" >
          
          <div className="opacity-70">
            <p>Number of Pages:</p>
          <p>Publisher:</p>
          <p>Year of Publishing:</p>
          <p>Rating:</p>
        </div>
       
        <div className="font-bold">
          <p>{totalPages}</p>
          <p>{publisher}</p>
          <p>{yearOfPublishing}</p>
          <p>{rating}</p>
        </div>

       
      </div>

      <div className="mt-8 flex gap-5">
            <button onClick={()=> handleMarkAsRead(id)} className="btn bg-[#23be0a10] ">Mark As Read</button>
            <button className="btn bg-[#50b1c9] text-white">Wishlist</button>
        </div>

       

       

    </div>
    </div>
  );
};

export default BookDetails;
