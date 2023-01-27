import { Typography } from "@mui/material";
import Menu from "../../components/Menu/Menu";
import { Box, Container } from "@mui/system";
import { useEffect,useState } from "react";
import "./mainAnswers.scss";

export default function Answers(){
    const localAnswers = localStorage.answers?JSON.parse(localStorage.answers):[];
    var [answers,setAnswers] = useState(localAnswers);

    useEffect(()=>{
        window.addEventListener("storage",(e)=>{
            answers = setAnswers(JSON.parse(localStorage.answers));
        })
    },[])

    return(
        <main className="mainAnswers">
            <Menu/>
            <Container maxWidth="sm" 
            sx={{
                marginTop: "-1rem",
                padding: "1rem .5rem",
                borderRight: "1px solid #fff3",
                borderLeft: "1px solid #fff3",
                width:"calc(100% - .5rem)"
            }}>
                {answers.length==0 && <Box 
                sx={{
                    backgroundColor: "#fff2",
                    borderRadius: 1,
                    boxShadow: "3px 3px 4px #0006",
                    padding:1,
                    margin: "1rem 0"
                }}>
                <Typography 
                variant="h4"
                sx={{
                    color: "#fff",
                    textAlign: "center"
                }}
                >
                    SEM RESPOSTAS AINDA
                </Typography>  
                </Box>}

                {answers.length!=0 &&
                    <div className="allAnswers">
                        <Typography variant="h5"
                        sx={{
                            color:"#fff",
                            fontSize:(window.innerWidth<350?"1.2rem":"1.8rem" )
                        }}>
                            Total de respostas: <b>{answers.length}</b>
                        </Typography>
                        
                        {answers.map((elem,index)=>{
                        return (
                            <Box 
                            key={index + 1}
                            sx={{
                                backgroundColor: "#fff2",
                                borderRadius: 1,
                                boxShadow: "3px 3px 4px #0006",
                                padding:(window.innerWidth<350 ?".5rem":"1rem"),
                                margin: "1rem 0",
                                width:"calc(100% - .5rem)"
                            }}>
                                <Typography
                                sx={{
                                    padding:(window.innerWidth<350 ?".2rem 0":".4rem 0"),
                                    color:"#fff"
                                }}>
                                    Nome: {elem.user}
                                </Typography>

                                <Typography 
                                sx={{
                                    padding:(window.innerWidth<350 ?".2rem 0":".4rem 0"),
                                    color:"#fff"
                                }}>
                                    CPF: {elem.cpf}
                                </Typography>

                                <Typography
                                sx={{
                                    padding:(window.innerWidth<350 ?".2rem 0":".4rem 0"),
                                    color:"#fff"
                                }}
                                >
                                    Telefone: {elem.phone}
                                </Typography>
                            </Box> 
                        )
                        
                        })}
                    </div>}
                    

            </Container>
        </main>
    )
}