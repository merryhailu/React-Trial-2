import { useState } from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import WelcomeMessage from './components/welcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import MainComponent from './components/MainComponent';
import LoginContextProvider from './context/LoginContextProvider';
import UseRef from './components/UseRef';
import UseMemo from './components/useMemo';
import Fetch from './components/Fetch';

function App() {

  const router = createBrowserRouter(([
    {
      path: '/', element: <App />
    }
  ]))

  ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router= {router}/>
    </React.StrictMode>
  )

  return (
    <>
      {/* <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="meron" age="28" bio="frontend developer" />
      <Counter /> */}

      {/* <LoginContextProvider >
  
      <MainComponent />
  
      </LoginContextProvider> */}
    
     {/* <UseRef /> */}
     {/* <UseMemo /> */}
     
  <Fetch />
    </>
  );
}

export default App;
