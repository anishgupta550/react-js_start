import React from 'react';
import Count from './counter';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Test from './Test'
// import Input from './Try';
// import Dark from './Dark';
// import Next from './New';
// import "./style.css";


// function App() {
//   return (
//     <div>
//       <Input />
//       <Dark />
//     </div>
//   )
// }

// export default App


// const App = ({name,lname}) => {
//     return (
//         <>
//             <h1>Welcome App</h1>
//             <p>hello I'm {name} {lname}</p>
//         </>
//     )
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             value: 'test'
//         }

// }
// change() {
//     this.setState(
//         {
//             value : 'Test 1'
//         }
//     )
// }
//     render() {

//         return(
//             <>
//             <h1>Hi ! {this.state.value}</h1>
//             <button onClick={()=> this.change()}>Click</button>
// </>
//         )


//     }
// }




// const App = () => {
//     return (

//            React.createElement('h1',{'name':'abhishek'},React.createElement('p'))

//     )
// }


// const App = () => {
//     return (
//         <>
//             <Test name="Pushkar"/>
//             <Test name='Shakitman'/>
//         </>
//     )
// }

// export default App
// export {App}



// const App = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App


// function App(props){
//     // console.log(typeof props)
//     return(
//         <>
//             <h1>hello ! </h1>
//         <p>{props.name}</p>
//         </>
//     )
// }



// class App extends React.Component {
//     constructor(props) {
//         super(props)+
//         this.state = {
//             myBool: true
//         }
//     }

//     change() {
//         this.setState(
//             {
//                myBool:!this.state.myBool
//             }
//         )
//         // console.log(this.state.myBool)
//     } 
//     render() {
//         return (
//             <>
//                 {this.state.myBool?(<div>
//                     <h1>hello ! </h1>
//                     <p>{this.props.name}</p>
//                 </div>):""}

//                 <button onClick={()=> this.change()}>Show</button>

//             </>
//         )

//     }

// }
// export default App


// Router 

// let App = () => {
//   return (
//     <Router>
//       <>
//         <ul>
//           <li><Link to="/Test"> Home</Link ></li>
//           <li><Link to="/Input"> About</Link ></li>
//           <li><Link to="/Dark"> Contact</Link ></li>
//         </ul>
//         {/* <div>
//         <button><Link to="/Next">next page</Link></button>
//         </div> */}
//       </>
//       <Routes>
//         <Route exact path="/Test" element={<Test name="React JS"/>}></Route>
//         <Route exact path="/input" element={<Input />}></Route>
//         <Route exact path="/Dark" element={<Dark />}></Route>
//           <Route exact path='/Next' element={<Next />}></Route>
//       </Routes>

//     </Router>


//   )
// }


// export default App


// function my(props){
//   return(
//     <>
//     <h1>My name is pushkar {props.surname}{props.number}</h1>
//     </>
//   )
// }

// export default my;


// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             fname : "Anish",
//             Lname : "Gupta",
//             Email : "anish@gmail.com"
//         };
//     }

    // changerVal = () => {
    //     this.setState({Email:"a@gmail.com"});
    //    }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({Email : "sdfasd@gmail.com"});
    //     }, 1000);
    // }

    // componentDidUpdate(){
    //     document.getElementById("n").innerHTML = this.state.Email;
    // }
    // shouldComponentUpdate(){
        // return false;
        // return true;
    // }


//     render(){
//         return(
//             <>
//             <h1>my name is {this.state.fname} {this.state.Lname} and my email is {this.state.Email} and number is {this.props.number} </h1>
//             {/* <button onClick={this.changerVal}>Change</button> */}
//             <div id="n"></div>
//             </>
//         )
//     }
// }

// export default App

const App = () =>{
    return(
        <>
        <Count />
        </>
    )
}

export default App