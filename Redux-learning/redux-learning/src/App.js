import "./App.css";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import CreateNotes from "./Components/Notes-App/CreateNotes";
import ListNote from "./Components/Notes-App/ListNote";

function App() {
  return <div className="App">
    {/* <Child1/>
    <Child2/> */}
    <CreateNotes/>
    <ListNote/>
  </div>;
}
export default App;
