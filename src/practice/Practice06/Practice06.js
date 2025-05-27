import { Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router';
import Cart from './Cart';

function Practice06() {

    return (
        <div>

                <button><Link to="/">Main</Link></button>
                <button><Link to="/info">/info</Link></button>
                <button><Link to="/my.page">/my.page</Link></button>
                <button><Link to="/cart">/cart</Link></button>

            <Routes>
                <Route path="/" element={<h1>Main~</h1>}></Route>
                <Route path="/info" element={<h1>info 공간!!</h1>}></Route>
                <Route path="/my.page" element={<h1>나의 페이지</h1>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>

                <Route path="*" element={<div><h1>잘못된 경로입니다. 주소를 확인하세요.</h1></div>}></Route>
            </Routes>

        </div>
    )
}

export default Practice06;
