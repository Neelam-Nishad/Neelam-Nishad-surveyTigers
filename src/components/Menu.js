import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <div >
            <Link to="./create">
                <div className="btns"><button className=" btn btn-danger m-3 button1" > Create Survey</button></div>
            </Link>
            <Link to="./published">
                <div className="btns"><button className=" btn btn-danger m-3 button1"> Take Survey</button></div>
            </Link>  
        </div>
    )
}

export default Menu;