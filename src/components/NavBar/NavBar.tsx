import classes from "./navBar.module.css";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { useTheme } from "../../hooks/useTheme";
import darkTheme from "../../assets/darkTheme.png";
import lightTheme from "../../assets/lightTheme.png";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const handleChange = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <Navbar className={classes.navBar}>
      <Container>
        <Navbar.Brand href="#home" className={classes.brand}>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className={classes.logo_span}>Air</span>Plane
        </Navbar.Brand>
        <label htmlFor="theme" className={classes.label_theme}>
          <input
            type="checkbox"
            name="theme"
            id="theme"
            className={classes.input_theme}
            checked={theme === "dark"}
            onChange={handleChange}
          />
          <img
            src={theme === "light" ? lightTheme : darkTheme}
            alt={theme === "light" ? "light theme" : "dark theme"}
          />
        </label>
      </Container>
    </Navbar>
  );
};
