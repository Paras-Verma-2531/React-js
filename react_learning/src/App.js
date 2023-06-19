import { useState } from "react";
import "./App.css";
import Count from "./components/Counter";
import Notes from "./components/Notes";
import Child1 from "./components/Passing_Data_from_ch_par/Child1";
// import Header from './components/Header'
export default function App() {
  const[count,setCount]=useState(0);
  function updateCount(count)
  {
    setCount(count);
  }
  return (
    <>
      {/* <Nav/>
      <Main/> */}
      {/* <Count/> */}
      {/* <Notes />
      <footer>Made with ❤️ by Paras</footer> */}
      <p>Count in Parent :{count}</p>
      {/* passing function as callback to child through which it can update value in parent */}
      <Child1 updateCountInParent={updateCount}/>
    </>
  );
}
// here Page is a reatc reusable comp:
// export default function App() {
//   return (
//     <div>
//       <Header />
//       <h1>Welcome to my Page</h1>
//       <ul>
//         <li>I love Cricket</li>
//         <li>I love Music</li>
//         <li>I am a big foodie</li>
//       </ul>
//     </div>
//   );
// }
// for the react site info project:
