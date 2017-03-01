import React,{Component} from 'react'
import {View,Button,Text} from 'native-base'

export default class ThreeBtnPerLine extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataList:this.props.dataList
        }
    }
    render(){
        return (
            <View style={{
                marginLeft:10,
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                {this.state.dataList.map((i,index)=>{
                    return (
                        <Button key={index} full style={{
                            width:115,
                            borderWidth:1,
                            borderColor:i.selected?"#F57706":'#fff',
                            backgroundColor:i.selected?"#F57706":'transparent',
                            flexDirection:'column',
                            paddingTop:10,
                            marginRight:5,
                            marginBottom:5
                        }} onPress={()=>{
                            this.setState(()=>{
                                this.state.dataList[index].selected = !this.state.dataList[index].selected
                            },()=>{
                                let selectArr = [];
                                let selectNum = 0;
                                this.state.dataList.map(i=>{
                                    if(i.selected){
                                        selectArr.push(i.num);
                                        selectNum++;
                                    }
                                })
                                let obj = {
                                    selectArr:selectArr,
                                    selectNum:selectNum
                                }
                                this.props.updateData(obj)
                            })
                        }}>
                            <Text style={{
                                fontSize:20,
                                fontWeight:'bold',
                                marginBottom:-3
                            }}>{i.num}</Text>
                            <Text style={{
                                fontSize:12
                            }}>{i.desc}</Text>
                        </Button>
                    )
                })}
            </View>
        )
    }
}