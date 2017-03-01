import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import {Scene,Router,Actions} from 'react-native-router-flux';
import { Container, Content, Card, CardItem, Body, Text ,Icon,Header,Button,Left,Right,Title} from 'native-base';
import home from './page/home'
import hemai from './page/hemai'
import k3 from './page/k3'
import UserInfo from './page/userInfo'
import FootBall from './page/football'
import lottie from './page/lottie'
import BasicExample from './page/BasicExample'
export default class App extends Component{

    render(){
        return (
            <Router navigationBarStyle={styles.NavBar} titleStyle={{color:"white"}} renderBackButton={LeftIcon} direction={'fade'} >
                <Scene key="app" >
                    <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#fff',borderTopWidth:1,borderColor:'#ccc'}}  >

                        <Scene key="home"     component={home}      title="首页"       icon={TabIcon} hideNavBar  />
                        <Scene key="hemaibar"                       title="合买"       icon={TabIcon} hideTabBar onPress={()=>{Actions.hemai()}} />
                        <Scene key="kaijiang" component={home}      title="开奖-走势"   icon={TabIcon} renderBackButton={null} />
                        <Scene key="shuoshuo" component={home}      title="说说"       icon={TabIcon} renderBackButton={null} />
                        <Scene key="mine"     component={UserInfo}  title="我的"       icon={TabIcon} hideNavBar renderBackButton={null} />

                    </Scene>
                </Scene>
                <Scene key="lottie"   component={BasicExample} title="lottie"              />
                <Scene key="hemai"    component={hemai}        title="hemai"      hideNavBar   />
                <Scene key="k3"       component={k3}           title="快3"         hideNavBar  />
                <Scene key="football" component={FootBall}     title="竞彩足球"     hideNavBar  />
            </Router>
        )
    }
}

const LeftIcon = () =>{
    return (
        <Icon name="arrow-back" style={{color:'white'}} onPress={()=>Actions.pop()} />
    )
}

const TabIcon = ({ selected, title }) => {
    var iconstr;
    let color = selected?'#F57706':"#666";
    switch (title){
        case '首页':iconstr = 'home';break;
        case '合买':iconstr = 'people';break;
        case '开奖-走势':iconstr = 'notifications';break;
        case '说说':iconstr = 'chatbubbles';break;
        case '我的':iconstr = 'person';break;
    }
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Icon style={{color:color}} name={iconstr} />
            <Text style={{color:color,fontSize:12,marginTop:-4}}>{title}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    NavBar:{
        backgroundColor:'#F57706'
    }
});
