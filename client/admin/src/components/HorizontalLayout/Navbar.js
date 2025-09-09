import React, { Component } from "react";
import { Collapse, Container } from "reactstrap";
import { Link } from "react-router-dom";
import withRouter from "../Common/withRouter";
import classname from "classnames";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userState: false,
      vehicleState: false,
      feesState: false,
    };
    this.dropdownRefs = {
      user: React.createRef(),
      vehicle: React.createRef(),
      fees: React.createRef(),
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    // Close dropdowns if click outside
    Object.keys(this.dropdownRefs).forEach((key) => {
      if (
        this.dropdownRefs[key].current &&
        !this.dropdownRefs[key].current.contains(event.target)
      ) {
        if (this.state[`${key}State`]) {
          this.setState({ [`${key}State`]: false });
        }
      }
    });
  };

  handleDropdown = (dropdown) => {
    // Close other dropdowns, toggle this one
    this.setState((prev) => ({
      userState: dropdown === "user" ? !prev.userState : false,
      vehicleState: dropdown === "vehicle" ? !prev.vehicleState : false,
      feesState: dropdown === "fees" ? !prev.feesState : false,
    }));
  };

  handleDropdownItemClick = () => {
    // Close all dropdowns after click
    this.setState({ userState: false, vehicleState: false, feesState: false });
  };

  isActive = (path) => {
    return this.props.router.location.pathname === path;
  };

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <Container fluid>
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav align-items-center" id="navigation">
                  {/* Logo link */}
                  <li className="nav-item me-3">
                    <Link
                      className="navbar-brand d-flex align-items-center"
                      to="/dashboard"
                    >
                      <i className="ri-dashboard-line me-2"></i>
                      <span>{this.props.t("Dashboard")}</span>
                    </Link>
                  </li>

                  {/* User Management */}
                  <li
                    className={classname("nav-item dropdown", {
                      show: this.state.userState,
                    })}
                    ref={this.dropdownRefs.user}
                  >
                    <Link
                      className={classname(
                        "nav-link dropdown-toggle arrow-none",
                        { active: this.state.userState }
                      )}
                      to="#"
                      id="topnav-user"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={this.state.userState}
                      onClick={(e) => {
                        e.preventDefault();
                        this.handleDropdown("user");
                      }}
                    >
                      <i className="ri-user-line me-2"></i>
                      {this.props.t("User Management")}{" "}
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.userState,
                      })}
                      aria-labelledby="topnav-user"
                    >
                      <Link
                        to="/users"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Users")}
                      </Link>
                      <Link
                        to="/roles"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Roles")}
                      </Link>
                    </div>
                  </li>

                  {/* Branches */}
                  <li className="nav-item">
                    <Link
                      className={classname("nav-link", {
                        active: this.isActive("/branches"),
                      })}
                      to="/branches"
                    >
                      <i className="ri-building-line me-2"></i>{" "}
                      {this.props.t("Branches")}
                    </Link>
                  </li>

                  {/* Owners */}
                  <li className="nav-item">
                    <Link
                      className={classname("nav-link", {
                        active: this.isActive("/owners"),
                      })}
                      to="/owners"
                    >
                      <i className="ri-account-box-line me-2"></i>{" "}
                      {this.props.t("Owners")}
                    </Link>
                  </li>

                  {/* Vehicles Management */}
                  <li
                    className={classname("nav-item dropdown", {
                      show: this.state.vehicleState,
                    })}
                    ref={this.dropdownRefs.vehicle}
                  >
                    <Link
                      className={classname(
                        "nav-link dropdown-toggle arrow-none",
                        { active: this.state.vehicleState }
                      )}
                      to="#"
                      id="topnav-vehicles"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={this.state.vehicleState}
                      onClick={(e) => {
                        e.preventDefault();
                        this.handleDropdown("vehicle");
                      }}
                    >
                      <i className="ri-car-fill me-2"></i>
                      {this.props.t("Vehicles Management")}{" "}
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.vehicleState,
                      })}
                      aria-labelledby="topnav-vehicles"
                    >
                      <Link
                        to="/vehicleModels"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Vehicle Models")}
                      </Link>
                      <Link
                        to="/vehicleMakes"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Vehicle Manufacturers")}
                      </Link>
                      <Link
                        to="/vehiclesList"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Vehicles")}
                      </Link>
                      <Link
                        to="/registrationsList"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Registrations")}
                      </Link>
                    </div>
                  </li>

                  {/* Fees & Payments */}
                  <li
                    className={classname("nav-item dropdown", {
                      show: this.state.feesState,
                    })}
                    ref={this.dropdownRefs.fees}
                  >
                    <Link
                      className={classname(
                        "nav-link dropdown-toggle arrow-none",
                        { active: this.state.feesState }
                      )}
                      to="#"
                      id="topnav-fees"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={this.state.feesState}
                      onClick={(e) => {
                        e.preventDefault();
                        this.handleDropdown("fees");
                      }}
                    >
                      <i className="ri-money-dollar-box-fill me-2"></i>
                      {this.props.t("Fees & Payments")}{" "}
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.feesState,
                      })}
                      aria-labelledby="topnav-fees"
                    >
                      <Link
                        to="/registrationFees"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Registration Fees")}
                      </Link>
                      <Link
                        to="/paymentMethods"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Payment Methods")}
                      </Link>
                      <Link
                        to="/paymentAccounts"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Payment Accounts")}
                      </Link>
                      <Link
                        to="/charges"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Charges List")}
                      </Link>
                      <Link
                        to="/payments"
                        className="dropdown-item"
                        onClick={this.handleDropdownItemClick}
                      >
                        {this.props.t("Payments List")}
                      </Link>
                    </div>
                  </li>
                </ul>
              </Collapse>
            </nav>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { leftSideBarType, leftSideBarTheme } = state.Layout;
  return { leftSideBarType, leftSideBarTheme };
};

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
);
