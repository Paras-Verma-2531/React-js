import { useState } from "react";
import "./App.css";
import "./Forms And Hooks/News.css"
import UseEffectHook from "./Forms And Hooks/UseEffectHook";
import jokesData from "./Youtube_Learning/jokesData";
import Jokes from "./Youtube_Learning/Jokes";
import NewsApp from "./Forms And Hooks/NewsApp";
import UsersApi from "./Youtube_Learning/UsersApi";
import './Youtube_Learning/ProfileCard.css'
import { Routes,Route } from "react-router-dom";
import Pricing from "./Routing/Pages/Pricing";
import About from './Routing/Pages/About'
import NotFound from './Routing/Pages/NotFound'
import Nav from "./components/Nav";
export default function App() {
  // const[count,setCount]=useState(0);
  // function updateCount(count)
  // {
  //   setCount(count);
  // }
  // **********for the Joke component*************
  const jokesElement=jokesData.map(joke=>
    {
      return <Jokes setup={joke.setup} punchline={joke.punchline}/>
    }
    )
    const arr=[1,2,3,4];
  return (
    <>
      {/* <Nav/>
      <Main/> */}
      {/* <Count/> */}
      {/* <Notes />
      <footer>Made with ❤️ by Paras</footer> */}
      {/* <p>Count in Parent :{count}</p> */}
      {/* passing function as callback to child through which it can update value in parent
      <Child1 updateCountInParent={updateCount}/> */}

      {/* All about Hooks And User Input */}
      {/* <UserForm/> 
      <UseEffectHook/>*/}
      {/***********for the Joke component*************
      {jokesElement*/}
      {/********************for the NewsApp React project********************/}
      {/* <NewsApp/> */}
      {/* **********************for the routing:::************************* */}
       <Nav/>
       <Routes>
         <Route path="/pricing" element={<Pricing/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="*" element={<NotFound/>}/>
       </Routes>
      {/* ******************************** */}
      {/* <UsersApi/> */}
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
