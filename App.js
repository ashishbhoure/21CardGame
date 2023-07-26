
import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [bet,setBet] = useState('0')
  const [total,setTotal] = useState(1000);
  const [block1,setBlock1] = useState(true);
  const [block2,setBlock2] = useState(false);
  const [block3,setBlock3] = useState(false);
  const [hitCount,setHitCount] = useState('0');
  const [standCount,setStandCount] = useState(false);
  const [img1,setImg1] = useState("http://192.168.1.2/backside.png")
  const [img2,setImg2] = useState("http://192.168.1.2/backside.png")
  const [img3,setImg3] = useState("http://192.168.1.2/backside.png")
  const [img4,setImg4] = useState("http://192.168.1.2/backside.png")
  const [img5,setImg5] = useState("http://192.168.1.2/backside.png")
  const [img6,setImg6] = useState("http://192.168.1.2/backside.png")
  const [img7,setImg7] = useState("http://192.168.1.2/backside.png")
  const [img8,setImg8] = useState("http://192.168.1.2/backside.png")
  const [img9,setImg9] = useState("http://192.168.1.2/backside.png")
  const [img10,setImg10] = useState("http://192.168.1.2/backside.png")
  const [userScoure,setUserScoure] = useState(0);
  const [comScoure,setComScoure] = useState(0);
  const [img,setImg] = useState(false)

  // const cards = {
  //   "_2": require('./assets/images/CARDS/2H.png'),
  //   "_3": require('./assets/images/CARDS/3H.png'),
  //   "_4": require('./assets/images/CARDS/4H.png'),
  //   "_5": require('./assets/images/CARDS/5H.png'),
  //   "_6": require('./assets/images/CARDS/6H.png'),
  //   "_7": require('./assets/images/CARDS/7H.png'),
  //   "_8": require('./assets/images/CARDS/8H.png'),
  //   "_9": require('./assets/images/CARDS/9H.png'),
  //   "_10": require('./assets/images/CARDS/10H.png'),
  //   "_11": require('./assets/images/CARDS/11H.png'),
  // }
  
  const placeBet =(e) =>{
    let total1 = total-bet;
    setTotal(total1);
    setBlock1(false);
    setBlock2(true);
    let random=[];
    let card = [];
    for(let i=0;i<4;i++){
      let view = ['C','D','H','S']
      let r = Math.floor(Math.random() * 9) +2 ;
      let v = Math.floor(Math.random() * view.length);
      random.push(r)
      card.push(view[v])
    }

    // let x = [cards._2,cards._3,cards._4,cards._5,cards._6,cards._7,cards._8,cards._9,cards._10,cards._11];

    
    // setImg1(x[random[0]])
    // setImg2(x[random[1]])
    // setImg6(x[random[2]])
    // setImg7(x[random[3]])

    setImg1('http://192.168.1.2/CARDS/'+random[0]+card[0]+'.png')
    setImg2('http://192.168.1.2/CARDS/'+random[1]+card[1]+'.png')
    setImg6('http://192.168.1.2/CARDS/'+random[2]+card[2]+'.png')
    setImg7('http://192.168.1.2/CARDS/'+random[3]+card[3]+'.png')

    setUserScoure(random[2]+random[3])
    setComScoure(random[0]+random[1])
    if(userScoure > 21){
      alert('You lost the game')
    }
  }

  const hit =()=>{
    let random=[];
    let card = [];
    for(let i=0;i<3;i++){
      let view = ['C','D','H','S']
      let r = Math.floor(Math.random() * 9) + 2 ;
      // let r = Math.floor(Math.random() * 10);
      let v = Math.floor(Math.random() * view.length);
      random.push(r)
      card.push(view[v])
    }
    // let x = [cards._2,cards._3,cards._4,cards._5,cards._6,cards._7,cards._8,cards._9,cards._10,cards._11];
    if(userScoure === 21){
      alert('You Won the game')
      setBlock3(true);
      setBlock2(false);
    }
    else if (userScoure > 21){
      alert('You lost the game')
      setStandCount(true)
      setBlock3(true);
      setBlock2(false);
    }
    if(hitCount === '0'){
    // setImg8(x[random[0]])
    setImg8('http://192.168.1.2/CARDS/'+random[0]+card[0]+'.png')
      setHitCount('1')
      let tmpLatestScore = userScoure+random[0];
      setUserScoure(tmpLatestScore)
      if(tmpLatestScore === 21){
        alert('You Won the game')
        setBlock3(true);
        setBlock2(false);
      }
      else if (tmpLatestScore > 21){
        alert('You lost the game')
        setBlock3(true);
        setBlock2(false);
        setStandCount(true)
      }
    }else if(hitCount === '1'){
    // setImg9(x[random[1]])
    setImg9('http://192.168.1.2/CARDS/'+random[1]+card[1]+'//.png')
      setHitCount('2')
      let tmpLatestScore = userScoure+random[1];
      setUserScoure(tmpLatestScore)
      if(tmpLatestScore === 21){
        alert('You Won the game')
        setBlock3(true);
        setBlock2(false);
      }
      else if (tmpLatestScore > 21){
        alert('You lost the game')
        setBlock3(true);
        setBlock2(false);
        setStandCount(true)
      }
    }else{
    // setImg10(x[random[2]])
    setImg10('http://192.168.1.2/CARDS/'+random[2]+card[2]+'.png')
      setHitCount('0')
      let tmpLatestScore = userScoure+random[2];
      setUserScoure(tmpLatestScore);
      if(tmpLatestScore === 21){
        alert('You Won the game')
        setBlock3(true);
        setBlock2(false);
      }
      else if (tmpLatestScore > 21){
        alert('You lost the game')
        setBlock3(true);
        setBlock2(false);
        setStandCount(true)
      }
    }
  }

  const stand =()=>{
    let random=[];
    let card=[];
    setStandCount(true)
    for(let i=0;i<3;i++){
      let view = ['C','D','H','S']
      // let r = Math.floor(Math.random() * 10);
      let r = Math.floor(Math.random() * 9) + 2 ;
      let v = Math.floor(Math.random() * view.length);
      random.push(r)
      card.push(view[v])
    }   
    // let x = [cards._2,cards._3,cards._4,cards._5,cards._6,cards._7,cards._8,cards._9,cards._10,cards._11];
    setTimeout(()=>{
      let tmpComScoure = comScoure;
      if(tmpComScoure > 21){
        alert('Computer lost the game 🍒');
      }else if(tmpComScoure === 21){
        alert('Computer win the game 💰')
      }else if(tmpComScoure < 21 && tmpComScoure > userScoure){
        alert('Computer win the game 💰')
      }else{
        tmpComScoure = tmpComScoure+random[0];
        setComScoure(tmpComScoure);   
      // setImg3(x[random[0]])
      setImg3('http://192.168.1.2/CARDS/'+random[0]+card[0]+'.png')

        if(tmpComScoure > 21){
          alert('Computer lost the game 🍒');
        }else if(tmpComScoure === 21){
          alert('Computer win the game 💰')
        }else if(tmpComScoure < 21 && tmpComScoure > userScoure){
          alert('Computer win the game 💰')
        }else{
          tmpComScoure = tmpComScoure+random[1];
          setComScoure(tmpComScoure); 
      // setImg4(x[random[1]])
      setImg4('http://192.168.1.2/CARDS/'+random[1]+card[1]+'.png');

          if(tmpComScoure > 21){
            alert('Computer lost the game 🍒');
          }else if(tmpComScoure === 21){
            alert('Computer win the game 💰')
          }else if(tmpComScoure < 21 && tmpComScoure > userScoure){
            alert('Computer win the game 💰')
          }else {
            tmpComScoure = tmpComScoure+random[2];
            setComScoure(tmpComScoure); 
            // setImg5(x[random[2]])
            setImg5('http://192.168.1.2/CARDS/'+random[2]+card[2]+'.png');
            if(tmpComScoure > 21){
              alert('Computer lost the game 🍒');
            }else if(tmpComScoure === 21){
              alert('Computer win the game 💰')
            }else if(tmpComScoure < 21 && tmpComScoure > userScoure){
              alert('Computer win the game 💰')
            }else {
            alert('Match is draw')
          }
        }
        }
      }
      setBlock3(true);
      setBlock2(false);
    },2000)
  }
  
  const reset =()=>{
    setComScoure(0);
    setHitCount('0');
    setUserScoure(0);
    setBlock1(true);
    setBlock3(false);
    setStandCount(false);
    setBet("0")
    setImg1("http://192.168.1.2/backside.png")
    setImg2("http://192.168.1.2/backside.png")
    setImg3("http://192.168.1.2/backside.png")
    setImg4("http://192.168.1.2/backside.png")
    setImg5("http://192.168.1.2/backside.png")
    setImg6("http://192.168.1.2/backside.png")
    setImg7("http://192.168.1.2/backside.png")
    setImg8("http://192.168.1.2/backside.png")
    setImg9("http://192.168.1.2/backside.png")
    setImg10("http://192.168.1.2/backside.png")
  }

  return (

    <View style={styles.container}>
      <ImageBackground style={{width:"100%",height:"100%",alignItems:'center',justifyContent:'center'}} source={require('./assets/images/bg.jpg')} >
        <View style={{position:'absolute',top:'3%',left:0}}>
          <Image style={{width:350,height:250}} source={require('./assets/images/topImage.png')} />
          {/* <Image style={{width:200,height:100}} source={require('./assets/images/pngaaa.com-100617.png')} /> */}
        </View>
      <View style={{flexDirection:'row',top:-30}}>
      <Text style={{color:'white'}}>Total : </Text>
      <Text style={{color:'white'}}>{total}</Text>
      </View>
      <View style={{zIndex:0, backgroundColor:'#4A6B42',borderRadius:20,padding:20,top:-20}}>
      <View style={{flexDirection:'row',textAlign:'left',width:'80%'}}>
      <Text style={{color:'white',textAlign:'left',margin:5}}>DEALER :</Text>
      <Text style={{color:'white',textAlign:'left',margin:5}}>{comScoure}</Text>
      </View>
      <View style={{flexDirection:'row',zIndex:2}}>
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img1}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img2}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img3}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img4}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img5}`}} />
      </View>
      <View style={{flexDirection:'row',textAlign:'left',width:'80%'}}>
      <Text style={{color:'white',textAlign:'left',margin:5}}>YOU :</Text>
      <Text style={{color:'white',textAlign:'left',margin:5}}>{userScoure}</Text>
      </View>
      <View style={{flexDirection:'row',zIndex:2}}>
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img6}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img7}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img8}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img9}`}} />
        <Image style={{width:55,height:80,margin:3}} source={{'uri':`${img10}`}} />
      </View>
      </View>
      <Image style={{width:"50%",position:'absolute',left:'32.5%',bottom:"15%",height:'18%',zIndex:1}} source={require('./assets/images/vector-pop-art-illustration-sexy-girl-with-gift-box-hand_1441-606-removebg-preview.png')} />

      <View style={{position:'absolute', bottom:50, width:'90%',display:block3==true?'flex':'none'}}>
        <View style={{margin:3}}>
          <Button style={{}} title='Play again' onPress={reset} ></Button>
        </View> 
      </View>
      <View style={{ position:'absolute',bottom:45, width:'90%',display:block2==true?'flex':'none'}}>
        <View style={{margin:3}}>
          <Button disabled={standCount} style={{}} title='Hit' onPress={hit} ></Button>
        </View>
        <View style={{margin:3}}>
          <Button style={{}} title='Stand' onPress={stand} ></Button>
        </View>  
      </View>

      <View style={{position:'absolute',bottom:10,width:'90%',display:block1==true?'flex':'none'}}>
      <View style={{flexDirection:'row'}}>
        <View style={{width:'23.85%',margin:2}}>
        <Button style={{}} onPress={()=>setBet(20)} title='min'></Button>
        </View>
        <View style={{width:'23.85%',margin:2}}>
        <Button style={{}} onPress={()=>setBet(bet*2)} title='2x'></Button>
        </View>
        <View style={{width:'23.85%',margin:2}}>
        <Button style={{}} onPress={()=>setBet(bet/2)} title='x/2'></Button>
        </View>
        <View style={{width:'23.85%',margin:2}}>
        <Button style={{}} onPress={()=>setBet(500)} title='max'></Button>
        </View>
      </View>
      <View style={{marginBottom:10,marginTop:5}}>
           <TextInput value={bet+''} onFocus={()=>setImg(true)} onChangeText={e=>setBet(e)} style={{borderBottomWidth:2,borderBottomColor:'red',color:'white',height:30}} placeholder='Entert Stack Amount' placeholderTextColor='grey' keyboardType='numeric'></TextInput>
      </View>
      <Button disabled={bet >=20?false:true} style={{width:'100%',height:100}} title='place bet' onPress={(e)=>placeBet(e)} ></Button>
      </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
