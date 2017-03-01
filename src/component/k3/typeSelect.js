import React,{Component} from 'react'
import {View,TouchableHighlight} from 'react-native'
import {Container,Content,Text,Icon,Button,Grid,Row,Col} from 'native-base'



export default class TypeSelect extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Col style={{marginLeft:15}}>
                <Row style={{flexWrap:'wrap'}}>
                    <View style = {styles.chooseTwoTitle}>
                        <Text style={styles.chooseButton}>{this.props.chooseTitle}</Text>
                    </View>
                    {
                        this.props.dataList.map((i,index)=>{
                            return (
                                <TouchableHighlight key={index} underlayColor={'transparent'} style = {[styles.chooseTwoItems,i.selected?styles.select:null]}
                                    onPress={
                                        () => {
                                            this.props.selectnum?this.props.selectnum(index):null;
                                        }
                                    }
                                >
                                    <View>
                                        <Text style={styles.chooseButtonNum}>{i.num}</Text>
                                        <Text style={styles.chooseButtonJJ}>{i.desc}</Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }

                </Row>
            </Col>  
        )
    }
}

const styles = {
    chooseTwoTitle:{
        width:168,
        height:50,
        marginRight:10,
        borderWidth:1,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },

    chooseButton:{
        color:'#fff',
        fontSize:22
    },
    chooseTwoItems:{
        width:79,
        height:50,
        marginRight:10,
        borderWidth:1,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },
    chooseButtonNum:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    },
    chooseButtonJJ:{
        color:'#fff',
        fontSize:12,
        textAlign:'center',

    },
    select:{
        backgroundColor:"#F57706",
        borderColor:'#F57706'
    }
}