import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
const Post = () => {

    const postInfo = [
        {
            postTitle : "Tom Moody",
            postPersonImage : require("../storage/images/dp1.jpg"),
            postImage : require("../storage/images/post2.jpeg"),
            likes : 765,
            isLiked : false
        },
        {
            postTitle : "John Wick",
            postPersonImage : require("../storage/images/dp4.jpg"),
            postImage : require("../storage/images/post2.jpg"),
            likes : 765,
            isLiked : false
        },
        {
            postTitle : "Iron Man",
            postPersonImage : require("../storage/images/dp5.png"),
            postImage : require("../storage/images/post4.jpg"),
            likes : 765,
            isLiked : false
        }
    ]
  return (
    <View>
        {
            postInfo.map((data,index) => {
                const [like, setLike] = useState(data.isLiked)
                return(
                    <View key={index} style = {{
                        paddingBottom : 10, 
                        borderBottomColor: "gray",
                        borderBottomWidth : 0.1
                    }}>
                        <View style = {{
                            flexDirection: "row",
                            alignItems : "center",
                            justifyContent : "space-between",
                            padding : 15
                        }}>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Image source={data.postPersonImage} style={{width: 40, height : 40, borderRadius: 100}}/>
                                <View style={{paddingLeft : 5}}>
                                        <Text style={{fontSize : 15, fontWeight: "bold"}}>
                                            {data.postTitle}
                                        </Text>
                                </View>
                            </View>
                            <Feather name="more-vertical" style={{fontSize : 20}}/>
                        </View>
                            <View style={{
                                position: 'relative',
                                justifyContent : 'center',
                                alignItems : 'center'
                            }}>
                                <Image source = {data.postImage}
                                style = {{width: "100%", height : 400}} />
                                </View>
                                <View style ={{
                                    flexDirection: "row",
                                    justifyContent : "space-between",
                                    alignItems : "center", 
                                    paddingHorizontal : 12,
                                    paddingVertical : 15
                                }}>
                                    <View style={{flexDirection: "row", alignItems : "center"}}>
                                        <TouchableOpacity onPress={() => setLike(!like)}>
                                            <AntDesign name={like ? "heart" : "hearto"} style={{
                                                paddingRight : 10,
                                                fontSize : 20,
                                                color : like ? 'red' : 'black',
                                            }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Ionic name= "ios-chatbubble-outline" style={{fontSize:20, paddingRight: 10}}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Feather name= "navigation" style={{fontSize:20}}/>
                                        </TouchableOpacity>
                                    </View>
                                    <Feather name='bookmark' style = {{fontSize : 20}} />
                                </View>
                                <View style = {{paddingHorizontal : 15}}>
                                    <Text>
                                        Liked by {like ? "you and" : " "}{" "}
                                        {like ? data.likes + 1 : data.likes} others
                                    </Text>
                                    <Text style={{
                                        fontWeight : '700',
                                        fontSize : 14,
                                        paddingVertical : 2
                                    }}>
                                        Please like and Subscribe ;)
                                    </Text>
                                    <Text style={{opacity : 0.4, paddingVertical : 2}}>
                                        View all comments
                                    </Text>
                                </View>
                    
                    </View>
                )
            })
        }
    </View>
  )
}

export default Post