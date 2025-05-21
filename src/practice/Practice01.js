import {useState} from 'react';


function Practice01() {

    let [even, setEven] = useState(0);

    return (
        <div>
            <button onClick={() => {
                setEven(even + 2);
                console.log(even)
            }}>짝수출력</button>
            <span style={{color : 'red'}}> {even}</span>
        </div>
    )
}

export default Practice01;