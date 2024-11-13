import './Navbar.css';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-title">AMP app</h1>
        <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
