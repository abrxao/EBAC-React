import React, {useState, useEffect} from 'react';

export default function CharByChar(props){
    const [typing, setTyping] = useState('');
    const [index, setIndex] = useState(0);
    
    const txt = `${props.txt} ${props.date}`;

    useEffect(() => {
        if(index < txt.length){
            setTimeout(() => {
                setTyping(typing+txt[index]);
                setIndex(index+1);
            }, 100);   
        }else{
            setTimeout(() => {
                setTyping('');
                setIndex(0);
            }, 100);
        }
    },[typing])
    
    return (
        <div id='charByChar' style={{
            padding: '8px',
            margin: '16px auto',
            borderTop: '1px solid #000',
            width: "200px",
            height: "80px"
        }}>
            <h4>
                {typing}
            </h4>
        </div>
        )
    }