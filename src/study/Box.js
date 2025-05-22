function Box( {title, content} ){    //props 객체타입의 매개변수

    //props = {title:'저녁', content:'삼겹살'}
    //{title, content} = {title:'저녁', content:'삼겹살'}


    return(

        <div style={{backgroundColor:'gray', border:'1px solid black'}}>
            {/* <h1>title</h1> */}
            {/* <p>content</p> */}

            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

/*
function Box(props){    //props 객체타입의 매개변수

    //props = {title:'저녁', content:'삼겹살'}

    return(

        <div style={{backgroundColor:'gray', border:'1px solid black'}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}
*/

export default Box;