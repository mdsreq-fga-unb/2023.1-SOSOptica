import React from "react";

class FormGroup extends React.Component{
    render() {
        return(
            <div className="form-group" style={{display:"flex",flexDirection:"column",gap:"4"}}>
                <label className="col-form-label mt-4"  htmlFor={this.props.htmlFor}>{this.props.label }</label>
                {this.props.children}
            </div>
        );

    }
}
export default FormGroup;