import PauseOnHover from "./PauseOnHover";
import "./MainHome.scss"
import Menu from "../../components/Menu/Menu";
import React from "react";

export default class Home extends React.Component {
    constructor(){
        super()
    }
    render() {
        return(
            <main className="mainHome">
                <Menu/>
                <PauseOnHover/>
            </main>
            )
        }
    }