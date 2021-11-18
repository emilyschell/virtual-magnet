import { useState, useEffect, useCallback } from 'react'
import './app.css'
import LandingPage from './components/LandingPage'
import ViewBoard from './components/ViewBoard'
import UpdateStatus from './components/UpdateStatus'

const App = () => {

  const [currentPage, setCurrentPage] = useState("landing");
  const [userList, setUserList] = useState([]);
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

  let loggedInUser;
  let i;
  if (loggedInEmail) {
    let user = userList.find(user => user.email === loggedInEmail);
    i = userList.indexOf(user);
    loggedInUser = userList[i];
  } else {
    loggedInUser = null;
  }

  const navigate = (newPage) => {
    setCurrentPage(newPage)
  }

  if (currentPage === "landing") {
    return (
      <LandingPage
        navigate={navigate}
        setLoggedInEmail={setLoggedInEmail}
        userList={userList}
      />
    )
  } else if (currentPage === "viewBoard") {
    return (
      <ViewBoard
        navigate={navigate}
        userList={userList}
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
            const filteredUserList = userList.filter(user => user !== loggedInUser)
            const newUserList = [...filteredUserList, userData]
            setUserList(newUserList);
          }
        }
      />
    )
  }
}

export default App