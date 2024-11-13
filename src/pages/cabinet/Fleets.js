import React,{useState, useEffect,useRef} from "react";
import {Link,useNavigate, Outlet} from "react-router-dom";
import {texts} from "../texts/Texts";
import Packages from "./Packages";

const Fleets = ({language,mode}) =>{
  return(
    <section className="a_sec m20">
      {mode === "admin" && <header className="a_sec_header flex_b_c">
        <h1 className="page-title">{texts.fleetsTitle[language]}</h1>
        <div className="flex_c_c">
          <Link to="/admin/fleets/action?type=set&id=" className="a">
          <div className="a_reload  flex_c_c"> <p className="">{texts.newFleet[language]} </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </div>
          </Link>
        </div>
        </header>||
         <div className="features-header">
          <div className="title">{texts.packagesTitleA[language]} <span>{texts.packagesTitleB[language]}</span>  {texts.packagesTitleC[language]}</div>
          <p className="features-paragraph">{texts.packagesParagraphB[language]}</p>
        </div>
      }
      <Packages language={language} mode={mode}/>
      <Outlet/>
    </section>
  );
}

export default Fleets;
  