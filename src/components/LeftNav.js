
import { Link } from "react-router-dom";

function LeftNav() {

    return (

        <div>
            <div className="leftBorder">
                <div><Link to="/main">
                    <button class="submitbutton">My Portal</button>
                    </Link>
                </div>
                <div >
                    <Link to="/newform">
                        <button class="submitbutton">Create new form</button></Link>
                </div>
                <div><Link to="/retrieveprevious"><button class="submitbutton">Retrieve previous</button>
                </Link>
                </div>
            </div>
        </div>

    );
}

export default LeftNav;
