import "./toggle.css";
import { useContext } from "react";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = ()=> {
        theme.dispatch({type: "TOGGLE"});
    }

  return (
    <div className='toggle'>
        <img src={Sun} alt="sun" className="toggle-icon"/>
        <img src={Moon} alt="moon" className="toggle-icon bg"/>
        <button className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0: 25}}></button>
    </div>
  )
}

export default Toggle;