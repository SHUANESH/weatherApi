import React, {useEffect , useState} from 'react';
import styled from 'styled-components';
import {GetJsonOfCity , GetFetchFunction , GetApiOfCity} from '../../Service/Service';


const Continuer = styled.div`
background-color: #b6fffa;
display: flex;
justify-content: center;
width: 100vw;
height:100vh;
`



const InputDiv = styled.div`

width: 50vw;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
border-radius:5px;
`

const Input = styled.input`
width: 20vw;
border: solid 0px;
margin-top:30px;
margin-bottom: 30px;
font-size: 20px;
box-shadow: 2px 1px 15px 4px #ffffff;
`
export default function GetWeather() {
    const [arrayApiWeather , setArrayApiWeather] = useState();
    const [arrayCityFromApi , setArrayCityFromApi] = useState()
    const [arrayCityFromJson , setArrayCityFromJson] = useState();
    const [cityMatch , setCityMatch] = useState([]);
    const [input , setInput] = useState();
    const [disappear , setDisappear] = useState(false);

   const searchFromJson = (e) =>{
    let matches = arrayCityFromJson.data.filter((city)=>{  
    const regex = new RegExp(`^${e.target.value}`);
    if(e.target.value.length > 0){
        return city.name.match(regex);
    }
    
 });
 setCityMatch(matches);
}



const searchFromApi = (e) => {
    let inputValue = e.target.value
    let matches = arrayCityFromApi.filter((location) => {
    const regex = new RegExp(`^${inputValue.toLowerCase()}`);
    if(inputValue.length > 0){
        return location.city.toLowerCase().match(regex);
    }
    
 });
 setCityMatch(matches);
}

const CityOnClickInformation = (e) => {
    let CityValue = e.target.innerText;
    GetFetchFunction(CityValue);
    console.log(CityValue);
    let aa = arrayCityFromApi.find((item)=>{return item.city === CityValue})
    console.log(aa.populationCounts.map((item => item.value[0])));
}

const ShowWeather = (e)=> {
    let CityValue = e.target.innerText;
    setDisappear(CityValue)
    setCityMatch([]);
    GetFetchFunction(CityValue).then((response) => setArrayApiWeather(response));
    console.log(arrayApiWeather); 
    
}

useEffect(() => {
 
 GetJsonOfCity().then((response) => setArrayCityFromJson(response));
 const getData = GetApiOfCity().then((response) => { return setArrayCityFromApi(response.data)});

}, [])

const DivSpan = styled.div`
cursor: pointer;
font-size: 20px;
background-color: yellow;
margin-top: 20px;
padding: 5px;
`
   
    return (
        <Continuer>
                   <div>
                      <h1>City search</h1>

                      <InputDiv>
                     
                     <label htmlFor="">Enter a city name</label>
                       <Input type="text" name="city" value={input} onChange={searchFromApi}/>
                           
                       {cityMatch?.map((item , index)=>{
                              return <DivSpan key={index}>
                                       <span onClick={ShowWeather}>{item.city}</span>
                                     </DivSpan>

                        })}
                              <span>Selected city: {disappear}</span>
                              <span>Temp: {arrayApiWeather?.main.temp}</span>
                              <span>{arrayApiWeather?.weather[0].description}</span>
                      </InputDiv>
            

                       </div>

        </Continuer>
    )
}