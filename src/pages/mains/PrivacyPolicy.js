import React,{useState,useEffect} from "react";
import {useNavigate, useLocation,Link, NavLink} from "react-router-dom";
import {texts} from "../texts/Texts";
import {MainNav,Footer} from "./Navigations";
import {handleScrollTo} from "../Utils";

const PrivacyPolicy =({language, onChanges})=>{
  useEffect(()=>{
    handleScrollTo();
  },[]);
  
  return(
    <main>
      <MainNav language={language}/>
      <section className="sec_priva flex_c_c">
        <div className="sec_wrap flex_b_">
          <div className="ms-conteiner">
            <h1 className="">{texts.privacyPolicyTitle[language]}</h1>
            <p className="p-f">{texts.ppSubTitleA[language]}</p>
            <p className="p-f">{texts.ppSubTitleB[language]}</p>
            
            <h3 className="ms-conteiner-subtitle">{texts.ppTitle1[language]}</h3>
            <p className="p-f">{texts.pp1_0[language]} </p>
            <p className="p-f"><b>1.1. {texts.fullName[language]}: </b>{texts.pp1_1[language]}</p>
            <p className="p-f"><b>1.2. E-mail: </b> {texts.pp1_2[language]} </p>
            <p className="p-f"><b>1.3. {texts.phoneNumber[language]} </b> {texts.pp1_3[language]}</p>
            <p className="p-f"><b>1.4. {texts.bankAccount[language]}: </b> {texts.pp1_4[language]}</p>
            <p className="p-f"><b>1.5. {texts.imageProfile[language]}: </b> {texts.pp1_5[language]}</p>
            <p className="p-f"><b>1.6. {texts.locationAddress[language]}: </b> {texts.pp1_6[language]}</p>
            
            <h3 className="ms-conteiner-subtitle">2. {texts.ppTitle2[language]}</h3>
            <p className="p-f">{texts.ppTitle2_0[language]}</p>
            <p className="p-f"><b> 2.1. </b>{texts.pp2_1[language]}</p> 
            <p className="p-f"><b> 2.2. </b>{texts.pp2_2[language]}</p> 
            <p className="p-f"><b> 2.3. </b>{texts.pp2_3[language]}</p>
            <p className="p-f"><b> 2.4. </b>{texts.pp2_4[language]}</p> 
            <h3 className="ms-conteiner-subtitle">3. {texts.ppTitle3[language]}</h3>
            <p className="p-f">{texts.ppTitle3_0[language]}</p>
            <p className="p-f"><b> 3.1. {texts.ppTitle3_1[language]}</b> {texts.pp3_1[language]}</p> 
            <p className="p-f"><b> 3.1. {texts.ppTitle3_2[language]}</b> {texts.pp3_2[language]}</p> 
            <p className="p-f"><b> 3.1. {texts.ppTitle3_3[language]}</b> {texts.pp3_3[language]}</p> 
            <p className="p-f"><b> 3.1. {texts.ppTitle3_4[language]}</b> {texts.pp3_4[language]}</p> 
            <p className="p-f"><b> 3.1. {texts.ppTitle3_5[language]}</b> {texts.pp3_5[language]}</p> 
            <h3 className="ms-conteiner-subtitle">{texts.ppTitle4[language]}</h3>
            <p className="p-f">{texts.pp4_1[language]}</p>
            <p className="p-f">{texts.pp4_2[language]}</p>
            <h3 className="ms-conteiner-subtitle">{texts.ppTitle5[language]}</h3>
            <p className="p-f">{texts.pp5_1[language]}</p>
            
            <h3 className="ms-conteiner-subtitle">{texts.ppTitle6[language]}</h3>
            <p className="p-f">{texts.pp6_1[language]}</p>
            <h3 className="ms-conteiner-subtitle">{texts.ppTitle7[language]}</h3>
            <p className="p-f">{texts.pp7_1[language]}</p>
            <h3 className="ms-conteiner-subtitle">{texts.ppTitle8[language]}</h3>
            <p className="p-f">{texts.pp8_1[language]} <b><Link to="/cabinet/support" className="a highlight">{texts.contactUsTitle[language]} </Link></b></p>
            <p className="p-f">{texts.pp8_2[language]}</p>
          </div>
        </div>
      </section>
      <Footer language={language} onChanges={onChanges}/>
    </main>
  );
}
export default PrivacyPolicy;