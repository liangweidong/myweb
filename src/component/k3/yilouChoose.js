import React,{Component} from 'react'
import {Container,Content,Text,Icon,Button,View,Grid,Row,Col} from 'native-base'



export default class TypeSelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataList : this.props.dataList
        }
    }

    test(){
        let selectNum = 0;
        let selectArr = [];
        this.state.dataList.map(i=>{
            if(i.selected){
                selectNum++;
                selectArr.push(i.num);
            }
        });
        let obj = {
            selectNum:selectNum,
            selectArr:selectArr
        }
        this.props.updateData(obj);
    }
    render(){
        return(
            <Col style={{marginLeft:5}}>
                <Row style={{paddingBottom:5}}>
                    <Text style={{color:'#fff',fontSize:14,letterSpacing:0,fontWeight:'bold'}}>以下为当前遗漏号码的前6名</Text>
                </Row>
                <Row style={{flexWrap:'wrap'}}>
                    {
                        this.state.dataList.map((i,index) => (
                            <Button key={index} full
                                style={{
                                    padding:0,
                                    width:180,
                                    backgroundColor:i.selected?"#F57706":'#222',
                                    marginBottom:5,
                                    marginRight:5,
                                    flexDirection:'row',
                                    flexWrap:'wrap',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    height:50,
                                }}
                                onPress={()=>{
                                    this.setState(()=>{
                                        this.state.dataList[index].selected=!this.state.dataList[index].selected
                                    },()=>{
                                        this.test()
                                    })
                                }}
                            >
                                <Text style={{color:i.selected?"#fff":'#F57706',width:75,textAlign:"right",marginRight:15,marginBottom:8}}>{i.num}</Text>
                                <Text style={{color:i.selected?"#fff":'#aaa',width:80,fontSize:12,}}>当前遗漏:{i.current}</Text>
                                <Text style={{color:i.selected?"#fff":'#aaa',width:75,textAlign:"right",fontSize:12,marginRight:15}}>投资价值:{i.price}</Text>
                                <Text style={{color:i.selected?"#fff":'#aaa',width:80,fontSize:12,}}>最大遗漏:{i.max}</Text>
                            </Button>
                        ))
                    }
                    
                </Row>
            </Col>
        )
    }
}




const styles = {
    
}