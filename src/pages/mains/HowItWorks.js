import React,{useState,useEffect} from "react";
import {useNavigate, useLocation,Link, NavLink} from "react-router-dom";
import {texts} from "../texts/Texts";
import {MainNav,Footer} from "./Navigations";
import {handleScrollTo} from "../Utils";

const HowItWorks =({language, onChanges})=>{
  useEffect(()=>{
    handleScrollTo();
  },[]);
  return(
    <main>
      <MainNav language={language}/>
      <section className="sec_priva flex_c_c">
        <div className="sec_wrap flex_b_">
          <div className="ms-conteiner">
            <h1 className="">{texts.hiwTitle1[language]}</h1>
            <p className="p-f"> <b>1.</b> {texts.hiw_1[language]}</p>
            <p className="p-f"> <b>2.</b> {texts.hiw_2[language]}</p>
            <p className="p-f"> <b>3.</b> {texts.hiw_3[language]}</p>
            <p className="p-f"> <b>4.</b> {texts.hiw_4[language]}</p>
            <p className="p-f"> <b>5.</b> {texts.hiw_5[language]}</p>
          </div> 
        </div>
      </section>
      <Footer language={language} onChanges={onChanges}/>
    </main>
  );
}
export default HowItWorks;