import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilities/addToDB';

const ReadList = () => {
    // ?worst case
    const data=useLoaderData();
    const [readList,setReadList]=useState([])

    useEffect(()=>{
        
        const stordBookData=getStoreBook()
        const convertedStoredBook=stordBookData.map(id=>parseInt(id));
        const myReadList=data.filter(book=>convertedStoredBook.includes(book.bookId))
       setReadList(myReadList)
    },[])

    console.log(readList)
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;