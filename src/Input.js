// import React from "react";

// const Inp = () => {
//     const[value,setValue] = React.useState('');
//     function typing(event){
//         setValue(event.target.value);
//     }

//     return (
//         <>
//             <form action="">
//                 <input type="text" id="" onChange={typing}/>
//                 {/* <input type="submit" value="submit" /> */}
//             </form>
//             <h1>{value}</h1>
//         </>
//     )
// }

// export default Inp

// import React from 'react'

// class Input extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             value : ''
//         };
//         this.typing = this.typing.bind(this);
//     }
    
//     typing(event){
//         this.setState({value : event.target.value});
//     }

//     render() {
//         return (
//             <div>
//                 <form action="">
//                     <input type="text" value={this.state.value} onChange={this.typing} />
//                     {/* <input type="submit" value="submit" /> */}
//                 </form>
//                 <h1>{this.state.value}</h1>
//             </div>
//         )
//     }
// }

// export default Input


// import React from 'react'

// const Input = () => {
//     function get(){
//         let get_value = document.getElementById('get').value;
//         document.getElementById('show').innerHTML = get_value;

//     }
//   return (
//     <div>
//       <form action="" onSubmit={get}>
//         <input type="text" id='get' />
//         <input type="submit"  />
//       </form>
//       <h1 id="show"></h1>
//     </div>
//   )
// }

// export default Input
