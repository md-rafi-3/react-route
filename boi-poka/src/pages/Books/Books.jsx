import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allBooks,setAllBooks]=useState([])
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>setAllBooks(data))
    // })

    // const bookPromise=fetch('booksData.json').then(res=>res.json())
    
 
    return (
        <section className='mt-20'>
            <h1 className='text-4xl text-center font-bold'>Books</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-8 px-5 md:px-0'>
           
           <Suspense fallback={<span>Loading...</span>}>
           
            {
               data.map(book=><Book book={book} key={book.bookId}></Book>)
            }
           
           </Suspense>
       </div>
        </section>
    );
};

export default Books;