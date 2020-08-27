import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: '',
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                lat: position.coords.latitude,
            }),
            (err) => this.setState({
                errorMessage: err.message,
            })
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was updated');
    }


    // React requires render();
    render () {

        let latitudeShow = <div>Latitude: {this.state.lat}</div>;
        let errorShow = <div>Error: {this.state.errorMessage}</div>;

        if (this.state.lat !== null) {
            return (
                latitudeShow
            );
        } else {
            return (
                `Loading.... or, there's some sort of ${errorShow}..`
            );
        }
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