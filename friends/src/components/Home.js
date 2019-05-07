import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Friend's List</h2>
            <Link to='/login'><button>Enter</button></Link>
        </div>
    )
}

export default Home;