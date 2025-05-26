import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function FoodCard(props) {

    let navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + props.food.imgPath} />
            <Card.Body>
                <Card.Title>{props.food.title}</Card.Title>
                <Card.Text>
                    {props.food.content}
                </Card.Text>
                <Card.Text>
                    {props.food.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                    navigate("/detail/" +  props.food.id);
                }}>상세보기</Button>
            </Card.Body>
        </Card>

        // <Card style={{ width: '18rem' }}>
        //     {/* <Card.Img variant="top" src={food1} /> */}
        //     <Card.Img variant="top" src='/images/food1.jpg' />
        //     <Card.Body>
        //         <Card.Title>{props.foods[props.index].title}</Card.Title>
        //         <Card.Text>
        //             {props.foods[props.index].content}
        //         </Card.Text>
        //         <Card.Text>
        //             {props.foods[props.index].price}
        //         </Card.Text>
        //         <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        // </Card>

    )
}

export default FoodCard;