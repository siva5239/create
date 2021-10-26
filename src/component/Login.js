import React, { Component } from 'react'
import Service from '../Service/Service';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             user:[]
        };
        this.login=this.login.bind(this)

    }
    login(res){
        res.preventDefault();
        this.setState({user:Service.getuser(this.state.username,this.state.password).then(e=>console.log(e.data))})
        
        console.log(this.state.username,this.state.password);
        console.log(this.state.user)
        

       
        
    }
    
    render() {
        return (
            <div>
                <h1>LOGIN FORM</h1>
                <div className="card" style={{width:500,height:300,marginLeft:500}}>
                <form>
                    <div className="form-group">
                        <label >Email address</label><br/><br/>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={this.state.username} onChange={(res)=>{this.setState({username:res.target.value})}}  placeholder="Enter email"/>
                      
                    </div>
                    <div className="form-group">
                        <label >Password</label><br/><br/>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={(res)=>{this.setState({password:res.target.value})}} placeholder="Password"/><br/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" onClick={this.login} >Submit</button>
                </form>
                </div>


            </div>
        )
    }
}

export default Login
