import React from 'react';
import Animation from 'lottie-react-native';

export default class BasicExample extends React.Component {
    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <Animation
                ref={animation => { this.animation = animation; }}
                style={{
                  width: 200,
                  height: 200,
                }}
                source={{uri:'https://raw.githubusercontent.com/Jam3/ae-to-json/master/example/example.json'}}
            />
        );
    }
}