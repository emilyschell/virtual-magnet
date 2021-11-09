import { IoRadioButtonOn } from "react-icons/io5"
import { useState } from "react"

const LandingPage = ({ navigate, setLoggedInEmail }) => {

  const logIn = (email) => {
    setLoggedInEmail(email);
    navigate("viewBoard");
  }

  const [loginData, setLoginData] = useState({ email: '' })

  return (
    <div className="pageWrapper">

      <h1>Virtual <IoRadioButtonOn id="magnetIcon" />Magnet</h1>
      <div className="loginForm">
        <div className="labelInput">
          <label htmlFor="email">email: </label>
          <input
            type="text"
            id="email"
            onChange={(event) => { setLoginData({ ...loginData, email: event.target.value }) }}
            value={loginData.email}
            required />
        </div>

        <div className="labelInput">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            // onChange={(event) => { setLoginData({ ...loginData, password: event.target.value }) }}
            // value={loginData.password}
            required />
        </div>

        {/* <input type="checkbox" name="staySignedIn" id="staySignedIn" />
        <label htmlFor="staySignedIn">stay signed in</label> */}

        <button className="loginButton" onClick={() => logIn(loginData.email)}>log in</button>
      </div>
    </div>
  )
}

export default LandingPage