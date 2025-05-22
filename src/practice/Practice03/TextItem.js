import './TextItem.css';

//function TextItem(props) {  //props     { key, key }
function TextItem( {title, content} ) {  //props     { key, key }

    return (
        <div className='textItem'>
            <p className='title'>제목 : {title}</p>
            <p>내용 : {content}</p>
        </div>
    )
}

export default TextItem;