import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../action/login';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            info: {
                username:'',
                password:''
            }
        }        
    }

    changeHandler = event => {
        this.setState({
          info: {
            ...this.state.info,
            [event.target.name]: event.target.value
          }
        });
    };

    login = event => {
        event.preventDefault();
        this.props.login(this.state.info).then(() => {
            this.props.history.push('/friends-list');
        })
    }

    render () {
        return(
            <div>
                <form onSubmit={this.login} >
                    <input
                     type = 'text'
                     name = 'username'
                     placeholder = 'Username'
                     value = {this.state.info.username}
                     onChange = {this.changeHandler}
                    />
        
                    <input
                     type='password'
                     name='password'
                     placeholder='Password'
                     value = {this.state.info.password}
                     onChange = {this.changeHandler}
                    />
                    <Link to='/friends-list' >
                        <button>Log In!</button>
                    </Link>
                    <Link exact to='/' >
                        <button>Back to Home.</button>
                    </Link>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}
  
export default connect(
    mapStateToProps,{ login })(Login);