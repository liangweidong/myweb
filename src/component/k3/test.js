import React,{Component} from 'react'
import {View,Text,Content} from 'native-base'

import TypeSelect from 'typeSelect'
import YilouChoose from 'yilouChoose'

export default class Test extends Component{
    render(){
        return (
            <Content>
                <TypeSelect chooseTitle='选择"同号"' dataList={
                    [
                        {num:11,desc:'奖金80',selected:true},
                        {num:22,desc:'奖金80'},
                        {num:33,desc:'奖金80'},
                        {num:44,desc:'奖金80',selected:true},
                        {num:55,desc:'奖金80'},
                        {num:66,desc:'奖金80'},
                    ]
                } />
                <TypeSelect chooseTitle='选择"不同号"' dataList={
                    [
                        {num:1,desc:'奖金80'},
                        {num:2,desc:'奖金80'},
                        {num:3,desc:'奖金80'},
                        {num:4,desc:'奖金80'},
                        {num:5,desc:'奖金80'},
                        {num:6,desc:'奖金80'},
                    ]
                } />
                <Row>
                <YilouChoose dataList={[
                    {num:'55#4',current:221,price:2.30,max:288,selected:false},
                    {num:'55#4',current:221,price:2.30,max:288,selected:false},
                    {num:'55#4',current:221,price:2.30,max:288,selected:true},
                    {num:'55#4',current:221,price:2.30,max:288,selected:false},
                    {num:'55#4',current:221,price:2.30,max:288,selected:false},
                    {num:'55#4',current:221,price:2.30,max:288,selected:false},
                    ]} />
                </Row>
            </Content>
        )
    }
}