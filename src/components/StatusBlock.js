const StatusBlock = ({ location }) => {
  const statuses = {
    in: {
      text: "In",
      blockBackground: "backgroundColor: #3ADB3A",
      containerBackground: "backgroundColor: #"
    },
    out: {
      text: "Out",
      blockBackground: "backgroundColor: #DB3A3A",
      containerBackground: "backgroundColor: #"
    },
    vacation: {
      text: "Vacation",
      blockBackground: "backgroundColor: #F9F253",
      containerBackground: "backgroundColor: #"
    },
    sick: {
      text: "Sick",
      blockBackground: "backgroundColor: #3AABDB",
      containerBackground: "backgroundColor: #"
    },
    break: {
      text: "Break",
      blockBackground: "backgroundColor: #FFAB2D",
      containerBackground: "backgroundColor: #"
    },
    wfh: {
      text: "WFH",
      blockBackground: "backgroundColor: #FFAB2D",
      containerBackground: "backgroundColor: #"
    }
  }

  for (const item in statuses) {
    if (location === item) {
      return (
        <p style={{ border: "#000 solid 1px" }} className="statusBlock">{item["text"]}</p>
      )
    }
  }
}

export default StatusBlock