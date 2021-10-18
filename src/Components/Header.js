import React,{Component} from "react";
import "./Header.css"
class Header extends Component {
    render(){
        return(
            <div className="HeaderContainer">
                <img className="Headerimg" src="/image/logomadrasaty.png" />
                <h5>Madrasaty Students Record</h5>
            </div>
        )
    }
}
export default Header