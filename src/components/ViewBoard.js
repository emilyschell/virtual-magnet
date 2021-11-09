import UserStatus from "./UserStatus"
// import BoardSettings from "./BoardSettings"
import { IoSettingsOutline } from "react-icons/io5"

const ViewBoard = ({ navigate, userList }) => {

  return (
    <div className="viewBoardPage">
      <div className="updateStatusButtonContainer">
        <button type="submit" onClick={() => navigate("updateStatus")} className="updateStatusButton">
          update status
        </button>
      </div>

      <div className="settingsContainer">
        {/* <BoardSettings
          orderBy={orderBy}
          onOrderByChange={myOrder => setOrderBy(myOrder)}
          sortBy={sortBy}
          onSortByChange={mySort => setSortBy(mySort)}
        /> */}
        <IoSettingsOutline />
      </div>

      <div className="board">
        <ul>
          {userList
            .map(user => {
              return (
                <UserStatus
                  key={user["email"]}
                  user={user}
                />
              )
            })
          }
        </ul>
      </div>
    </div >
  )
}

export default ViewBoard