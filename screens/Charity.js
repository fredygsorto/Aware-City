import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

function Item({ item }) {
  return (
   
   <View style={styles.listItem}>
      <Image source={{uri:item.photo}} style={{width:60, height:60,borderRadius:80}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
        <Text>{item.mission}</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>Visit</Text>
        </TouchableOpacity>
    </View>
  );
}

export default class App extends React.Component {
  state = {
    data:[
        {
            "name": "The Bowery Mission:",
            "mission": "Serve a meal, tutor and mentor clients as well as offer a special or professional skill to impact someone's life.",
            "photo": "https://pbs.twimg.com/profile_images/877222620554346496/J09Hv6KW_400x400.jpg"
        },
        {
            "name": "Ali Forney Center:",
            "mission": "Provide nutritious meals, assist youth with clothing needs, facilitate workshops and host career days.",
            "photo": "https://fundforsharedinsight.org/wp-content/uploads/2017/08/2017-r1-grantee-aliforneycenter-1080x675.jpg"
        },
        {
          "name": "Coalition for the homeless:",
          "mission": "Making a difference in  someone’s life by making local stops and providing clients with hot meals.",
          "photo": "https://www.coalitionforthehomeless.org/wp-content/uploads/2015/12/CFTHLogo_InSquare.jpg"
        },
        {
            "name": "Women in Need:",
            "mission": "Help facilitate pre-planned activities with their after-school Recreation and Camp Win programs. Activities focus on reading, art, science, and musical theater.",
            "photo": "http://www1.nyc.gov/assets/dhs/images/content/pages/win-logo.png"
        },
        {
            "name": "BronxWorks:",
            "mission": "Help improve the economic and social well being of individuals and families, by assisting with securing long-term housing, medical and psychiatric services, and referrals to drug and alcohol treatment programs.",
            "photo": "http://www1.nyc.gov/assets/dhs/images/content/pages/bronxworks.png",
        },
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({item }) => <Item item={item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:50,
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#faebd7",
    width:"85%",
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:1
    
  }
});

const LinksList = () => (
  <View>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  </View>
);

