// import React from 'react'
// import Kid from './Kid'



// const App = () => {
//   // pass data from child to parent

//   const data =(value)=>{
//     // document.write('come from parent'+ value)

//   }
//   return (
//     <div>
// <Kid keyData = {data}/>
//     </div>
//   )
// }

// export default App

//end practice child to parent


//next practice form binding
// import React, { useState } from 'react'


// const App = () => {
//     //step 1 create state
//     const [userName, setUserName] = useState('')// [value, set is fuction]
//     const [password, setPassword] = useState('')

//way2 use function
//     const userNameHandler =(e)=>{
//       setUserName(e.target.value)
//     }

//     //   const passwordHandler =(e)=>{};
//     // }
//   return (
//     <div>
//       <form>
//         <p>Username</p>
//         {/* //value come fron value from state line 29 */}
//         <input type="text" value={userName} onChange={userNameHandler}/>
//         <p>Password</p>

//way 1
//         <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//         <input type='submit'/>
//         </form>
//     </div>
//   )
// }


// export default App

import React, { useState } from 'react'
// import App from './App.css'


const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler =(e)=>{
setUserName(e.target.value)
  }

  const mystyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    fontFamily: "Arial",
    width: '40%',
    margin: "auto",
    paddingLeft: "50px",
  
  };

  return (


    <div style={mystyle}>
      <p>Username</p>
      <input type='text' value={userName} onChange={usernameHandler}/>
      <p>password</p>
      <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <input type='submit'/>
    </div>
 
  )
}

export default App