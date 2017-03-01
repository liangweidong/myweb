import React,{Component} from 'react'

import {View,Text,Button} from "native-base"
import ThreeBtnPerLine from './threeBtnPerLine'
import YilouChoose from './yilouChoose'
export default class ThreeTongHaoDanXuan extends Component{
    constructor(){
        super();
        this.state ={
            dataList:[
                {num:111,desc:'奖金240',selected:false},
                {num:222,desc:'奖金240',selected:false},
                {num:333,desc:'奖金240',selected:false},
                {num:444,desc:'奖金240',selected:false},
                {num:555,desc:'奖金240',selected:false},
                {num:666,desc:'奖金240',selected:false},
            ],
            ylnum:[
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
            ],
            sthdxSelect:{
                selectArr:[],
                selectNum:0
            },
            ylSelect:{
                selectArr:[],
                selectNum:0
            }
        }
    }

    getChanges(){
        let obj = {
            selectCount:this.state.sthdxSelect.selectNum + this.state.ylSelect.selectNum,
            selectSthArr:this.state.sthdxSelect.selectArr,
            selectYlArr:this.state.ylSelect.selectArr,
        }
        this.props.getSelected(obj)
    }
    render(){
        return (
            <View>
                <ThreeBtnPerLine dataList={this.state.dataList}
                                 updateData={(result)=>{
                                    this.setState({
                                        sthdxSelect:result
                                    },()=>{
                                        this.getChanges()
                                    })
                                 }}
                />
                <YilouChoose dataList={this.state.ylnum}
                             updateData={(result)=>{
                                    this.setState({
                                        ylSelect:result
                                    },()=>{
                                        this.getChanges()
                                    })
                                 }}
                />
            </View>

        )
    }
}