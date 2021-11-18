import { IoRadioButtonOn } from "react-icons/io5"
import { useState } from "react"

const LandingPage = ({ navigate, setLoggedInEmail, userList }) => {

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [error, setError] = useState("");

  const logIn = (email, password) => {
    let user = userList.find(user => user.email === email);
    if (user) {
      if (password === user.password) {
        setLoggedInEmail(email);
        navigate("viewBoard");
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("Email not recognized");
    }
  }

  return (
    <div className="landingPage">

      <h1>Virtual <IoRadioButtonOn id="magnetIcon" />Magnet</h1>

      <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="email">email: </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) => {
              setLoginData({ ...loginData, email: event.target.value });
            }}
            required />
        </div>

        <div className="field">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => {
              setLoginData({ ...loginData, password: event.target.value });
            }}
            required />
        </div>

        <div className="field">
          <input type="checkbox" id="staySignedIn" />
          <label htmlFor="staySignedIn">stay signed in</label>
        </div>

        {error && <div className="error">{error}</div>}

        <button
          type="submit"
          className="loginButton"
          onClick={() => logIn(loginData.email, loginData.password)}
        >
          log in
        </button>
      </form>
    </div>
  )
}

export default LandingPage