import React from "React";
import "./CompanionNameContainer.css";
export default class CompanionNameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: true // пока что не используется
        };
    }
    render(){
        return(
            <div className="companion-name-container">
                {props.}
            </div>
        );
    }
}