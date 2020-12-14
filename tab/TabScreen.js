import React,{Component} from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import {Container, Header, Content,Left, Body, Right, Title, Tab, Tabs  } from 'native-base';


// import * as Font from 'expo-font';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';
import Tab3 from './screens/Tab3';



export default class TabsExample extends Component {
    render() {
        return (
        
            <Container >
                <Header style={{backgroundColor:'#7852f7'}} hasTabs>
                    <Left/>
                    <Body>
                        <Title style={{color:'white'}}>Arata News</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
                    <Tab tabStyle={{backgroundColor:'#7852f7'}} 
                        activeTabStyle={{backgroundColor:'#7852f7'}} 
                        textStyle={{color:'white'}} 
                        activeTextStyle={{color:'white'}} heading="日本News" >
                            <Tab1 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor:'#7852f7'}} 
                        activeTabStyle={{backgroundColor:'#7852f7'}} 
                        textStyle={{color:'white'}} 
                        activeTextStyle={{color:'white'}} heading="Tab2" 
                        heading="美國News">
                        <Tab2 />
                    </Tab>
                    <Tab tabStyle={{backgroundColor:'#7852f7'}} 
                        activeTabStyle={{backgroundColor:'#7852f7'}} 
                        textStyle={{color:'white'}} 
                        activeTextStyle={{color:'white'}} 
                        heading="Tab3" heading="台灣News">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        
        );
    }
    }