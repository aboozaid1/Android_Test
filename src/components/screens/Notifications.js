import { View, Text , StatusBar, Image, ScrollView} from 'react-native'
import React from 'react'

const Notifications = () => {

    const notificationInfo = [
        {
        personImage : require("../storage/images/dp1.jpg"),
        personName : "Tom Moody"
        },
        {
            personImage : require("../storage/images/dp2.jpg"),
            personName : "John Doe"
        },
        {
            personImage : require("../storage/images/dp3.jpg"),
            personName : "Jane Doe"
        },
        {
            personImage : require("../storage/images/dp4.jpg"),
            personName : "John wick"
        },
        {
            personImage : require("../storage/images/dp5.png"),
            personName : "Iron Man"
        },{
            personImage : require("../storage/images/dp1.jpg"),
        personName : "Tom Moody"
        },{
            personImage : require("../storage/images/dp2.jpg"),
            personName : "John Doe"
        },
        {
            personImage : require("../storage/images/dp4.jpg"),
            personName : "John wick"
        },
        {
            personImage : require("../storage/images/dp3.jpg"),
            personName : "Jane Doe"
        },
        {
            personImage : require("../storage/images/dp5.png"),
            personName : "Iron Man"
        },{
            personImage : require("../storage/images/dp2.jpg"),
            personName : "John Doe"
        }

    ]


  return (
    <ScrollView style={{backgroundColor : "white", height : '100%'}}>
    <StatusBar backgroundColor={"white"} barStyle={'dark-content'} animated = {true} /> 
    <View style={{ padding : 15}}>
      <Text style={{fontSize : 24, fontWeight :  "500"}}>Notifications</Text>
    </View>
    <View>
        {
    notificationInfo.map((data,index) =>{
        return(
            <View key={index} style = {{
                paddingBottom : 10, 
                borderBottomColor: "gray",
                borderBottomWidth : 1,
                borderBottomEndRadius : 20,
                borderBottomStartRadius : 20
            }}><View style = {{
                flexDirection: "row",
                alignItems : "center",
                justifyContent : "space-between",
                padding : 15
            }}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                    <Image source={data.personImage} style={{width: 40, height : 40, borderRadius: 100}}/>
                    <View style={{paddingLeft : 5}}>
                                        <Text style={{fontSize : 15}}>
                                            {data.personName} and 8 others liked your post.
                                        </Text>
                                </View>
                </View>
                </View>
                </View>
        )
    }
    )
        }
    </View>
    </ScrollView>
  )
}

export default Notifications