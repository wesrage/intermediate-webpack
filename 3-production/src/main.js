import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

class CurrentTime extends React.Component {
    state = {
        timestamp: Date.now(),
    }

    componentDidMount() {
        this.loop();
    }

    loop = () => {
        requestAnimationFrame(this.loop);
        this.setState({ timestamp: Date.now() });
    }

    render() {
        const dateString = moment(this.state.timestamp).format('YYYY-MM-DD HH:mm:ss.SSS');
        return (
            <h1>Current Time: {dateString}</h1>
        );
    }
}

render(
    <CurrentTime/>,
    document.getElementById('root'),
);
