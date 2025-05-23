import { useState } from 'react';
import './Practice04.css';

function Practice04(){

    let [box, setBox] = useState([<div className="box">박스</div>]);

    let [arr, setArr] = useState([1,1]);

    return(
        <div>
            <div style={{margin:'10px'}}>
                <button onClick={()=>{
                    // let temp = [...box];
                    // temp.push(<div className="box">박스</div>)
                    // setBox(temp);

                    // arr 배열에다가 아무 값이나 추가 -> arr 길이만큼 반복하면서 box를 그림
                    let temp = [...arr, 0];
                    setArr(temp);
                    
                }}>추가</button>
            </div>
            {box}

            {
                //for 문 사용 못해서 map을 사용함
                arr.map(()=>{
                    return <div className="box">박스</div>;
                })
            }
        </div>
    )
}

export default Practice04;