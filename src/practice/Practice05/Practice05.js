import '../Practice04/Practice04.css';
import { useState } from 'react';
import ColorBox from './ColorBox';

function Practice05() {

    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black']);
    //                          index : 0       1       2       3

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = ['red', ...boxes];
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = ['blue', ...boxes];
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = ['green', ...boxes];
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...boxes, 'red'];
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes, 'blue'];
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes, 'green'];
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>

            {
                boxes.map((item, index) => {
                    // return <div className='box' style={{ backgroundColor: item }}>
                    //     <button onClick={()=>{
                    //         let temp = [...boxes];
                    //         temp.splice(index, 1);
                    //         setBoxes(temp);
                    //     }}>X</button>
                    // </div>

                    return <ColorBox bgColor={item} index={index} boxes={boxes} setBoxes={setBoxes} />
                })

                //splice(위치, 삭제할 갯수)
                //splice(2,1)
                // let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black']);
            }
        </div>
    )
}

/*
function Practice05() {


    let [boxes, setBoxes] = useState([
        <div className='box' style={{ backgroundColor: 'red' }}></div>,
        <div className='box' style={{ backgroundColor: 'blue' }}></div>,
        <div className='box' style={{ backgroundColor: 'green' }}></div>,
        <div className='box' style={{ backgroundColor: 'black' }}></div>
    ])

    return (

        <div>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<div className='box' style={{ backgroundColor: 'red' }}></div>)
                setBoxes(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<div className='box' style={{ backgroundColor: 'blue' }}></div>)
                setBoxes(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<div className='box' style={{ backgroundColor: 'green' }}></div>)
                setBoxes(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push(<div className='box' style={{ backgroundColor: 'red' }}></div>)
                setBoxes(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.push(<div className='box' style={{ backgroundColor: 'blue' }}></div>)
                setBoxes(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.push(<div className='box' style={{ backgroundColor: 'green' }}></div>)
                setBoxes(temp);
            }}>뒤초록박스추가</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.shift();
                setBoxes(temp);
            }}>앞 박스 삭제</button>
            <button onClick={() => {
                let temp = [...boxes];
                temp.pop();
                setBoxes(temp);
            }}>뒤 박스 삭제</button>
            <br></br>
            {boxes}
        </div>
    )
}
*/
export default Practice05;