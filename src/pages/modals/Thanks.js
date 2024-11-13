import React, {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {texts} from "../texts/Texts";

const Thanks =({language})=>{
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(searchParams.entries());
  const {type,field,reason} = params
  const textToshow = {title:"",parags:[]}
  
  if(field === "deposit" &&  type === "success"){
    textToshow.parags = [texts.orderWasPlaced[language],texts.confirmationProvider[language]];
    textToshow.title = texts.thankYou[language];
  }
  if(field === "withdrawal" && type === "success"){
    textToshow.title = texts.thankYou[language];
    textToshow.parags=[texts.orderWasPlaced[language], texts.withdrawalsInQueueWarn[language]];
  }
  
  if(type === "error"){
    textToshow.title = texts.sorry[language];
    textToshow.parags = [texts.requestWasRejected[language], texts.unableToFulfill[language]];
    if(reason === "bunned"){
      textToshow.parags = [texts.requestWasRejected[language], texts.unableToFulfill[language], texts.hasBeenBanned[language]];
    }
  }
  
  return(
    <div className="popUp flex_c_c">
      <div className="card_popup a_conatiner">
        <div className="modal_body">
          <div className={`card_thanks ${type} flex_c_c`}>
            <div className="icon flex_c_c"> </div>
            <h1>{textToshow.title}</h1>
            {textToshow.parags.map((elem, index)=>(
              <p key={index}>{elem}</p>
            ))}
            <div className="input_card">
              <button onClick={()=>navigate(-1,{replace:true})} className="b main_btns"> Ok!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Thanks;