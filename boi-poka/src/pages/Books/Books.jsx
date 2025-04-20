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
        <div>
            <h1>Hello books</h1>
            <Suspense fallback={<span>Loading...</span>}>
            
             {
                data.map(book=><Book book={book}></Book>)
             }
            
            </Suspense>
        </div>
    );
};

export default Books;