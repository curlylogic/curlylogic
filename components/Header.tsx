import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="cl__primary-header">
      <div className="cl__container">
        <div className="cl__header-wrapper">
          <Logo />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
