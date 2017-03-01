import React,{Component} from 'react'
import {Text,View} from 'react-native'
import {Button} from 'native-base'


export default class FourBtnPerLine extends Component{
    // [{num: 3,  desc: '奖金80', selected: false, count:1 }]
    constructor(props){
        super(props);
        this.state = {
            dataList:this.props.dataList
        }
    }

    render(){
        return (
            <View style={{marginLeft:10,flexDirection:'row',flexWrap:'wrap'}}>
                {this.state.dataList.map((i,index)=>{
                    return(
                        <Button key={index} full transparent style={{
                            width:80,
                            height:50,
                            padding:0,
                            justifyContent:'center',
                            flexDirection:'column',
                            borderWidth:1,
                            borderColor:i.selected?"#F57706":'#fff',
                            backgroundColor:i.selected?"#F57706":'transparent',
                            marginRight:11,
                            marginBottom:10,
                        }} onPress={()=>{
                            this.setState(()=>{
                                this.state.dataList[index].selected=!this.state.dataList[index].selected;
                            },()=>{
                                let selectnum = 0;
                                let selectArr = [];
                                this.state.dataList.map(i=>{
                                    if(i.selected){
                                        selectnum = selectnum + i.count ;
                                        selectArr.push(i.num)
                                    }
                                });
                                let obj = {
                                    selectNum : selectnum,
                                    selectArr:selectArr
                                }
                                this.props.updateData(obj)
                            })


                        }} >
                            <Text style={{color:'#fff',fontSize:24,fontWeight:'bold'}}>{i.num}</Text>
                            <Text style={{color:'#fff',fontSize:12}}>{i.desc}</Text>
                        </Button>
                    )

                })}


            </View>
        )
    }
}