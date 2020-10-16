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
        image: require("./../assets/courses/illustrate.png")
      },
      {
        title: 'English Language',
        description:'7.5',
        image: require("./../assets/courses/english.png")
      },
      {
        title: 'Illustration',
        description: '7.0',
        image: require("./../assets/courses/illustrate.png")
      },
      {
        title: 'Quantitative reasoning',
        description:'9.0',
        image: require("./../assets/courses/maths.png")
      },
    ];
    const renderItem = ({item}) => (
        <TouchableOpacity>
        <View style={styles.snapCarouselItem}>
            <Image source={item.image} style={styles.imgslider}/>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{item.title}</Text>
            <Text style={{fontSize:10,fontWeight:"bold"}}>{item.description}</Text>
        </View>
        </TouchableOpacity>
      );

      const carouselData2 = [  
        {
        title: 'Unilag',
        description: '8.6',
        image: require("./../assets/courses/illustrate.png")
      },
      {
        title: 'OAU',
        description:'7.5',
        image: require("./../assets/courses/english.png")
      },
      {
        title: 'UI',
        description: '7.0',
        image: require("./../assets/courses/illustrate.png")
      },
      {
        title: 'UNIPORT',
        description:'9.0',
        image:require("./../assets/courses/maths.png")
      },
    ];
    const renderItem2 = ({item}) => (
        <TouchableOpacity>
        <View style={styles.snapCarouselItem}>
            <Image source={item.image} style={styles.imgslider}/>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{item.title}</Text>
            <Text style={{fontSize:10,fontWeight:"bold"}}>{item.description}</Text>
        </View>
        </TouchableOpacity>
      );
    return (
        <View style={{flex:1, backgroundColor:"#fff"}}>
            <ScrollView>
                {/* header */}
                <View><Text style={{fontSize:30,fontWeight:"bold",fontFamily:"Roboto",marginLeft:25}}>Home Page</Text></View>

                {/* middle1 */}
                <View style={{flex:1, marginBottom:40}}>
                    <TextInput style={{width:"90%",elevation:20,backgroundColor:"#fff", margin:20}} placeholder="search for any course or school"/>
                    
                    <ScrollView>
                        <View style={{justifyContent:"space-evenly",flexDirection:"row",marginBottom:40}}>
                        <TouchableOpacity > 
                                <Image source={require("./../assets/images/diagram.png")} style={styles.imgslider}/>
                                <Text>Category</Text>
                        </TouchableOpacity>

                        <TouchableOpacity > 
                                <Image source={require("./../assets/images/online-education.png")} style={styles.imgslider}/>
                                <Text>Courses</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{justifyContent:"space-evenly",flexDirection:"row"}}>
                        <TouchableOpacity > 
                                <Image source={require("./../assets/images/school.png")} style={styles.imgslider}/>
                                <Text>Schools</Text>
                        </TouchableOpacity>

                        <TouchableOpacity > 
                                <Image source={require("./../assets/images/online-education2.png")} style={styles.imgslider}/>
                                <Text>Free Classes</Text>
                        </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                {/* middle2 */}
                <View style={{flex:1, marginBottom:40,marginLeft:25}}>
                    <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"Roboto",marginBottom:10}}>Recommended Courses</Text>
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
                <View style={{flex:1, marginBottom:60, marginLeft:25}}>
                    <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"Roboto"}}>Schools</Text>
                    <TouchableOpacity>
                        <Animated.View>
                            <View>
                            <Carousel
                                data={carouselData2}
                                renderItem={renderItem2}
                                // sliderWidth={width}
                                // itemWidth={width-56}
                            />
                            </View>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* TAB */}
            <View style={styles.tabs} elevation={20}>
                <View><TouchableOpacity onPress={() => navigation.navigate('Index')}><Image resizeMode="contain" style={styles.icon} source={require('./../assets/tabs/homeIcon.png')}/></TouchableOpacity></View>
                <View><TouchableOpacity onPress={() => navigation.navigate('Dashboard')}><Image resizeMode="contain" style={styles.icon} source={require('./../assets/tabs/interest-rate.png')}/></TouchableOpacity></View>
                <View><TouchableOpacity onPress={() => navigation.navigate('Discover')}><Image resizeMode="contain" style={styles.icon} source={ require('./../assets/tabs/discoverIcon.png')}/></TouchableOpacity></View>
                <View><TouchableOpacity onPress={() => navigation.navigate('Settings')}><Image resizeMode="contain" style={styles.icon} source={ require('./../assets/tabs/settingsIcon.png')}/></TouchableOpacity></View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tabs: {
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        shadowColor: "#FFF",
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
    },
    snapCarouselItem:{
        // height: 100,
        width: width/3,
        flex:1,
      // borderWidth:0.5,
        marginRight:15,
        backgroundColor: "#FFF",
        padding: 16,
        shadowColor: "#FFF",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation:20,
      
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
        width:60,
        height:60,
        borderRadius:5,
        
      },
})
export default Index
