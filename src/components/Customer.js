import React from 'react';

class Customer extends React.Component{
    render(){
        return(
        <div>
            <CustomerProfile id={this.props.id} img={this.props.img} name={this.props.name}></CustomerProfile>
            <CustomerInfo number ={this.props.number} age={this.props.age}></CustomerInfo>
        </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.img} alt="profile">
                </img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}
export default Customer;