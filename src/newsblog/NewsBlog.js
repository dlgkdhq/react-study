import { useState } from 'react';
import './NewsBlog.css';
import Modal from './Modal';

function NewsBlog(){
    
    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스'])

    const [index, setIndex] = useState(0);

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    
    let [indexArr, setIndexArr] = useState([0,0,0]);

    let [showModal, setShowModal] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');

    return(<div>
        <div className='black-nav'>
            <h4>Blog Header</h4>
            <p style={{color:'orange', fontSize:'20px'}}>{title}</p>
        </div>

        <div className='post-list'>
            {/* <h4>{news1}</h4> */}
            <h4 onClick={()=>{
                if(showModal){
                    setShowModal(false);
                } else {
                    setShowModal(true);
                }
                setSelectedTitle(news[0])

            }}>{news[0]} <span onClick={()=>{
                // setIndex1(index1+1);

                let temp = [...indexArr];
                temp[0] += 1;
                setIndexArr(temp);

            }}>❤</span>{indexArr[0]}</h4>  
            <p>내용 무</p>
            
            {/* <button onClick={()=>{
                // setNews1('Today News');
                // news[0]= 'Today News';
                let temp = [...news];
                temp[0] = 'Today News';
                setNews(temp);
            }}>제목 변경</button> */}
        </div>

        <div className='post-list'>
            {/* <h4>{news2}</h4> */}
            <h4 onClick={()=>{
                setShowModal(!showModal);
                setSelectedTitle(news[1])

            }}>{news[1]} <span onClick={()=>{
                // setIndex2(index2+1);

                let temp = [...indexArr];
                temp[1] += 1;
                setIndexArr(temp);

            }}>❤</span>{indexArr[1]}</h4>
            <p>내용 무</p>
        </div>

        <div className='post-list'>
            {/* <h4>{news3}</h4> */}
            <h4 onClick={()=>{
                setShowModal(!showModal);
                setSelectedTitle(news[2])

            }}>{news[2]} <span onClick={(event)=>{
                event.stopPropagation();    //전파를 막겠다.. 
                // 속해있는 부모요소의 이벤트처리까지 전파되는걸 막겠다.. 내꺼만 함.
                // setIndex3(index3+1);

                let temp = [...indexArr];
                temp[2] += 1;
                setIndexArr(temp);

            }}>❤</span>{indexArr[2]}</h4>
            <p>내용 무</p>
        </div>

        {
            //showModal == true? <Modal/> : null
            showModal && <Modal title={selectedTitle}/>
        }
    </div>
    )
    
}

export default NewsBlog;