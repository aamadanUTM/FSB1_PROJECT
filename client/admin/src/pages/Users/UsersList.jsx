import React from "react";
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UsersList = () => {
  const breadcrumbItems = [
    { title: "Nazox", link: "/" },
    { title: "Users", link: "#" },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Users" breadcrumbItems={breadcrumbItems} />
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Users List</h4>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="search" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="search" className="form-label">
                          User Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="User Email"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UsersList;
