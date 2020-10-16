import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    View,
    Text,
    Dimensions,
    TextInput,
    Animated,
  } from 'react-native';
  import { ScrollView } from "react-native-gesture-handler";
  import {getStatusBarHeight} from 'react-native-status-bar-height';
  import Carousel from "react-native-sideswipe";

  const { width, height} = Dimensions.get('window');

function Index({navigation}) {

    const carouselData = [  
        {
        title: 'Morning Textbook',
        description: '8.6',
        image:"./../assets/courses/illustrate.png"
      },
      {
        title: 'English Language',
        description:'7.5',
        image: "./../assets/courses/english.png"
      },
      {
        title: 'Illustration',
        description: '7.0',
        image:"./../assets/courses/illustrate.png"
      },
      {
        title: 'Quantitative reasoning',
        description:'9.0',
        image:"./../assets/courses/maths.png"
      },
    ];
    const renderItem = ({item}) => (
        <TouchableOpacity>
        <View style={styles.snapCarouselItem}>
            <Image source={item.image} style={styles.imgslider}/>
            <Text style={{fontSize:30,fontWeight:"bold"}}>{item.title}</Text>
            <Text style={{fontSize:25,fontWeight:"bold"}}>{item.description}</Text>
        </View>
        </TouchableOpacity>
      );
    return (
        <View style={{flex:1}}>
            <ScrollView>
                {/* header */}
                <View><Text></Text></View>

                {/* middle1 */}
                <View>
                    <TextInput placeholder="search"/>
                    
                    <ScrollView>
                        <TouchableOpacity style={styles.snapCarouselItem}> 
                                <Image source={require("./../assets/images/diagram.png")} style={styles.imgslider}/>
                                <Text>Category</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.snapCarouselItem}> 
                                <Image source={require("./../assets/images/online-education.png")} style={styles.imgslider}/>
                                <Text>Courses</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <ScrollView>
                        <TouchableOpacity style={styles.snapCarouselItem}> 
                                <Image source={require("./../assets/images/school.png")} style={styles.imgslider}/>
                                <Text>Schools</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.snapCarouselItem}> 
                                <Image source={require("./../assets/images/classes.png")} style={styles.imgslider}/>
                                <Text>Free Classes</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* middle2 */}
                <View>
                    <Text>Recommended Courses</Text>
                    <TouchableOpacity>
                        <Animated.View>
                            <View>
                            <Carousel
                                data={carouselData}
                                renderItem={renderItem}
                                // sliderWidth={width}
                                // itemWidth={width-56}
                            />
                            </View>
                        </Animated.View>
                    </TouchableOpacity>
                </View>


                {/* middle3 */}
                <View>
                    <Text>Recommended Schools</Text>
                    <TouchableOpacity>
                        <Animated.View>
                            <View>
                            <Carousel
                                data={carouselData}
                                renderItem={renderItem}
                                // sliderWidth={width}
                                // itemWidth={width-56}
                            />
                            </View>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* TAB */}
            {/* <View style={styles.tabs} elevation={20}>
                <View><TouchableOpacity onPress={() => navigation.navigate('Index')}><Image resizeMode="contain" style={styles.icon} source={require('./../assets/tabs/homeIcon.png')}/></TouchableOpacity></View>
                <View><TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Image resizeMode="contain" style={styles.icon} source={require('./../assets/tabs/interest-rate.png')}/></TouchableOpacity></View>
                <View><TouchableOpacity onPress={() => navigation.navigate('Discover')}><Image resizeMode="contain" style={styles.icon} source={ require('./../assets/tabs/discoverIcon.png')}/></TouchableOpacity></View>
                <View><TouchableOpacity onPress={() => navigation.navigate('Settings')}><Image resizeMode="contain" style={styles.icon} source={ require('./../assets/tabs/settingsIcon.png')}/></TouchableOpacity></View>

            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    tabs: {
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation:20,
        width: '100%',
        justifyContent:'space-between',
        flexDirection:'row',
        position: 'absolute',
        bottom:0,
        padding:15,
        paddingHorizontal:30,
        backgroundColor:'#FFF',
        shadowColor: '#00A82D',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
    },
    snapCarouselItem:{
        height: 100,
        width: 100,
        flex:1,
      // borderWidth:0.5,
        backgroundColor: "#FFF",
        padding: 16,
      
      marginTop:15
    },
    snapCarousel: {
        // backgroundColor: "blue",
        paddingBottom: 16,
        paddingTop: 8 + getStatusBarHeight(),
      },
    icon: {
        width: 25, 
        height:25,
    },
    imgslider:{
        width:'100%',
        height:100,
        borderRadius:5,
        
      },
})
export default Index
