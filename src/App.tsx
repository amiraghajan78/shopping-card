import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Header';
import CartContextProvider from '../context/cartContext';

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <CartContextProvider>
        <Header />
        {router}
      </CartContextProvider>
    </>
  );
};

export default App;
