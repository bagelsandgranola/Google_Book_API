import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Books = [
    { "name": "Henry I", 
    "author": "C. Warren Hollister",
    "price": "$50.00",
    "image": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "The resulting volume is one that will be welcomed by students and general readers alike",
    },

    { "name": "Henry VIII", 
    "author": "Alison Weir",
    "price": "$15.50",
    "image": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    "description": "This is a triumph of historical writing which will appeal equally to the general reader and serious historian",
    }
]


ReactDOM.render(<App bookData={Books}/>, document.getElementById('root'));


