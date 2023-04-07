export default function Navbar(props){
    return (
        <div className="navbar--container">
            <div className="middle--container">
                <img src={props.img} alt="" className="nav--image"/>
                <span className="nav--p">My Travel Journal</span>
            </div>
        </div>
    )
}