import React from 'react';
import ReactDOM from 'react-dom';


class Main extends React.Component {
    render() {
        return <div className="demo">This is My First React Demo.</div>
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('container')
);
