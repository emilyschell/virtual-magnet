import { BiCheck } from "react-icons/bi"

const SortDropdown = ({ toggle, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
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

export default SortDropdown