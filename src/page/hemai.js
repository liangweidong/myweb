import React,{Component} from 'react';
import {ScrollView,Animated,Easing,View,Text} from 'react-native';
import Headers from '../component/header'
import {Button} from 'native-base'


import {Actions} from 'react-native-router-flux'
export default class Hemai extends Component {
    constructor(){
        super();
        this.state = {
            isOpen:false,
            bounceValue : new Animated.Value(.5),
        }
    }

    openAndHide(){
        this.state.bounceValue.setValue(.5);

        this.setState({
            isOpen:!this.state.isOpen,
        })
        Animated.spring(
            this.state.bounceValue,
            {
                toValue:1,
                friction:4,
                tension:6
            }
        ).start()
    }
    render() {

        return (
            <View>
                <Headers title="合买"></Headers>

                <Button onPress={()=>{
                    this.openAndHide()

                }}>
                    <Text>呵呵</Text>
                </Button>
                {
                    this.state.isOpen?
                    <Animated.View
                        style={{width:100,height:100,backgroundColor:'red',
                        transform:[
                            {scale:this.state.bounceValue}
                        ]
                    }}
                    >
                    </Animated.View>
                    :null
                }

                <View style={[{width:100,height:100,backgroundColor:'green'},{marginLeft:10}]}>

                </View>

            </View>
        );
    }
    componentDidMount(){
        this.state.bounceValue.setValue(1);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue:1,
                friction:1
            }
        ).start()
    }
}