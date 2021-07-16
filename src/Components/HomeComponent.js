import React from 'react'
import { useDispatch } from 'react-redux';
import { sidebarToggle } from '../redux/actionCreator';
import { FaBars } from 'react-icons/fa';

function Home() {
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className="btn-toggle" onClick={() => dispatch(sidebarToggle())}>
                <FaBars />
            </div>
            <div>
                <h1>hii</h1>
            </div>
        </React.Fragment>
    )
}

export default Home
