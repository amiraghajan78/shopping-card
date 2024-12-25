import Card from 'react-bootstrap/Card';
import { IoMdStar } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

function Basket() {
  const context = useContext(CartContext);
  return (
    <>
      <section className='empty-btn-container f-c'>
        <Button variant="danger" onClick={context.removeAll}>
          Empty Basket
          <FaTrash style={{marginLeft: '15px'}} />
        </Button>
      </section>
      <Container>
        <Row>
          {
            context.UserCart.length !== 0 ? (
              <Row>
                {
                  context.UserCart.map(product => (
                    <Card style={{ width: '18rem' }} key={product.id}>
                      <Card.Img variant="top" src={product.image} className='product-image' />
                      <Card.Body>
                        <Card.Title>{product.title.slice(0, 15)}...</Card.Title>
                        <Card.Text>
                          {product.count * product.price} $
                          <span className="stars">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                          </span>
                        </Card.Text>
                        <Card.Text className='item-count'>
                          Count: {product.count}
                        </Card.Text>
                        <Button variant="outline-danger"
                          style={{width: '100%'}}
                          onClick={() => context.removeProduct(product.id)}>
                          Remove Product
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                }
              </Row>
            ) : (
              <section className="basket-status-container f-c">
                <img src="./img/basket-icon.svg" alt="" className="basket-logo" />
                <h1>Your Basket is Empty ☹</h1>
              </section>
            )
          }
        </Row>
      </Container>
    </>
  )
}

export default Basket
