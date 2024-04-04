import React from 'react';
import './App.css';
import Form from './components/form/Form';
import Cart from './components/cart/Cart';
import Newcart from './components/Newcart/Newcart';
import Carta from './components/Carta/cart2';

import img1 from './assets/img1.jpeg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'

const data = [
  {
    image: img1,
    title: 'одежда и другое',
    price: '43 050'
  },
  {
    image: img2,
    title: 'одежда и другое',
    price: '43 050'
  },
  {
    image: img3,
    title: 'одежда и другое',
    price: '43 050'
  },
  {
    image: img4,
    title: 'одежда и другое',
    price: '43 050'
  }
]

function App() {
  return (
    <div className="App">
      <Form />
      <Cart />
      <Newcart />
      {
        data.map(item => (
          <Carta
          image={item.image} 
          title={item.title}
          price={item.price}
          />
        ))
      }

    </div>
  );
}

export default App;
