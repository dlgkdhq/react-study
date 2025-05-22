import './Practice03.css';
import TextItem from './TextItem';

function Practice03() {

    let titleArr = ['하나', '둘', '셋', '넷', '다섯'];
    let contentArr = ['내용하나', '내용둘', '내용셋', '내용넷', '내용다섯']

    return (
        <div className="App">

            {
                titleArr.map((item, index) => {
                    return <TextItem title={titleArr[index]} content={contentArr[index]} />;
                })
            }

            {/* <TextItem title={titleArr[0]} content={contentArr[0]}/>
            <TextItem title={titleArr[1]} content={contentArr[1]}/>
            <TextItem title={titleArr[2]} content={contentArr[2]}/>
            <TextItem title={titleArr[3]} content={contentArr[3]}/>
            <TextItem title={titleArr[4]} content={contentArr[4]}/> */}

            {/* 
            <div className='textItem'>
                <p className='title'>제목 : 하나</p>
                <p>내용 : 내용하나</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 둘</p>
                <p>내용 : 내용둘</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 셋</p>
                <p>내용 : 내용셋</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 넷</p>
                <p>내용 : 내용넷</p>
            </div>

            <div className='textItem'>
                <p className='title'>제목 : 다섯</p>
                <p>내용 : 내용다섯</p>
            </div> */}
        </div>
    );
}

export default Practice03;