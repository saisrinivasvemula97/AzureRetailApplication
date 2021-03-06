import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page4 from "../components/Page4";

const HomePage = (props) => {
  let user_name = sessionStorage.getItem("user_auth_token") ?? "";
  const history = useHistory();
  const logOutUser = () => {
    sessionStorage.removeItem("user_auth_token");
    history.push("/login");
  };
  return (
    <Router>
      <div>
        <Navbar bg="dark" sticky="top" variant="dark" >
          <Navbar.Brand>Hey {user_name}!</Navbar.Brand>
          <Navbar.Brand className="justify-content-center" style={{paddingLeft: '500px'}} >Azure Retail Web Application</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-info" size="sm" active onClick={logOutUser}>
             <strong>Sign OFF</strong>
              </Button>
          </Navbar.Collapse>
        </Navbar>
        <div id="pagesContainer" className="d-flex justify-content-center">
          <table>
            <thead>
            <br />
              <br />
              <br />

              <tr>
                <th style={{color: '#17a2b8'}}>Please select from the options below:</th>
              </tr>
              <br />
              <tr>
                <th>
                  <a
                    className="btn btn-dark btn-lg btn-block"
                    href="/home/page1"
                  >
                    Data Pulls
                  </a>
                </th>
              </tr>
              <br />
              <tr>
                <th>
                  <a
                    className="btn btn-dark btn-lg btn-block"
                    href="/home/page2"
                  >
                    Dashboards
                  </a>
                </th>
              </tr>
              <br />

              <tr>
                <th>
                  <a
                    className="btn btn-dark btn-lg btn-block"
                    href="/home/page4"
                  >
                    Upload DataSet
                  </a>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <br />
        <Switch>
          <Route exact path="/home/page1">
            <Page1 userName={props.user_name} />
          </Route>
          <Route exact path="/home/page2">
            <Page2 />
          </Route>
          <Route exact path="/home/page4">
            <Page4 userName={props.user_name} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default HomePage;
