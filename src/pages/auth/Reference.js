import React,{useEffect} from "react";
import SignUp from "./SignUp";
const Reference = ({language}) => {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');
  useEffect(()=>{
    if(id){
      localStorage.setItem('upline', id);
    }
  }, [id]);
  return <SignUp language={language}/>;
};

export default Reference;