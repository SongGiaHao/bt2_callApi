import { Text, StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'


export default class CallApi extends Component {
        state = {
            employees:[]
        };

        loadMyData() {
            axios({
                method: 'GET',
                // headers: { 'Access-Control-Allow-Origin':'*' },
                url: 'https://gorest.co.in/public/v2/users',
                data: null
            }).then(res => {
                this.setState({
                    employees: res.data
                })
                console.log(res.data)
            })
        }
        componentDidMount(){
            this.loadMyData();
        }
  render() {
    return (
        <View>
        <Text style={styles.textHeader}> Axios CallApi</Text>
    <FlatList
        style={styles.list}
    data={this.state.employees}
    keyExtractor={(item,index)=>item.id}
    renderItem={(iteamData)=>(
        <View style={styles.iteamData} >
            <Text>Name: {iteamData.item.name}</Text>
            <Text>Email: {iteamData.item.email}</Text>
            <Text>Gender: {iteamData.item.gender}</Text>
            <Text>Status: {iteamData.item.status}</Text>
        </View>
    )}
    >
    </FlatList>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    textHeader:{
        fontSize:20,
      textAlign:"center",
      marginTop:30,
      fontWeight:"bold"
    },
    list:{
   
        padding:15,
        margin:20,
    
    },
    iteamData:{
        alignItems:'flex-start',
        margin:10,
        paddingBottom:10,
        borderBottomColor:"#ccc",
        borderBottomWidth:1
    }


})