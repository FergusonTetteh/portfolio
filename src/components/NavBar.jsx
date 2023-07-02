const NavBar = () => {
  return (
    <div className="flex justify-start fixed top-0 left-0 right-0 ">
      <ul className="float-right">
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
