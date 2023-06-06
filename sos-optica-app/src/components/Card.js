import React from "react";
import './custom.css'
class Card extends React.Component{
    render(){
        return(

            <div className="card border-light mb-3"  >

                <div className="cartao" >

                    <h5 className="card-header"><i className={this.props.icon}></i> {this.props.title}</h5>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Card;