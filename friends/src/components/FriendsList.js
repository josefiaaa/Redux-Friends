import React from 'react';
import { Link } from 'react-router-dom';

class FriendsList extends React.Component {

    render() {
        return (
            <div>
                <h1>LOGGED IN</h1>
                <div>
                    <Link to='/login' ><button>Log Out!</button></Link>
                </div>
            </div>
        )
    }
}

export default FriendsList;
