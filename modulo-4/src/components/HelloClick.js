import React, {useState} from "react";

export default function HelloClick(props){
    const [count, setCount] = useState(10);

    const handleClick = () => {
        if(count>1){
            setCount(count - 1);
        }else{
            document.querySelector(".helloClick").innerHTML = `Hello World ${props.date}`;
        }
        
    }

    return(
        <div className="helloClick" onClick={handleClick}
        style={{
            padding: 20,
        }}
        >
           Clique aqui {count} vezes para surpresa!
        </div>
    );
}