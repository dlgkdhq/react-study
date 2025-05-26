import { Nav, Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap';
import FoodCard from '../components/FoodCard';

function Home( {foods} ) {
    return (
        <div>
            <div className='main-bg'></div>

            <Container>
                <Row>
                    {
                        foods.map((food, index) => {
                            return (
                                <Col md={4} sm={6}>
                                    <FoodCard foods={foods} index={index} food={food} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Home;