import StatusBlock from './StatusBlock'

const UserStatus = ({ user }) => {

  return (
    <li className="status-bar">
      <div className="row1">
        <span className="name">{user.firstName + " " + user.lastName}</span>
        <span className="status">
          <span className="timestamp">{user.timestamp}</span>
          <StatusBlock location={user.location} />
        </span>
      </div>
      <div className="row2">
        <div>
          <p className="returnLabel">Will return: </p>
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