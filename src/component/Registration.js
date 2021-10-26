import React, { Component } from 'react'
import axios from 'axios'

export class Registration extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        };
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.chagePassswordHandler=this.chagePassswordHandler.bind(this);
        this.saveorUpdate=this.saveorUpdate.bind(this)
    }
    changeUserNameHandler =(event)=>{
        this.setState({username:event.target.value});

    }
    chagePassswordHandler =(event)=>{
        this.setState({password:event.target.value});
    }
    cancel(){
        alert("cancel calling...")
    }
    saveorUpdate =(e)=>{
        e.preventDefault();
        alert("calling save or update method......");
        console.log("state information:" +this.state.username+" "+this.state.password);
        axios.post("http://localhost:3000/user",this.state).then((res) =>{console.log(res)});

    }
    render() {
        return (
            <div>
                <h1>REGISTRATION FORM</h1>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" placeholder="enter name" name="username" className="form-control" value={this.state.username} onChange={this.changeUserNameHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" placeholder="enter password" name="password" className="form-control" value={this.state.password} onChange={this.chagePassswordHandler}/>
                        </div>
                        <button className="btn btn-success" onClick={this.saveorUpdate}>Save</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registration

