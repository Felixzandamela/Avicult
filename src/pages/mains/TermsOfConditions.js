import React,{useState,useEffect} from "react";
import {useNavigate, useLocation,Link, NavLink} from "react-router-dom";
import {texts} from "../texts/Texts";
import {MainNav,Footer} from "./Navigations";
import {handleScrollTo} from "../Utils";

const TermsOfConditions =({language, onChanges})=>{
  useEffect(()=>{
    handleScrollTo();
  },[]);
  return(
    <main>
      <MainNav language={language}/>
      <section className="sec_priva flex_c_c">
        <div className="sec_wrap flex_b_">
          <div className="ms-conteiner">
            <h1 className="">{texts.tcTitle0[language]}</h1>
            <p className="p-f">{texts.tc0_0[language]}</p>
            
            <h3 className="ms-conteiner-subtitle">1. {texts.tcTitle1[language]}</h3>
            <p className="p-f"><b>(a) </b> {texts.tc1_0[language]}</p>
            
            <h3 className="ms-conteiner-subtitle">2. {texts.tcTitle2[language]}</h3>
            <p className="p-f"><b>(a)</b> {texts.tc2_0[language]}</p>
            <p className="p-f"><b>(b)</b> {texts.tc2_1[language]}</p>
            <p className="p-f"><b>(c)</b> {texts.tc2_2[language]}</p>
            
            <h3 className="ms-conteiner-subtitle">3. {texts.tcTitle3[language]}</h3>
            <p className="p-f"><b>(a)</b> {texts.tc3_0[language]}</p>
            <h3 className="ms-conteiner-subtitle">4. {texts.tcTitle4[language]}</h3>
            <p className="p-f"><b>(a)</b> {texts.tc4_0[language]}</p>
            <p className="p-f"><b>(b)</b> {texts.tc4_1[language]}</p>
            
            <h3 className="ms-conteiner-subtitle">5. {texts.tcTitle5[language]}</h3>
            <p className="p-f"><b>(a)</b> {texts.tc5_0[language]} <Link to="/cabinet/support" className="a highlight">{texts.contactUsTitle[language]} </Link> </p>
          </div>
        </div>
      </section>
      <Footer language={language} onChanges={onChanges}/>
    </main>
  );
}
export default TermsOfConditions;