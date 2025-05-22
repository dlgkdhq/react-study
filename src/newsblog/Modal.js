function Modal(props){
    
    return(
        <div className="modal"> 
            <h3>{props.title}</h3>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default Modal;