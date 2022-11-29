import React from 'react';
import ReactLoading from 'react-loading';
import './loading.css';

const Loading = () => {
    return (
        <div className='loading'>
            <ReactLoading type='spinningBubbles' color='rgb(255, 102, 0)' height={667} width={375} />
        </div>
    )
}

export default Loading
