import React,{Component} from 'react'
import {View,Text} from "react-native"


import Header from '../component/header'
import {footballStyle} from '../static/styles'

export default class FootBall extends Component {
    render(){
        return (
            <View>
                <Header title='竞彩足球'></Header>
                <View style = {[footballStyle.test]}>
                    <Text style={{width:100,height:50,backgroundColor:'blue'}} onPress={()=>{

                        let foo = {
                            a:'1',b:'2',c:'3'
                        }
                        let {c} = foo
                    }}>
                        呵呵呵
                    </Text>
                </View>
            </View>
        )
    }
}