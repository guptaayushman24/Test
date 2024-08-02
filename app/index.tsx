import { Text, View,StyleSheet,Image,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import QRCode from 'react-native-qrcode-svg';
export default function Index() {
  return (
    <View style={style.main}
    >

      <View style={style.shape}>
      <Icon name="chevron-down" size={20} color="#000" style={style.icon} />
        <TouchableOpacity >
          <Text style={style.shapetxt}>Share my card</Text>
        </TouchableOpacity>
        
      </View>


      <View style={style.qrcode}>

          
          <QRCode value=" https://www.nexalink.co/" size={200}
        logo={require('../images/image.png')}  // test\images\Screenshot 2024-08-02 170646.png
        logoSize={50}
        logoBackgroundColor='transparent'></QRCode>
      </View>

      <View style={style.bottomdesign}>

        <View style={{flexDirection:'row'}}>
          <Image source={require('../images/one.png')} style={{margin:10}}></Image>
          <TouchableOpacity>
          <Text style={{margin:10,fontSize:20, color:'#797979'}}>Share my card</Text>
          </TouchableOpacity>
          
        </View>

        <View style={{flexDirection:'row'}}>
          <Image source={require('../images/second.png')} style={{margin:10}}></Image>
          <TouchableOpacity>
          <Text style={{margin:10,fontSize:20,color:'#797979'}}>Add card to wallet</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>
          <Image source={require('../images/third.png')} style={{margin:10}}></Image>
          <TouchableOpacity>
          <Text style={{margin:10,fontSize:20,color:'#797979'}}>Add card to home screen</Text>
          </TouchableOpacity>
          
        </View>

        <View style={{flexDirection:'row'}}>
          <Image source={require('../images/fourth.png')} style={{margin:10}}></Image>
          <TouchableOpacity>
          <Text style={{margin:10,fontSize:20,color:'#797979'}}>Create Email Signature</Text>
          </TouchableOpacity>
          
        </View>

        <View style={{flexDirection:'row'}}>
          <Image source={require('../images/fifth.png')} style={{margin:10}}></Image>
          <TouchableOpacity>
          <Text style={{margin:10,fontSize:20,color:'#797979'}}>Create virtual background</Text>
          </TouchableOpacity>
        </View>
        
        <View style={style.shape1}>
          <Image source={require('../images/sixth.png')} style={style.image}></Image>
          <TouchableOpacity>
          <Text style={style.shapetxt1}>Share with AirDrop</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
}
const style=StyleSheet.create({

  main:{
   
    flex: 1,
    marginTop:50,
    
    alignItems: "center",
  },
  shape:{
    backgroundColor:'#ff6e23',
    width:200,
    height:60,
    borderRadius:20

  },
  shapetxt:{
    textAlign:"center",
    marginBottom:20,
    color:'white',
    fontSize:20,
    fontWeight:"bold"
  },
  icon: {
    marginRight: 10,
    marginLeft:10, // space between icon and text,
    color:"white",
  },
 qrcode:{
  marginTop:50
 },
 bottomdesign:{
  marginTop:50,
  marginBottom:20,
  backgroundColor:'#f0f0f0',
  height:250,
  width:400,
  borderWidth:4,
  borderColor:'#f0f0f0'
 },
 shape1: {
  flexDirection: 'row', // Arrange items in a row
  alignItems: 'center', // Vertically center the items
  padding: 10,
  backgroundColor: '#ff6e23', // Example background color
  borderRadius: 20,
  justifyContent:"center",
  width:210,
  marginLeft:80,
  marginTop:50
},
image: {
  width: 21, // Adjust the width of the image
  height: 20, // Adjust the height of the image
  marginRight: 10, // Space between image and text
},
shapetxt1: {
  fontSize: 20,
  color:"white",
  fontWeight:"bold"
  
},
})
