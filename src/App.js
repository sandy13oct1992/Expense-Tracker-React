// import logo from './logo.svg';
// import './App.css';
// import AuthForm from './component/AuthForm';
// import Header from './component/Header';
// import CartProvider from './store/CartProvider';

// function App() {
//   return (
    
//     <div>
//       <AuthForm/>
//       <Header/>
//       </div>
//   );
// }

// export default App;

import './App.css';
import AuthForm from './component/AuthForm';
import Header from './component/Header';
import Routes from './component/Routes'; // Import your Routes component

function App() {
  return (
    <div>
      <Header />
      <AuthForm />
      <Routes />
    </div>
  );
}

export default App;
