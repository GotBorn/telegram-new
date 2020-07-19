import React from "react";
import "./CompanionNameContainer.css";
export default class CompanionNameContainer extends React.Component {
    constructor(props) {
        super(props); // companionName
        this.state = {
            isOnline: true // пока что не используется
        };
    }
    render() {
        return(
            <div className="companion-name-container">
                <span className="text-vertical-align-center">
                    {this.props.companionName}  
                </span>
            </div>
        );
    }
}