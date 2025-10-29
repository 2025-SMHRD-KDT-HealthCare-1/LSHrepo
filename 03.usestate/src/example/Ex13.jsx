import React from 'react'
import '../App.css';
import { useEffect } from 'react';
import axios from 'axios';

const Ex13 = () => {
    /* 
        공공날씨 데이터를 가져와서 도시별로 날씨 정보를 화면에 띄워보자!
         - openweathermap.org에서 날씨 정보 받아오기
         - 첫 화면에는 광주의 날씨를 띄운다!
         - 3개의 버튼에 도시를 지정해서 각 버튼을 클릭하면 각 도시의 날씨를 띄운다!

         - handleCity : 도시를 변경해주는 함수(버튼 onClick)
         - state 변수 : temp, weather, city

        1. 각각의 도시 버튼을 클릭했을 경우, 각 도시의 날씨 정보를 다시 불러와서
        화면에 temp(온도), weather(날씨)를 띄워준다!
        2. temp는 main.temp로 접근, - 273도를 해준다!
        3. weather는 weather[0].main으로 접근해서 그대로 출력!
     */

    useEffect(() => {
        const url = "https://api.openweathermap.org/data/2.5/weather";
        const city = 'Gwangju';
        const key = "4f6f7ef448a9a961fd9babf307cc3fe5";

        axios.get(url, {
            params : {
                q: city,
                appid: key
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        })
    }, []);
    
        
    return (
        <div className='weather-container'>
            <div className='weather-item'>
                <h1>날씨</h1>
                <div className='weather-data'>
                    <h3>광주</h3>
                    <h1>10℃</h1>
                    <h4>맑음</h4>
                </div>
                <div className='button-wrapper'>
                    <button>Osaka</button>
                    <button>Paris</button>
                    <button>London</button>
                </div>
            </div>
        </div>
    )
}

export default Ex13