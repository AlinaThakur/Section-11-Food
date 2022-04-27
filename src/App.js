import {useState } from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
//import HeaderCardButton from "./Layout/HeaderCardButton";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }


  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
       <Meals/>
     </main>
    </CartProvider>
  );
}

export default App;


//149 