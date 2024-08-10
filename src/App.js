import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './MyComponents/header'
import Main from './MyComponents/main'
import router from './routes/index'

function App() {
  return (
    <>
    
     <RouterProvider router={router}></RouterProvider>
     
    </>
   
  );
}

export default App;
