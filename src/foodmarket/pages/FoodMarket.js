import './FoodMarket.css';
// import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Navbar, Container, Card, Button, Row, Col } from 'react-bootstrap';

import banner_bg from '../images/banner_bg.jpg';
// import food1 from '../images/food1.jpg';
// import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';

import foodsData from '../data/foodsData';
import { useState } from 'react';
import FoodCard from '../components/FoodCard';

import { Routes, Route, Link, useNavigate } from 'react-router';
import Home from './Home';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);

    let navigate = useNavigate();

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/detail">FoodDetail</Link></Nav.Link>
                        <Nav.Link><Link to="/info">Info</Link></Nav.Link> */}
                        <Nav.Link onClick={() => { navigate("/") }}> Home </Nav.Link>
                        <Nav.Link onClick={() => { navigate("/detail") }}> FoodDetail </Nav.Link>
                        <Nav.Link onClick={() => { navigate("/info") }}> Info </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 
                페이지 이동 처리
                1) Link (=a 태그)   -> 링크 표시도 같이 됨,, 안이쁨.
                    내부 요소를 눌렀을 때 페이지 이동
                    <Link to="이동할 경로"></Link>

                2) useNavigate (= location.href 비슷)
                    함수형태로 호출해서 이동 처리

                    경로 처리 객체를 생성
                    let navigate = useNavigate();

                    이동할 경로를 매개변수로 전달하면서 함수 사용
                    navigate("이동할 경로");

            */}

            {/* react-router : 접속한 경로별로 보여줄 화면을 설정하는데 도움을 주는 라이브러리
                                + 기타 URL 주소에 관한 각종 처리 
                                path : 경로, element : 보여줄 요소 
                */}
            <Routes>
                <Route path="/" element={<Home foods={foods} />}></Route>
                <Route path="/home" element={<Home foods={foods} />}></Route>
                <Route path="/detail" element={<h1>/detail</h1>}></Route>

                {/* <Route path="/info/company" element={<h1>/info company</h1>}></Route>
                <Route path="/info/contact" element={<h1>/info contact</h1>}></Route> */}

                {/* 
                    서브경로 
                        Info 아래에 두 경로가 있다
                        /info/company
                        /info/contact
                */}
                <Route path="/info">
                    <Route path="company" element={<h1>/info company</h1>}></Route>
                    <Route path="contact" element={<h1>/info contact</h1>}></Route>
                </Route>

                {/* *표시 : all  //  위의 경로 말고 다른 경로로 들어갔을 때 보여줄 화면 */}
                <Route path="*" element={<div><h1>잘못된 경로입니다. 주소를 확인하세요.</h1></div>}></Route>

            </Routes>

        </div >
    )
}

export default FoodMarket;