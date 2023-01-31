import React,{useRef, useEffect} from "react";

export default function useEmail(email){
    const ref = useRef();

    var rgx = /\S+@\S+\.\S+/;
    ref.current = !rgx.test(email);

    return email===""? false:ref.current;
}