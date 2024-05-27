import logo from './logo.svg';
import './App.css';
import LoginPage from './component/LoginPage';
import Header from './component/Header';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <LoginPage/>
      <Header/>
    </CartProvider>
  );
}

export default App;
