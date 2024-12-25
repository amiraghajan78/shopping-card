import Navbar from 'react-bootstrap/Navbar';
import { BsBasket3 } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

function Header() {
  const cart = useContext(CartContext);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to='/' className='home-link'>Store</NavLink>
          <NavLink to='/basket'>
            <Button variant="dark" className='basket-btn' id='basket-button'>
                <i className='basket-icon'>
                <BsBasket3 />
                </i>
                <span className='basket-items-counter'>
                  {cart.UserCart.length}
                </span>
            </Button>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
