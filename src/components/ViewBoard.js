import UserStatus from "./UserStatus"
import { AiOutlineSortAscending } from "react-icons/ai"
// import BoardSettings from "./BoardSettings"

const ViewBoard = ({ navigate, userList }) => {

  return (
    <div className="pageWrapper">
      <div className="updateStatusButtonContainer">
        <button onClick={() => navigate("updateStatus")} className="updateStatusButton">
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
        <AiOutlineSortAscending id="sortButton" />
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