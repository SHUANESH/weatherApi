import { useState } from "react";
const API_HTTP = process.env.REACT_APP_API_HTTP;
const API_KEY = process.env.REACT_APP_API_KEY;

//  console.log(API_HTTP);
//  console.log(API_KEY);

export function GetFetchFunction(city){
    try{
      return fetch(`${API_HTTP}${city}&appid=${API_KEY}`)
       .then(response => response.json())
       .then(jsonObj => jsonObj)
    }
    catch(error){
       return error;
    }

   }

 export function GetJsonOfCity(){

        try{
           return fetch("JsonCity.json")
            .then( res=> res.json())
            .then( jsonObj=> jsonObj)
        }
        catch(error){
            console.log(error);
        }

}

export function GetApiOfCity(){

    try{
       return fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
        .then( res=> res.json())
        .then( jsonObj=> jsonObj)
        // .then((E)=>{console.log(E.data);})
    }
    catch(error){
        console.log(error);
    }

}