import { useState } from "react";

function Practice02() {

    //useState -> state 변수 : 재렌더링발생, 데이터값 유지
    let textArr = ["하나", "둘", "셋"];
    const [index, setIndex] = useState(0);

    return (
        <div className="App">
            <p>{textArr[index]}</p>
            <button onClick={() => {
                // index++;
                // setIndex = ((index+1) % textArr.length);

                let temp = index;
                temp++; //0 1 2
                if(temp == textArr.length){
                    temp = 0;
                }
                setIndex(temp); //index = temp; 
            }}>변경버튼</button>
        </div>
    )


    /* //v1
    let [text, setText] = useState('하나');


    return (
        <div className="App">
            <p>{text}</p>
            <button onClick={() => {
                //setText(매개변수) => text에 매개변수 저장
                if(text == '하나'){
                    setText('둘'); 
                } else if(text == '둘'){
                    setText('셋');
                } else {
                    setText('하나');
                }
            }}>변경버튼</button>
        </div>
    )
    */

    /* //v2
    let [num, setNum] = useState(1); //num 1: 하나 .....

    if(num == 1){
        return(
            <div className="App">
            <p>하나</p>
            <button onClick={() => {
                setNum(2);
            }}>변경버튼</button>
            </div>
        )
    } else if(num == 2){
        return(
            <div className="App">
            <p>둘</p>
            <button onClick={() => {
                setNum(3);
            }}>변경버튼</button>
            </div>
        )
    } else {
        return(
            <div className="App">
            <p>셋</p>
            <button onClick={() => {
                setNum(1);
            }}>변경버튼</button>
            </div>
        )
    }
    */
}

export default Practice02;