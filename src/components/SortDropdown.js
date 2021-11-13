import { BiCheck } from "react-icons/bi"

const SortDropdown = ({ toggle, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  if (!toggle) {
    return null;
  }
  return (
    <div id="sortDropdown">
      <div className="sortDropdownLabel">sort by</div>
      <div onClick={() => onSortByChange('firstName')}
        className="menuItem" role="menuitem">first name {(sortBy === 'firstName') && <BiCheck id="checkMark" />}</div>
      <div onClick={() => onSortByChange('lastName')}
        className="menuItem" role="menuitem">last name {(sortBy === 'lastName') && <BiCheck id="checkMark" />}</div>
      <div onClick={() => onSortByChange('location')}
        className="menuItem" role="menuitem">status {(sortBy === 'location') && <BiCheck id="checkMark" />}</div>
      <div onClick={() => onSortByChange('timestamp')}
        className="menuItem" role="menuitem">update time {(sortBy === 'timestamp') && <BiCheck id="checkMark" />}</div>
      <div onClick={() => onSortByChange('department')}
        className="menuItem" role="menuitem">department {(sortBy === 'department') && <BiCheck id="checkMark" />}</div>
      <div className="sortDropdownLabel">order</div>
      <div onClick={() => onOrderByChange('asc')}
        className="menuItem" role="menuitem">ascending {(orderBy === 'asc') && <BiCheck id="checkMark" />}</div>
      <div onClick={() => onOrderByChange('desc')}
        className="menuItem" role="menuitem">descending {(orderBy === 'desc') && <BiCheck id="checkMark" />}</div>
    </div >
  )
}

export default SortDropdown