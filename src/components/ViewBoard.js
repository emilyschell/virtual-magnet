import UserStatus from "./UserStatus"
import SortDropdown from "./SortDropdown"
import { AiOutlineSortAscending } from "react-icons/ai"
import { useState } from "react"

const ViewBoard = ({ navigate, userList }) => {

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [sortBy, setSortBy] = useState("firstName");
  const [orderBy, setOrderBy] = useState("asc");

  const sortedStatuses = userList.sort((a, b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  return (
    <div className="viewBoardPage">

      <div className="viewBoardTopRow">
        <button onClick={() => navigate("updateStatus")} className="updateStatusButton">
          update status
        </button>

        <div className="sortContainer">
          <AiOutlineSortAscending
            onClick={() => setToggleDropdown(!toggleDropdown)}
            id="sortButton" />
          <SortDropdown
            toggle={toggleDropdown}
            sortBy={sortBy}
            onSortByChange={(mySort) => {
              setSortBy(mySort)
              setToggleDropdown(!toggleDropdown)
            }}
            orderBy={orderBy}
            onOrderByChange={(myOrder) => {
              setOrderBy(myOrder)
              setToggleDropdown(!toggleDropdown)
            }}
          />
        </div>
      </div>

      <div className="board">
        <ul>
          {sortedStatuses
            .map(user => {
              return (
                <UserStatus
                  key={user.email}
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