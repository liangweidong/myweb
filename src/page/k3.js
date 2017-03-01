import React,{Component} from "react"
import {Image} from 'react-native'
import {Container,Content,Text,Icon,Button,View,Grid,Row,Col} from 'native-base'
import Headers from '../component/header'
import HeaderRight from '../component/headerRight'
import HeaderCenter from '../component/headerCenter'

import TypeSelect from '../component/k3/typeSelect'
import YilouChoose from '../component/k3/yilouChoose'

import ErBuTongDanXuan from '../component/k3/erBuTongDanXuan'
import HeZhi from '../component/k3/heZhi'
import SingleBtn from '../component/k3/singleBtn'
import ThreeTongHaoDanXuan from '../component/k3/threeTongHaoDanXuan'

const testConponent=()=>{
    return (
        <Text>hhee</Text>
    )
}
export default class K3 extends Component {

    constructor(){
        super();
        this.state={
            Count:0,
            isClear:false,
            k3Type:'二同号单选',
        }
    }
    onSelect = (opt)=>{
        alert(opt)
    };
    togglemenu = (name)=>{
        console.log(1)
    }


    componentDidUpdate(){
        if(this.state.isClear){
            this.setState({
                isClear:false
            })
        }
    }
    render(){
        return (
            <Container>
                <Content style={{zIndex:-1,backgroundColor:'grey'}}>
                    <Headers
                             centerComponent={()=>{
                                return (
                                    <HeaderCenter changeType={(names)=>{
                                        this.setState({
                                            k3Type:names
                                        })
                                     }} />
                                )
                             }}
                             rightComponent={()=>{
                                return(
                                    <HeaderRight/>
                                )
                             }}

                    />

                    <Content style={{zIndex:-1,backgroundColor:'grey'}}>
                        <Grid>
                            <Row style={{backgroundColor:'#333',}}>
                                <Col style={{justifyContent:'center',alignItems:'center',borderRightWidth:0.5,borderColor:"grey",paddingTop:5,paddingBottom:5}}>
                                    <Text style={{color:"#fff"}}>第02期开奖1,2,4</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={require('../static/image/s5.png')} style={{width:40,height:40}} />
                                        <Image source={require('../static/image/s5.png')} style={{width:40,height:40}} />
                                        <Image source={require('../static/image/s5.png')} style={{width:40,height:40}} />
                                    </View>
                                </Col>
                                <Col style={{justifyContent:'center',alignItems:'center',paddingTop:5,paddingBottom:5}}>
                                    <Text style={{color:"#fff"}}>距05期投注截止</Text>
                                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                                        <Text style={{color:'#fff',fontSize:24,padding:4}}>00:00</Text>
                                        <Icon name="stats" style={{color:'#fff'}} />
                                    </View>
                                </Col>
                            </Row>
                            <Row style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#666',paddingTop:6,paddingBottom:6,marginBottom:10}}>
                                <Text style={{color:'#F57706',opacity:0.9,fontSize:14,paddingLeft:10}}>摇一摇机选</Text>
                                <Text style={{color:'#eee',fontSize:12,paddingRight:20}}>选好与开奖号码一致即中奖</Text>
                            </Row>
                            <View>

                                {
                                    this.state.k3Type === '二同号单选'?
                                    <ErBuTongDanXuan getSelected={
                                        (result)=>{
                                            this.setState({
                                                Count:result.selectCount
                                            })
                                        }
                                    } isClear={this.state.isClear}/>:null

                                }
                                {
                                    this.state.k3Type === '和值'?
                                        <HeZhi
                                            getSelected={(result)=>{
                                                this.setState({
                                                    Count:result.selectCount
                                                })
                                            }} isClear={this.state.isClear} />
                                        :null
                                }
                                {
                                    this.state.k3Type === '三同号通选'?
                                        <SingleBtn
                                            dataList={{name:'三同号通选',desc:'奖金40',selected:false}}
                                            getSelected={(result)=>{
                                                if(result.selected){
                                                    this.setState({
                                                        Count:1
                                                    })
                                                }
                                            }} />
                                        :null
                                }
                                {
                                    this.state.k3Type === '三同号单选'?
                                        <ThreeTongHaoDanXuan
                                            getSelected={(result)=>{
                                                this.setState({
                                                    Count:result.selectCount
                                                })
                                            }} />
                                        :null
                                }

                            </View>

                        </Grid>


                    </Content>

                </Content>
                <View style={{height:45,backgroundColor:'#111',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Icon name="trash" style={{color:'#F57706',paddingLeft:10,paddingRight:10}} active
                        onPress={()=>{
                            this.setState({
                                isClear:true
                            })
                        }}
                    />
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#fff'}}>共{this.state.Count}注</Text>
                        <Text style={{color:"#F57706"}}>{this.state.Count*2}元</Text>
                    </View>
                    <Button full rounded={false} style={{backgroundColor:'#F57706'}}><Text>下一步</Text></Button>
                </View>
            </Container>
        )
    }
}



const styles = {
    chooseButton:{
        color:'#fff',
        fontSize:22
    },
    chooseButtonNum:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold'
    },
    chooseButtonJJ:{
        color:'#fff',
        fontSize:12
    },
    chooseButtonsm:{

    },
}