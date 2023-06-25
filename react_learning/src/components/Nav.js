// reusable component for the navbar ----> Routing ::
import {Link} from 'react-router-dom'
export default function Nav() {
    return (
        <div className="nav">
            <div className="image">
                <img src="https://via.placeholder.com/200"alt=""/>
            </div>
            <ul>
                <li><Link to="/About">About</Link></li>
            </ul>
        </div>
    );
};
