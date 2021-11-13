import { useState } from "react"
import StatusDropdown from "./StatusDropdown"

const UpdateStatus = ({ setLoggedInEmail, loggedInUser, onUpdateStatus, navigate }) => {

  const logout = () => {
    setLoggedInEmail(null);
    navigate("landing");
  }

  const startingData = {
    location: loggedInUser.location,
    returnInfo: loggedInUser.returnInfo,
    contactInfo: loggedInUser.contactInfo,
  }

  const [formData, setFormData] = useState(startingData)

  const updateUserStatus = () => {
    // console.log('updateUserStatus started!'); Works!
    const time = new Date().toLocaleString([], { hour12: true, hour: 'numeric', minute: '2-digit', year: 'numeric', month: 'numeric', day: 'numeric' });
    // console.log(time); Works!
    const userData = {
      email: loggedInUser.email,
      firstName: loggedInUser.firstName,
      lastName: loggedInUser.lastName,
      department: loggedInUser.department,
      location: formData.location,
      returnInfo: formData.returnInfo,
      contactInfo: formData.contactInfo,
      timestamp: time
    }
    // console.log("userData: " + JSON.stringify(userData)); Works!
    onUpdateStatus(userData);
    navigate("viewBoard");
  }

  return (
    <div className="updateStatusPage">
      <button className="logoutButton" onClick={() => logout()}>log out</button>

      <h1>{loggedInUser.firstName + " " + loggedInUser.lastName}</h1>

      <form className="updateStatusForm">
        <StatusDropdown
          formData={formData}
          setFormData={setFormData}
          current={loggedInUser.location}
        />

        <div className="field">
          <label htmlFor="returnInfo">returning: </label>
          <input type="text" name="returnInfo" id="returnInfo"
            onChange={(event) => { setFormData({ ...formData, returnInfo: event.target.value }) }}
            value={formData.returnInfo}
          />
        </div>

        <div className="field">
          <label htmlFor="contactInfo">contact: </label>
          <input type="text" name="contactInfo" id="contactInfo"
            onChange={(event) => { setFormData({ ...formData, contactInfo: event.target.value }) }}
            value={formData.contactInfo}
          />
        </div>

        <button type="submit" onClick={updateUserStatus} className="updateStatusButton">
          update status
        </button>
      </form>
    </div>
  )
}

export default UpdateStatus;