import React,{useRef, useEffect} from "react";

export default function useEmail(CPFs){
    const ref = useRef();
    
    {
        const CPF =CPFs.replace(/[\.-]/g, "");
        var sum;
        var rest;
        sum = 0;
        if (CPF == "00000000000") return ref.current = true;
        if(CPF =="") return ref.current = false;
        
        for (var i=1; i<=9; i++) sum = sum + parseInt(CPF.substring(i-1, i)) * (11 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(CPF.substring(9, 10)) ) return ref.current = true;
        
        sum = 0;
        for (var i = 1; i <= 10; i++) sum = sum + parseInt(CPF.substring(i-1, i)) * (12 - i);
        rest = (sum * 10) % 11;
        
        if ((rest == 10) || (rest == 11))  rest = 0;
        if (rest != parseInt(CPF.substring(10, 11) ) ) return ref.current = true;
        return ref.current = false;
    }
}