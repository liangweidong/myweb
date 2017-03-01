import React,{Component,PropTypes} from 'react'
import {Container,Header,Title,Button,Left,Right,Body,Icon} from 'native-base'
import {Actions} from 'react-native-router-flux'
export default class Headers extends Component{
    static propTypes = {
        rightComponent: PropTypes.func,
        centerComponent: PropTypes.func,
        title: PropTypes.string,
    };
    render(){
        return (
            <Header style={{backgroundColor:'#F57706'}}>

                <Left>
                    {
                        this.props.leftComponent?
                            this.props.leftComponent()
                            :

                            this.props.hideLeft?null:
                                (<Button transparent onPress={()=>{Actions.pop()}}>
                                    <Icon name="arrow-back" style={{color:'#fff'}} />
                                </Button>)

                    }
                </Left>

                <Body>{this.props.centerComponent?this.props.centerComponent():<Title style={{color:'#fff'}}>{this.props.title}</Title>}</Body>
                <Right>{this.props.rightComponent?this.props.rightComponent():null}</Right>
            </Header>
        )
    }
}
