import "../styles/loginPage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import { setUserSession } from '../utils/session';
const [login, setLogin] = useState('')
const [pwd, setPwd] = useState('')

const handleLogin = () => {
  axios.post(`http://localhost:4000/login`, { login: login, pwd: pwd }).then(response => {
    if(response.data.auth){
      setUserSession(response.data.token)
      window.location = '/HomePage';
    } else {
      setUserSession(response.data.token)
    }
  }).catch(error => {
    console.log(error)
  });
}


export default function LoginPage() {
  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="app-vertical-center container">
        <div className="login-main col-10 col-sm-8 col-md-8 col-lg-4">
          <div className="login-title">
            <h3>Zaloguj do serwisu</h3>
          </div>
          <div className="login-content">
            <form className="login-form">
            <Form.Control
                type="text"
                className="form-control"
                placeholder="Login"
                style={{ marginTop: "0px" }}
                onChange={(e) => setLogin(e.target.value)}
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Hasło"
                onChange={(e) => setPwd(e.target.value)}
              />
              <Button className="w-100" style={{ marginTop: "20px" }}  onClick={handleLogin}>
                Zaloguj
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

