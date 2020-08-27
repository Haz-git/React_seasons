import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: '',
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was updated');
    }


    // React requires render();
    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading...</div>;
    }
}





// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Hello</div>
// }

ReactDOM.render(<App />, document.getElementById('root'));