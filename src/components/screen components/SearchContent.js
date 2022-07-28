import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SearchContent = () => {

    const searchData = [

        {
            id : 0,
            images : [
                require("../storage/images/post1.jpg"),
                require("../storage/images/post2.jpeg"),
                require("../storage/images/post3.jpg"),
                require("../storage/images/post4.jpg"),
                require("../storage/images/post5.jpg"),
                require("../storage/images/post6.jpg"),
                require("../storage/images/post7.jpg"),
                require("../storage/images/post8.jpg"),
                require("../storage/images/post9.jpg")
                
            ]
        }
    ]
  return (
    <View>
      {
        searchData.map((data,index) => {
            return(
                <>
                    {
                        data.id === 0 ?
                        (
                            <View style={{flexDirection : "row", flexWrap : "wrap", justifyContent: "center", padding:10}}>
                                    {
                                        data.images.map((imageData, imgIndex) =>{
                                            return(
                                                <TouchableOpacity style={{padding : 2}}>
                                                    <Image source={imageData} style= {{width: 160, height:150}}/>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                            </View>
                        ) :null }

                        
                        
                </>
            )
        }
        )
      }
    </View>
  )
}

export default SearchContent