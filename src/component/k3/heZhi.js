import React,{Component} from 'react'
import {View,Text,Content,Row,Grid} from 'native-base'

import FourBtnPerLine from './fourBtnPerLine'
import YilouChoose from './yilouChoose'

export default class ErBuTongDanXuan extends Component{
    constructor (){
        super();
        this.state = {
            hznum : [
                {num: 3,  desc: '奖金80', selected: false, count:1 },
                {num: 4,  desc: '奖金80', selected: false, count:1 },
                {num: 5,  desc: '奖金80', selected: false, count:1 },
                {num: 6,  desc: '奖金80', selected: false, count:1 },
                {num: 7,  desc: '奖金80', selected: false, count:1 },
                {num: 8,  desc: '奖金80', selected: false, count:1 },
                {num: 9,  desc: '奖金80', selected: false, count:1 },
                {num: 10, desc: '奖金80', selected: false, count:1 },
                {num: 11, desc: '奖金80', selected: false, count:1 },
                {num: 12, desc: '奖金80', selected: false, count:1 },
                {num: 13, desc: '奖金80', selected: false, count:1 },
                {num: 14, desc: '奖金80', selected: false, count:1 },
                {num: 15, desc: '奖金80', selected: false, count:1 },
                {num: 16, desc: '奖金80', selected: false, count:1 },
                {num: 17, desc: '奖金80', selected: false, count:1 },
                {num: 18, desc: '奖金80', selected: false, count:1 },
            ],
            ylnum:[
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
            ],
            hezhiSelect:{
                selectNum:0,
                selectArr:[]
            },
            ylSelect:{
                selectNum:0,
                selectArr:[]
            }
            

        }

    }

    componentWillReceiveProps(){
        if(this.props.isClear){
            
            this.state.hznum.map(i=>{
                i.selected = false
            })
            this.state.ylnum.map(i=>{
                i.selected = false
            })
            this.setState({
                ylSelect:{
                    selectNum:0,
                    selectArr:[]
                },
                hezhiSelect:{
                    selectNum:0,
                    selectArr:[]
                },
            },()=>{
                this.getChanges()
            })

        }
    }

    getChanges(){
        let obj = {
            selectCount:this.state.hezhiSelect.selectNum + this.state.ylSelect.selectNum,
            hezhiSelect:this.state.selectArr,
            ylSelect:this.state.ylSelect.selectArr
        }
        this.props.getSelected(obj)
    }

    render(){
        return (
            <Grid>
                <FourBtnPerLine
                    dataList={this.state.hznum}
                    updateData={(result)=>{
                        this.setState({
                            hezhiSelect:result
                        },()=>{
                             this.getChanges()
                        })

                    }}
                />
                <Row>
                    <YilouChoose
                        dataList={this.state.ylnum}
                        updateData={(result)=>{
                            this.setState({
                                ylSelect:result
                            },()=>{
                                this.getChanges()
                            })
                        }}
                    />
                </Row>
            </Grid>
        )
    }
}