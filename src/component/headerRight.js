import React,{Component} from "react"
import {Container,Content,Text,Icon,Button,View} from 'native-base'
import Popover from 'antd-mobile/lib/popover'

const Item = Popover.Item;
export default class K3 extends Component {
    onSelect = (opt)=>{
        alert('hwhw')
    };

    render(){
        return (
            <Button transparent style={{width:44}}>
                <Popover
                    name="myitem"
                    overlay={[
                        (<Item key="1"  value="scan"      size="xs"><Text style={styles.itemStyle}>投注记录</Text></Item>),
                        (<Item key="2"  value="scan"      size="xs"><Text style={styles.itemStyle}>玩法介绍</Text></Item>),
                        (<Item key="3"  value="button ct" size="xs"><Text style={styles.itemStyle}>专家推荐</Text></Item>),
                        (<Item key="4"  value="button ct" size="xs"><Text style={styles.itemStyle}>走势图</Text></Item>),
                        (<Item key="5"  value="button ct" size="xs"><Text style={styles.itemStyle}>遗漏表</Text></Item>),
                    ]}
                    renderOverlayComponent={(opts) => <View>{opts}</View>}

                    style={{
                        justifyContent:'center',
                        alignItems:'center',


                    }}

                    overlayStyle={{
                        width:100,
                        left:-65,
                        marginTop:40,
                        alignItems:'center',
                        zIndex:99999999999
                    }}

                    onSelect={this.onSelect}

                >
                    <Icon name="menu" active style={{color:'white'}} />
                </Popover>
            </Button>
        )
    }
}
const styles = {
    itemStyle:{
        fontSize:14,
        textAlign:'center'
    }
}



