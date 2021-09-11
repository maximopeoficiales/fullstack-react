import { NavLink } from "react-router-dom";

interface MyProps {}
const defaultProps = {};
const Navbar = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink activeClassName="active" to="/" className="px-3 py-2 navbar-brand">
        React Full Stack
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              to="/averageAge"
              className="px-3 py-2 nav-link"
            >
              Average Age
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              to="/dashboard"
              className="px-3 py-2 nav-link"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
