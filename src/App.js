import { useState, useEffect, useCallback } from 'react'
import './app.css'
import LandingPage from './components/LandingPage'
import ViewBoard from './components/ViewBoard'
import UpdateStatus from './components/UpdateStatus'

const App = () => {

  const [currentPage, setCurrentPage] = useState("landing");
  const [userList, setUserList] = useState([]);
  // const [sortBy, setSortBy] = useState("firstName");
  // const [orderBy, setOrderBy] = useState("asc");
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  const fetchData = useCallback(() => {
    fetch('./users.json')
      .then(response => response.json())
      .then(data => {
        setUserList(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  console.log('userList: ' + JSON.stringify(userList));

  let loggedInUser;
  let i;
  if (loggedInEmail) {
    console.log('loggedInEmail: ' + loggedInEmail);
    let user = userList.find(user => user.email === loggedInEmail);
    console.log('user: ' + JSON.stringify(user));
    console.log('user.email: ' + user.email);
    i = userList.indexOf(user);
    loggedInUser = userList[i];
  } else {
    loggedInUser = null;
  }

  // const sortedStatuses = userList.sort((a, b) => {
  //   let order = (orderBy === 'asc') ? 1 : -1;
  //   return (
  //     a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
  //       ? -1 * order : 1 * order
  //   )
  // })

  const navigate = (newPage) => {
    setCurrentPage(newPage)
  }

  console.log(currentPage);

  if (currentPage === "landing") {
    return (
      <LandingPage
        navigate={navigate}
        setLoggedInEmail={setLoggedInEmail}
      />
    )
  } else if (currentPage === "viewBoard") {
    return (
      <ViewBoard
        navigate={navigate}
        userList={userList}
      // sortBy={sortBy}
      // setSortBy={setSortBy}
      // orderBy={orderBy}
      // setOrderBy={setOrderBy}
      />
    )
  } else if (currentPage === "updateStatus") {
    return (
      <UpdateStatus
        navigate={navigate}
        loggedInUser={loggedInUser}
        setLoggedInEmail={setLoggedInEmail}
        onUpdateStatus={
          userData => {
            console.log('userList before update: ' + JSON.stringify(userList));
            setUserList(userList.filter(user => user !== loggedInUser));
            console.log('userList during update1: ' + JSON.stringify(userList));
            setUserList(...userList, userData);
            console.log('userlist during update2: ' + JSON.stringify(userList));
          }
        }
      />
    )
  }
}

export default App