import React,{Component,PropTypes} from 'react'
import {Animated} from 'react-native';
import {Container,Content,Text,View,Button,Grid,Col,Row} from 'native-base'


export default class HeaderCenter extends Component{
    static propTypes = {
        typeName : PropTypes.string,
    }
    constructor(){
        super();
        this.state = {
            isOpen:false,
            playType:'玩法',
            typeList:[
                '和值','三同号通选','三同号单选','二同号复选','二不同号','胆拖二不同',
                '胆拖三不同','三连号通选','二同号单选','二同号和值','二同号跨度','二同号形态',
                '三不同号','三不同和值','三不同跨度','三不同形态'
            ],
            currentType:'二同号单选',
            bounceValue : new Animated.Value(0)
        }
    }
    render(){
        return (
            <View style={{width:280}}>
                <Text style={{textAlign:'left',color:'#fff'}} onPress={()=>{
                        this.state.bounceValue.setValue(0);
                        this.setState({
                            isOpen:!this.state.isOpen
                        })
                        Animated.spring(
                            this.state.bounceValue,
                            {
                                toValue:1,
                                friction:6,
                                tension:20
                            }
                        ).start()
                    }}>
                    新新快3 {this.state.currentType}
                </Text>
                {this.state.isOpen?
                <Button style={{
                    backgroundColor:'rgba(0,0,0,.4)',
                    height:600,
                    width:374,
                    position:'absolute',
                    padding:0,
                    margin:0,
                    alignItems:'flex-start',
                    left:-47,
                    top:30,
                }} onPress={()=>{
                    this.setState({
                        isOpen:!this.state.isOpen
                    })
                }}>
                    <Animated.View style={{
                        width:374,
                        backgroundColor:'#ccc',
                        flexDirection:'row',
                        flexWrap:'wrap',
                        transform:[
                            {scale:this.state.bounceValue}
                        ]
                    }}>
                    {
                        this.state.typeList.map((i,index)=>{
                            return (
                                <Button full key={index} style={{
                                    width:92.1,
                                    height:50,
                                    padding:0,
                                    justifyContent:'center',
                                    backgroundColor:i==this.state.currentType?'#F57706':'#fff',

                                    margin:0.7
                                }}  onPress={()=>{
                                        this.setState({
                                            currentType:this.state.typeList[index],
                                            isOpen:!this.state.isOpen
                                        })
                                        this.props.changeType(i);
                                    }}
                                >
                                    <Text
                                    style={{
                                        color:i==this.state.currentType?'#fff':'#666',
                                        fontSize:14,
                                    }}
                                    >{i}</Text>
                                </Button>
                            )
                        })
                    }
                    </Animated.View>

                </Button>
                    :null
                }


            </View>
        )
    }
}