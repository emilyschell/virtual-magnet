import { useState } from "react"
import { IoCaretDown } from "react-icons/io5"
import StatusBlock from "./StatusBlock"

const UpdateStatus = ({ setLoggedInEmail, loggedInUser, onStatusUpdate, navigate }) => {

  const [toggleDropdown, setToggleDropdown] = useState(false)

  const logout = () => {
    setLoggedInEmail(null);
    navigate("landing");
  }

  const startingData = {
    location: loggedInUser.location,
    returnInfo: loggedInUser.returnInfo,
    contactInfo: loggedInUser.contactInfo,
    timestamp: loggedInUser.timestamp
  }

  const [formData, setFormData] = useState(startingData)

  const updateUserStatus = () => {
    const userData = {
      location: formData.location,
      returnInfo: formData.returnInfo,
      contactInfo: formData.contactInfo,
      timestamp: new Date().toLocaleString()
    }
    onStatusUpdate(userData);
  }

  const statusChoices = [
    "in",
    "out",
    "vacation",
    "sick",
    "break",
    "wfh"
  ]

  return (
    <div className="updateStatusPage">
      <button className="logoutButton" onClick={logout()}>log out</button>

      <h1>{loggedInUser.firstName + " " + loggedInUser.lastName}</h1>

      <div className="updateStatusForm">
        <label htmlFor="status">status</label>
        <button onClick={() => { setToggleDropdown(!toggleDropdown) }}>
          <IoCaretDown className="dropdownIcon" />
        </button>

        {
          toggleDropdown &&
          <div className="statusDropdown">

            {statusChoices.map(
              (choice) => {
                return (
                  <button
                    className="statusChoiceButton"
                    onClick={() => { setFormData({ ...formData, location: choice }) }}>
                    <StatusBlock location={choice} />
                  </button>
                )
              })
            }
          </div>
        }

        <label htmlFor="returnInfo">returning: </label>
        <input type="text" name="returnInfo" id="returnInfo"
          onChange={(event) => { setFormData({ ...formData, returnInfo: event.target.value }) }}
          value={formData.returnInfo}
        />

        <label htmlFor="contactInfo">contact: </label>
        <input type="text" name="contactInfo" id="contactInfo"
          onChange={(event) => { setFormData({ ...formData, contactInfo: event.target.value }) }}
          value={formData.contactInfo}
        />

        <button type="submit" onClick={updateUserStatus} className="updateStatusButton">
          update status
        </button>
      </div>
    </div>
  )
}

export default UpdateStatus;