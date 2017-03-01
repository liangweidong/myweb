import React,{Component} from 'react'
import {View,Text,Content,Row,Grid} from 'native-base'

import TypeSelect from './typeSelect'
import YilouChoose from './yilouChoose'

export default class ErBuTongDanXuan extends Component{
    constructor (){
        super();
        this.state = {
            thnum : [
                {num: 11, desc: '奖金80', selected: false},
                {num: 22, desc: '奖金80', selected: false},
                {num: 33, desc: '奖金80', selected: false},
                {num: 44, desc: '奖金80', selected: false},
                {num: 55, desc: '奖金80', selected: false},
                {num: 66, desc: '奖金80', selected: false},
            ],
            bthnum:[
                {num:1,desc:'奖金80',selected:false},
                {num:2,desc:'奖金80',selected:false},
                {num:3,desc:'奖金80',selected:false},
                {num:4,desc:'奖金80',selected:false},
                {num:5,desc:'奖金80',selected:false},
                {num:6,desc:'奖金80',selected:false},
            ],
            ylnum:[
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
                {num:'55#4',current:221,price:2.30,max:288,selected:false},
            ],
            thnumCount:0,   
            bthnumCount:0,
            yldata:{
                selectNum:0,
                selectArr:[]
            },
        }

    }

    componentWillReceiveProps(){
        if(this.props.isClear){
            this.state.thnum.map(i=>{
                i.selected = false
            })
            this.state.bthnum.map(i=>{
                i.selected = false
            })
            this.state.ylnum.map(i=>{
                i.selected = false
            })
            this.setState({
                yldata:{
                    selectNum:0,
                    selectArr:[]
                }
            },()=>{
                this.getChanges()
            })
        }
    }

    getChanges(){
        let thnumCount = 0;
        let bthnumCount = 0;
        let selectThArr = [];
        let selectBthArr = [];
        this.state.thnum.map(i=>{
            if(i.selected){
                selectThArr.push(i.num)
                thnumCount++;
            }
        })
        this.state.bthnum.map(i=>{
            if(i.selected){
                selectBthArr.push(i.num)
                bthnumCount++;
            }
        })

        let obj = {
            selectCount:thnumCount*bthnumCount + this.state.yldata.selectNum,
            selectThArr:selectThArr,
            selectBthArr:selectBthArr,
            selectYlArr:this.state.yldata.selectArr
        }
        this.props.getSelected(obj)
    }

    render(){
        return (
            <Grid>
                <TypeSelect chooseTitle='选择"同号"' dataList={this.state.thnum}
                    selectnum={(index)=>{
                        if(this.state.bthnum[index].selected){
                           this.state.bthnum[index].selected=!this.state.bthnum[index].selected
                        }
                        this.setState(()=>{
                            this.state.thnum[index].selected=!this.state.thnum[index].selected
                            this.getChanges();
                        })
                    }}
                />
                <TypeSelect chooseTitle='选择"不同号"' dataList={this.state.bthnum}
                    selectnum = {(index)=>{
                        if(this.state.thnum[index].selected){
                            this.state.thnum[index].selected=!this.state.thnum[index].selected
                        }
                        this.setState(()=>{
                            this.state.bthnum[index].selected=!this.state.bthnum[index].selected
                            this.getChanges();
                        })

                    }}
                />
                <Row>
                <YilouChoose dataList={this.state.ylnum} 
                    updateData={(result)=>{
                        this.setState({
                            yldata:result
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