import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = "| HELLO "

const secondElement = React.createElement(
  'a',
  { href: 'https://wikipedia.org', target: '_blank' },
   anotherElement
);

createRoot(document.getElementById('root')).render(
  // StrictMode optional hai, laga bhi sakta hai

    secondElement
  
);
