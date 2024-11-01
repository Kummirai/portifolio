const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="code.png" alt="" />
        <h1>
          <span>Milton </span>Kumirai
        </h1>
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>
    </header>
  );
};

export default Header;
