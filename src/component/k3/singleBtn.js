import React,{Component} from 'react'
import {View,Button,Text} from "native-base"

export default class SingleBtn extends Component{
    constructor(props){
        super(props);
        this.state={
            dataList:this.props.dataList
        }
    }
    render(){
        return (
            <View style={{marginLeft:10,marginRight:10}}>
                <Button full
                    style={{
                        borderWidth:1,
                        borderColor:this.state.dataList.selected?"#F57706":'#fff',
                        flexDirection:'column',
                        backgroundColor:this.state.dataList.selected?"#F57706":"transparent",
                        paddingTop:10,
                        height:50
                    }}
                    onPress={()=>{
                        this.setState(()=>{
                            this.state.dataList.selected = !this.state.dataList.selected
                        },()=>{
                            this.props.getSelected(this.state.dataList)
                        })
                    }}
                >
                    <Text style={{
                        color:'#fff',
                        fontSize:20,
                        fontWeight:'bold'
                    }}
                    >{this.state.dataList.name}</Text>
                    <Text style={{
                        color:"#fff",
                        fontSize:12
                    }}
                    >{this.state.dataList.desc}</Text>
                </Button>
            </View>
        )
    }
}