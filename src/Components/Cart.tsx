import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PiHandbag } from "react-icons/pi";
import { IoMdStar } from "react-icons/io";
import { Product } from './Products.types';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Cart({ id , image , title , price }: Product) {
  const context = useContext(CartContext);
  const navigate = useNavigate();
  const addToBasketHandler = () => {
    context.addProduct(id);
    swal({
      title: 'The desired product has been successfully added to the cart.',
      icon: 'success',
      buttons: ['OK','Go to Basket']
    }).then(result => {
      if (result) {
        navigate('/basket');
      };
    });
  };
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} className='product-image' />
        <Card.Body>
            <Card.Title>{title.slice(0, 15)}...</Card.Title>
            <Card.Text>
              {price} $
              <span className="stars">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
              </span>
            </Card.Text>
            <Button variant="outline-primary" style={{width: '100%'}} onClick={addToBasketHandler}>
              Add to Basket
              <PiHandbag className='cart-add-to-basket-btn-icon' />
            </Button>
        </Card.Body>
    </Card>
  );
};

export default Cart;
