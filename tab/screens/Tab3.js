import React, { Component } from 'react';
import { Alert, View, ActivityIndicator,Text } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button } from 'native-base';
import DataIteam from '../component/dataitem';
import {getArticles} from '../service/news';
import Modal from '../component/modal';



export default class Tab3 extends Component {

  constructor(props){
    super(props);

    this.state={
      isLoading: true,
      data: null,
      setMoalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articeData)=>{
    this.setState({
      setMoalVisible: true,
      modalArticleData: articeData
    })


  }

  handleModalClose= ()=>{
    this.setState({
      setMoalVisible: false,
      modalArticleData: {}
    })

  }

  componentDidMount() {
    getArticles('tw').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error =>{
      Alert.alert('Error','Somthing went wrong!');
    }
    )
  }

  render() {
    console.log(this.state.data);

    let view =this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text style={{marginTop: 10}}>Plase Wait ...</Text>
      </View>
    ) : (
      <List 
        dataArray={this.state.data}
        renderRow={(item) => {
          return(
          <DataIteam onPress={this.handleItemDataOnPress} data={item}/>
          )
        }}
      />
    )
    return (
      <Container >      
        <Content>
          {view}
        </Content>
        <Modal
          showModal={this.state.setMoalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}