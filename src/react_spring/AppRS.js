import axios from "axios";
import "./AppRS.css";
import { useState } from "react";
import DrinkItem from "./DrinkItem";

function AppRS(){

    let [drinkList, setDrinkList] = useState([{name:'자몽티', type:'차'}, {name:'유자차', type:'차'}])
    let [typeFlag, setTypeFlag] = useState(true);
    let [num, setNum] = useState(0);

    return (
        <div>
            <h1>AppRS 페이지</h1>

            <div>
                <button onClick={()=>{
                    // 서버와 API 통신용 라이브러리
                    // ajax fetch axios XMLHttpRequest

                    //localhost:3000 -> React
                    //localhost:8080 -> Spring

                    //axios.get('http://localhost:8080/api/getMsg')
                    //CORS Policy 처리 오류

                    //React FE 서버를 Proxy 서버로 처리
                    //api 요청 시, React 서버인 3000 포트 대상으로 요청하듯이 경로 작성
                    //Client -> React(3000) -> Spring(8080) -> React(3000) -> Client
                    
                    // axios.get('http://localhost:3000/api/getMsg')
                    axios.get('/api/getMsg')
                        .then(response => console.log(response.data))     //결과 수신 수행 (처리할 부분)
                        .catch
                            (error => {
                                console.log(error)
                                }
                            )    //예외발생 시 수행 처리하는 부분

                }}>서버 데이터 요청 get(axios)</button>
            </div>

            <div>
                <button onClick={()=>{
                    axios.get("/api/getDrinks")
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);

                            /*
                            let temp = [...drinkList];
                            response.data.map((item)=>{
                                temp.push(item);
                            })
                            setDrinkList(temp);
                            */
                        })
                        .catch(error => console.log(error))
                }}>서버 데이터 요청 여러개 Json</button>
            </div>

            <div>
                <button onClick={()=>{
                    let paramType = ''; //커피 차
                    if(typeFlag) {
                        paramType = '커피';
                    } else {
                        paramType = '차';
                    }
                        setTypeFlag(!typeFlag); //true -> false -> true
                    //파라미터에 담아서 보내는 경우
                    //  /api/getDrinkDiv?type=커피
                    //  /api/getDrinkDiv?type=차
                    axios.get('/api/getDrinkDiv?type=' + paramType)
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })
                        .catch(error => console.log(error))
                }}>데이터 요청 URL에 파라미터</button>
            </div>

            <div>
                <button onClick={()=>{

                    // axios.post(URL, bodyData, header)

                    setNum(num + 1);

                    axios.post(
                            '/api/getDrinksNum', 
                            // { num: num }     JSON 포맷으로 보내기
                            String(num),     //단순 텍스트로 보내기
                            {
                                headers: {
                                    'Content-Type' : 'application/json'
                                    //                  text/plain
                                }
                            }
                        )
                        .then(response => {
                            console.log(response.data);
                            let temp = [...drinkList, ...response.data];
                            setDrinkList(temp);
                        })
                        .catch(error => console.log(error))
                }}>데이터 요청 POST bodydata</button>
            </div>

            <div>
                {
                    drinkList.map((item, index)=>{
                        return <DrinkItem drinkItem={item} />;
                    })
                }
            </div>
        </div>
    )

    /*
        axios 라이브러리
        설치
        npm install axios
    */
}

export default AppRS;