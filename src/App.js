import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
function App() {
  const[text,settext]=useState('');
  const [name,setname]=useState('love');
// useeffect->component render hone ke baad jo bhi task karna chahte hai vo useeffect ke andar aayga iss tasko ko hee side effect bolte h 
// yeh ek particular function ke change ko darshata h!! vahi pe usestate value ko darshata hai variable ki  

  // variation one -> har render pe run karega jaise hee koi changes honge vaise hee run karega    
  // useEffect(()=>{
  //   console.log('Ui rendering done ');
  // });

  // variation 2->Ek baar render hoga isme []->empty array bhi as aprameter pass kardenge  
  // useEffect(()=>{
  //   console.log('Ui rendering done ');
  // },[]);

// variation 3->on first render + change in dependency ; yeh tab run karega jab text ki value change hogi;
// useEffect(()=>{
//   console.log('Text changed');
// },[text]);
// variation 4-> use for unmounting(dom se kisi value ko hatana) 
useEffect(()=>{
  // isme line 29 execute hogi(like a cleaning process phele se kuch hai usko hatana phir naya listener use karna ) phele phir 27 line hogi
  console.log('Listener added');
  return ()=>{
    console.log('Listener removed');
  }
},[text]);

  // UseEffect->manage sideeffects
  // sideeffects->kisi bhi copmonent me koi effect daalenge jaise onclick or onchange etc then uss component ko chodke
  // jo bhi changes ho rahe hai unko side effects bolenge ex dom changes or title changes 
  // ek component render hone ke baad useEffect run karna chalu hota hai 
  function changehandler(event){
    console.log(text);
    settext(event.target.value);
  }


  return (
    <div className="App">
    <input type="text" onChange={changehandler}></input>
    </div>
  );
}

export default App;
