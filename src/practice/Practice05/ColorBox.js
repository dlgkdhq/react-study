
function ColorBox(props) {
    return (
        <div className='box' style={{ backgroundColor: props.bgColor }}>
            <button onClick={()=>{
                //삭제

                //boxes, setBoxes, index
                // props.index => 몇번째 인덱스인지 알고 시작...
                let temp = [...props.boxes];
                temp.splice(props.index, 1)
                props.setBoxes(temp);
            }}>X</button>
        </div>

    )
}

export default ColorBox;