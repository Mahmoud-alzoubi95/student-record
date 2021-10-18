import React,{Component} from "react";
import "./Header.css"
class Header extends Component {
    render(){
        return(
            <div className="HeaderContainer">
                <img className="Headerimg" src="https://d3ekyrd5f0qkjv.cloudfront.net/sites/default/files/styles/logo/public/project_icons/logo.png" />
                <h5>Madrasaty Students Record</h5>
            </div>
        )
    }
}
export default Header