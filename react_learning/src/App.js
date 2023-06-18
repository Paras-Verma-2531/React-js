import "./App.css";
import Header from './components/Header'
// here Page is a reatc reusable comp:
export default function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to my Page</h1>
      <ul>
        <li>I love Cricket</li>
        <li>I love Music</li>
        <li>I am a big foodie</li>
      </ul>
    </div>
  );
}
