import { ImageBackground, StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
// import Carousel from '../node_modules/react-native-snap-carousel';
// import Slider from 'react-rangeslider'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
        }}
        resizeMode="cover"
        style={styles.image}
      >
       <View style={styles.nav}>
       <View style={styles.users}>
          <Image
            style={styles.user}
            source={{
              uri: "https://png.pngitem.com/pimgs/s/80-800194_transparent-users-icon-png-flat-user-icon-png.png",
            }}
          />
          <Text style={styles.text}>level 3</Text>
          <View style={styles.total}>
            <Image
              style={styles.timg}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhS-fA2QO0aP3OwflfNOTl-HXRgx-g0iBJMA&usqp=CAU",
              }}
            />
            <Text style={styles.text}>Total</Text>
          </View>
          <View style={styles.setting}>
            <Image
              style={styles.simg}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1frvU6zPZoxJAaQB5xHkBTq6Zq_5hucUtIw&usqp=CAU",
              }}
            />
            {/* <Text style={styles.text}>s</Text> */}
          </View>
        </View>
       </View>
       <View style={styles.up}>
        <Image style={styles.uimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLRsEtT5G7wAglVpiXRNWkweoQiUxbC1VOA&usqp=CAU"}} />
       </View>
        <View style={styles.middle}>
          <ScrollView  horizontal={true}   showsHorizontalScrollIndicator={false}>
          <View style = {styles.images}>
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVF38kXrbvK2b0P89UqAZljArteCZAwP0VA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEo2vEJQYBOXXtXYSUnAJpwrrcJ41quDHtbw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVF38kXrbvK2b0P89UqAZljArteCZAwP0VA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LXPFbZUwsS7Z444Q1Jz2qmJ4kFPyo_orIw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhKyh84TIFBefeyb0RTXZcxA8dxLJrmxyqA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVF38kXrbvK2b0P89UqAZljArteCZAwP0VA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LXPFbZUwsS7Z444Q1Jz2qmJ4kFPyo_orIw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhKyh84TIFBefeyb0RTXZcxA8dxLJrmxyqA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVF38kXrbvK2b0P89UqAZljArteCZAwP0VA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LXPFbZUwsS7Z444Q1Jz2qmJ4kFPyo_orIw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhKyh84TIFBefeyb0RTXZcxA8dxLJrmxyqA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVF38kXrbvK2b0P89UqAZljArteCZAwP0VA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LXPFbZUwsS7Z444Q1Jz2qmJ4kFPyo_orIw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhKyh84TIFBefeyb0RTXZcxA8dxLJrmxyqA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVF38kXrbvK2b0P89UqAZljArteCZAwP0VA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LXPFbZUwsS7Z444Q1Jz2qmJ4kFPyo_orIw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhKyh84TIFBefeyb0RTXZcxA8dxLJrmxyqA&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEo2vEJQYBOXXtXYSUnAJpwrrcJ41quDHtbw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LXPFbZUwsS7Z444Q1Jz2qmJ4kFPyo_orIw&usqp=CAU"}} />
            <Image style={styles.mimg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhKyh84TIFBefeyb0RTXZcxA8dxLJrmxyqA&usqp=CAU"}} />
            {/* <Text style={styles.text}>middle</Text> */}
          </View>

          </ScrollView>
        </View>
        <View style={styles.footer}>
          <View style={styles.Buttons}>
            <View style={styles.b1}>
              <Text style={styles.text}>⏰ 14 hrs</Text>
              <Button title="Bonus" type="outline" color="green"/>

            </View>
            <View style={styles.b1}>
              <Text style={styles.text} > Ref Code : JC02</Text>
              <Button title="Get 💰 1cr" type="outline" color="green"/>

            </View>
            <View style={styles.b2}>
              <Text style={styles.text} > Get ₹1,20,999 chips</Text>
              <Button title="Facebook" type="outline" color="green"/>

            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width:"100%",
  },
  text: {
    margin: 5,
    color: "green",
  },
  nav:{
    marginTop:0,
    position:'relative'
  },
  users: {
    flexDirection:"row",
    // textAlign:'center'
  },
  user: {
    width: 30,
    borderRadius: 50,
    maxHeight: 30,
  },
  total: {
    flexDirection:"row",
  },
  timg: {
    
    width: 30,
    borderRadius: 50,
    maxHeight: 30,
    // top: 10,
    // left: 10,
  },
  setting: {
    marginStart:600,
    flexDirection:"row",
  },
  simg: {
    // justifyContent: "center",
    // flex: 1,
    width: 30,
    borderRadius: 50,
    maxHeight: 40,
  },
  images:{
    display:'flex',
    flexDirection:'row'
  },
  middle:{
    justifyContent:'center',
    // height:'50%'
    marginTop:30,
    marginBottom:40,
    paddingLeft:100

  },
  mimg:{
    width: 100,
    height:100,
    margin:10,
    borderRadius:20
  },
  up:{
    justifyContent:'center',
  },
  uimg:{
    width: 40,
    height:40,
    marginTop:15,
    // margin:10,
    borderRadius:50
  },
  Buttons:{
    display:'flex',
    flexDirection:'row',
    // display:'flex'
  },
  b1:{
    display:'flex',
    flexDirection:'column',
    margin:10
  },
  b2:{
    left:450,
    display:'flex',
    flexDirection:'column',
    margin:10
  },
  btn:{
    // borderColor:"red",
    // borderWidth:10,
    // color:"red",
    width:'10%',
    height:20
  // borderStyle:
  }
});
