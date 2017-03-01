import React from 'react';

import {View,Text} from 'react-native'
import Animation from 'lottie-react-native';

export default class BasicExample extends React.Component {
    componentDidMount() {
        console.log(this.animation)
        this.animation.play();
    }

    render() {
        return (
            <View>
                <Animation
                    ref={animation => { this.animation = animation; }}
                    style={{
                      width: 200,
                      height: 200,
                    }}
                    key='1'
                    source={{uri:'https://raw.githubusercontent.com/Jam3/ae-to-json/master/example/example.json'}}
                />

                <View style={{width:100,height:100,backgroundColor:"blue"}}>
                    <Text>呵呵</Text>
                </View>
            </View>

        );
    }
}