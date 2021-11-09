import { BiCheck } from "react-icons/bi"
import { IoSettingsOutline } from "react-icons/io5"
import { useState } from "react"

const DropDown = ({ toggle, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  if (!toggle) {
    return null;
  }
  return (
    <div>
      <div onClick={() => onSortByChange('firstName')}
        className="menuItem" role="menuitem">first name {(sortBy === 'firstName') && <BiCheck />}</div>
      <div onClick={() => onSortByChange('lastName')}
        className="menuItem" role="menuitem">last name {(sortBy === 'lastName') && <BiCheck />}</div>
      <div onClick={() => onSortByChange('status')}
        className="menuItem" role="menuitem">status {(sortBy === 'status') && <BiCheck />}</div>
      <div onClick={() => onSortByChange('timestamp')}
        className="menuItem" role="menuitem">update time {(sortBy === 'timestamp') && <BiCheck />}</div>
      <div onClick={() => onSortByChange('department')}
        className="menuItem" role="menuitem">department {(sortBy === 'department') && <BiCheck />}</div>
      <div onClick={() => onOrderByChange('asc')}
        className="menuItem" role="menuitem">Asc {(orderBy === 'asc') && <BiCheck />}</div>
      <div onClick={() => onOrderByChange('desc')}
        className="menuItem" role="menuitem">Desc {(orderBy === 'desc') && <BiCheck />}</div>
    </div>
  )
}

const BoardSettings = ({ sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  let [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div>
      <button type="button" onClick={setToggleDropdown(!toggleDropdown)}
        className="settingsButton" aria-haspopup="true" aria-expanded="true">
        <IoSettingsOutline />
      </button>
      <DropDown toggle={toggleDropdown}
        sortBy={sortBy}
        onSortByChange={mySort => onSortByChange(mySort)}
        orderBy={orderBy}
        onOrderByChange={myOrder => onOrderByChange(myOrder)}
      />
    </div>
  )
}

export default BoardSettings