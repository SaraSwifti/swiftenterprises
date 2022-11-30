import React from 'react';

import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "./index.css";


const root = createRoot(document.getElementById('root'));

//had react.strict wrapped around App. Removed and resovled one error in console


///jeff had me change the render to hydrate see website https://www.digitalocean.com/community/tutorials/react-server-side-rendering
root.render(
  

   <BrowserRouter>
   <App />
   </BrowserRouter>
  
 
 
);
// reportWebVitals();