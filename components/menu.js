import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,  
  Dimensions, 
  Animated, 
  TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

export default class Menu extends Component {

 
  state = { 
      fadeAnimStorm: new Animated.Value(0),
      fadeAnimStar: new Animated.Value(0),
      fadeAnimShip: new Animated.Value(0),
      fadeAnimShipX: new Animated.Value(-deviceWidth),
      fadeAnimShipY: new Animated.Value(100),
      fadeAnimDV: new Animated.Value(deviceWidth),
      lastView:0
  }
  


  componentDidMount() {
          this.FadeInST();                
  }

  FadeInST(){
    Animated.timing(                 
      this.state.fadeAnimStorm,            
      {
        toValue: 1,                   
        duration: 400,           
      }
   ).start();
  }

  FadeInShip(){
    Animated.parallel([
      Animated.timing(this.state.fadeAnimShipX, {
            toValue: -230,
            duration: 400
        }),
        Animated.timing(this.state.fadeAnimShipY, {
          toValue: 0,
          duration: 400
      }),  
      Animated.timing(this.state.fadeAnimShip, {
            toValue: 1,
            duration: 400
      })
    ]).start(() => {
        // callback
    });
  }

  FadeInStar(){
    Animated.timing(                 
      this.state.fadeAnimStar,            
      {
        toValue: 1,                   
        duration: 400,           
      }
   ).start();
  }

  FadeInDV(){
    Animated.timing(                 
      this.state.fadeAnimDV,            
      {
        toValue: deviceWidth / 2 - 50,                   
        duration: 200,           
      }
   ).start();
  }


  FadeOffST(){
    Animated.timing(                 
      this.state.fadeAnimStorm,            
      {
        toValue: 0,                   
        duration: 400,           
      }
   ).start();
  }

  FadeOffShip(){
    Animated.parallel([
      Animated.timing(this.state.fadeAnimShipX, {
            toValue:400,
            duration: 800
        }),
        Animated.timing(this.state.fadeAnimShipY, {
          toValue: -400,
          duration: 800
      }),  
      Animated.timing(this.state.fadeAnimShip, {
            toValue: 0,
            duration: 800
      })
    ]).start(() => {
        this.setState({
          fadeAnimShip: new Animated.Value(0),
          fadeAnimShipX: new Animated.Value(-deviceWidth),
          fadeAnimShipY: new Animated.Value(100)
        })
    });
  }

  FadeOffStar(){
    Animated.timing(                 
      this.state.fadeAnimStar,            
      {
        toValue: 0,                   
        duration: 400,           
      }
   ).start();
  }

  FadeOffDV(){
    Animated.timing(                 
      this.state.fadeAnimDV,            
      {
        toValue: deviceWidth,                   
        duration: 100,           
      }
   ).start();
  }

  render() {

    return (
      
      <Swiper
        onIndexChanged = {(index) => {
          //Calling the right animation depends on each view entry//
          switch(index) {
              case 0:
                if(this.state.lastView != 0){
                  this.setState({lastView:0})
                }
                this.FadeInST();
                this.FadeOffShip();
                this.FadeOffStar();
                break;
              case 1:
                this.setState({lastView:1});
                this.FadeInShip();
                this.FadeOffST();
                this.FadeOffStar();
                break;
              case 2:
                this.FadeInStar();
                  if(this.state.lastView != 0){
                    this.FadeOffST();
                  }
                this.FadeOffShip();
                this.FadeOffDV();
                break;
              case 3:
                this.setState({lastView:3});
                this.FadeInDV();
                this.FadeOffStar();
                break;
              default:
                
            }
        }} 
        style={styles.wrapper} 
        showsButtons={false} 
        activeDotColor="#000"
        //loocking loop Swiper function to make animations easily to do
        loop={false}
        >

{/* STORM TRUPER VIEW */}
        <Animated.View
          style={{
            opacity: this.state.fadeAnimStorm,
            flex: 1,
            backgroundColor: '#FFF',
           
            
          }}
        >
          <View style={{flex:1}}></View>
          <View style={{
            flex:1,  
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#FFF'}}>
            <TouchableOpacity style={styles.btnMenu} onPress={()=> {
                
                }}>
              <Text style={styles.btnTxtMenu}>CHARACTERS</Text>
            </TouchableOpacity>
            
          </View>

          <Animated.Image 
              style={{
                width:deviceHeight / 2.8, 
                height:(deviceHeight / 2.8) + ((deviceHeight / 2.8) * .40), 
                position:'absolute',
                zIndex:2, 
                top:70,
                right: -80,
                opacity: this.state.fadeAnimStorm}}
              source={require('./src/storm2.png')}
          />
        </Animated.View>
{/* END STORM TRUPER VIEW */}

{/* STARSHIPS VIEW */}
        
        <Animated.View style={{
            opacity: this.state.fadeAnimShip,
            flex: 1,
            backgroundColor: '#FFF',
          
    
          }}>
          <View style={{
            flex:1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF'}}>
            <TouchableOpacity style={styles.btnMenu}>
              <Text style={styles.btnTxtMenu}>STARSHIPS</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
            
          </View>
          <Animated.Image 
              style={{
                width:(deviceHeight / 2) + ((deviceHeight / 2) * .66), 
                height:deviceHeight / 2, 
                position:'absolute', 
                right: this.state.fadeAnimShipX,
                bottom: this.state.fadeAnimShipY,
                opacity: this.state.fadeAnimShip}}
              source={require('./src/ship.png')}
          />
        </Animated.View>
{/* END STARSHIPS VIEW */}

{/* PLANETS VIEW */}
        <Animated.View
          style={{
            opacity: this.state.fadeAnimStar,
            flex: 1,
            backgroundColor: '#FFF',
          }}
        >  

        <View style={{flex:1}}></View>
          <View style={{
            flex:1,  
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#FFF'}}>
            <TouchableOpacity style={styles.btnMenu}>
              <Text style={styles.btnTxtMenu}>PLANETS</Text>
            </TouchableOpacity>
          </View>
          <Animated.Image 
              style={{
                width:deviceHeight / 2, 
                height:deviceHeight / 2, 
                position:'absolute', 
                top: 20,
                left: -50,
                opacity: this.state.fadeAnimStar}}
              source={require('./src/star2.png')}
              />
          </Animated.View>
{/* END PLANETS VIEW */}


{/* DARTH VADER VIEW */}
        <Animated.View
          style={{
            opacity: 1,
            flex: 1,
            backgroundColor: '#FFF',
            flexDirection:'row'
          }}
        > 
        <View style={{
            flex:1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#FFF',}}>
            <TouchableOpacity style={styles.btnMenu}>
              <Text style={styles.btnTxtMenu}>FILMS</Text>
            </TouchableOpacity>
        </View>
          <View style={{flex:1}}></View>
          <Animated.Image 
              style={{
                width:deviceWidth + (deviceWidth * .25), 
                height:deviceHeight + (deviceHeight * .10), 
                position:'absolute', 
                top: -5,
                left: this.state.fadeAnimDV,
                opacity: 1}}
              source={require('./src/dv2.png')}
              />
          </Animated.View>
{/* END DARTH VADER VIEW */}

      </Swiper>
        
 
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
 
    backgroundColor:'#FFF'
  },
  btnMenu:{
    borderWidth:1,
    borderColor:'#FFB2B3',
    padding:25
    
  },
  btnTxtMenu:{
    fontSize:25,
    color:'#999',
    letterSpacing:4
    
  }
});
