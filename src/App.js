import About from "./components/About/About";
import { useContext } from "react";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import ProjectList from "./components/ProjectList/ProjectList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";
import Header from  "./components/Header/Header";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222": 'white', color: darkMode && 'white'}}>
      <Header />
      <Toggle />
      <Intro />
      <About />
      <ProjectList />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
