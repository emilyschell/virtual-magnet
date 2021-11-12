const UserStatus = ({ user }) => {

  return (
    <li className={`${user.location}Bar statusBar`}>
      <div className="row1">
        <p className="name">{user.firstName + " " + user.lastName}</p>
        <div className="statusBlock">
          <p className="timestamp">{user.timestamp}</p>
          <p className={`${user.location}Box statusBox`}>{user.location}</p>
        </div>
      </div>
      <div className="row2">
        <div className="returnBlock">
          {user.returnInfo && <p className="returnLabel">Returning: </p>}
          <p className="returnInfo">{user.returnInfo}</p>
        </div>
        <div className="contactInfo">
          {user.contactInfo}
        </div>
      </div>
    </li>
  )
}

export default UserStatus