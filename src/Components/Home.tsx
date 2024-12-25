import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Cart from './Cart';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

function Home() {
  const context = useContext(CartContext);
  return (
    <>
      <Container>
        <Row>
          {
            context.shop.map(product => (
              <Cart key={product.id} {...product} />
            ))
          }
        </Row>
      </Container>
    </>
  );
};

export default Home;
