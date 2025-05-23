import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog(){

    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
                //                 ['Today News', '어제의 뉴스', '내일의 뉴스']

    let [likeCount1, setLikeCount1] = useState(0);
    let [likeCount2, setLikeCount2] = useState(0);
    let [likeCount3, setLikeCount3] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState( [0, 0, 0] );

    let [showModal, setShowModal] = useState(false);
    //    0  1 

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={ {color:"orange", fontSize:'20px'} }>{title}</p>
            </div>

            {
                news.map((item, index)=>{   // 0 1 2 
                    //return <div className='post-list'>
                    return (
                        <div className='post-list'>
                            <h4 onClick={()=>{
                                setShowModal(!showModal);
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountArr[index]);
                            }}>{item} <span onClick={(event)=>{
                                
                                event.stopPropagation();
                                
                                let temp = [...likeCountArr];
                                temp[index] += 1;
                                setLikeCountArr(temp);

                            }}>❤</span>{likeCountArr[index]}</h4>
                            <p>내용 무</p>
                        </div>
                    )

                })
            }

            {
                //showModal == true ? <Modal/> : null
                //props 전달 
                // 변수, 배열, 객체, 함수, 요소(컴포넌트)
                showModal && <Modal title={selectedTitle} likeCount={selectedLikeCount} 
                                    news={news} setNews={setNews}
                                    bgColor='lightblue'/>
            }
            
        </div>
    );
}

export default NewsBlog;