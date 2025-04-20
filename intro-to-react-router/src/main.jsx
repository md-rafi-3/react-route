import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Mobils from './components/mobiles/Mobils.jsx';
import Laptops from './components/laptops/Laptops.jsx';
import Users from './users/Users.jsx';
import Users2 from './users/Users2.jsx';
import UserDetails from './userDetails/UserDetails.jsx';
import Posts from './Posts/posts.jsx';
import PostDetail from './components/postDetail/PostDetail.jsx';

const usersPromise=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

const router = createBrowserRouter([
  {
    path:'/',
     Component: Root,
     children:[
      {index:true,Component:Home},
      {path:'mobiles',Component:Mobils},
      {path:'laptops', Component:Laptops},{path:'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'), Component: Users},
      {path:'users2',
        element:<Suspense fallback={<span>Loading....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      } 
       ,{
        path:'users/:userId',
        loader:({params})=>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails
      },
      {
        path:'posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path:'posts/:postId',
    loader:({params})=>
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail
      },
      {
        path:'*',
        element:<h3>Not Found 404</h3>
      }
    ]

  },
  {
    path:'about',
    element: <div>About me here</div> 
  },
  {
    path:'blog',
    element: <div>All my blog</div>
  },
  {
    path:'app',
    Component:App
  },
  {
    path: 'app2',
    element: <App></App>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
