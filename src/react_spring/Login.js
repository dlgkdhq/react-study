import { useState } from "react";
import axios from "axios";

function Login() {

    let [id, setId] = useState('');
    let [pw, setPw] = useState('');

    return (
        <div>
            <h1>React Spring Login</h1>
            <p>id : <input type="text" onChange={(e) => { setId(e.target.value) }}></input></p>
            <p>pw : <input type="password" onChange={(e) => { setPw(e.target.value) }}></input></p>

            <button onClick={() => {
                //로그인 시도 -> 달버에 id, pw 전달
                // axios.post(url, dataBody. header)
                axios.post(
                    '/api/login',
                    {               //post http 요청 시 보낼 body data
                        id: id,     //key : value
                        pw: pw      //id라는 key값 : id 변수에 들어있는 값
                    },
                    {
                        headers : {
                            'Content-Type': 'application/json'
                        }
                    }
                ).then(
                    response => {
                        // {header : "", body : ""}
                        // response.data.header.resultCode
                        console.log(response.data);
                        if(response.data == 'ok'){
                            //로그인 성공
                            //성공 보여주기
                            //성공 이후 다음 페이지로 이동
                            //ReactRouter -> navigate("/")      navigate("/mypage")
                        } else {
                            //로그인 실패
                            //화면에 실패에 관련된 메시지 표시
                        }

                    }
                )
                .catch(error => console.log(error))
            }}>로그인</button>

            <button onClick={()=>{
                axios.post('/api/loginCheck')
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
            }}>로그인 여부 체크</button>
        </div>
    )
}

export default Login;