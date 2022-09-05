import { useEffect, useState } from "react";
import StatBoard from "../../components/StatBoard/StatBoard";
import UserListTable from "../../components/UserListTable/UserListTable";

//types
import { User } from "../../utils";
//styling
import "./Dashboard.scss";

const Dashboard = () => {
  const [pageNo, setPageNo] = useState(0);
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://give-me-users-forever.herokuapp.com/api/users/${pageNo}/next`
    )
      .then((response) => {
        setLoading(false);
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          console.error("server error");
        }
      })
      .then((jsonResponse) => {
        setUserList(jsonResponse.users.slice(0, 10));
      })
      .catch((error) => {
        setLoading(false);
        // Handle the error
        console.log(error);
      });

    return () => {};
  }, [pageNo]);

  const gotoNext = () => {
    setPageNo((pageNo) => pageNo + 1);
  };
  const gotoPrev = () => {
    if (pageNo > 0) setPageNo((pageNo) => pageNo - 1);
  };

  return (
    <div className="dashboard-container">
      <h4 className="subtitle">Overview</h4>
      <StatBoard />
      <h4 className="subtitle">User logs</h4>
      <UserListTable userList={userList} loading={loading} />

      <div className="paginate-container">
        <div>
          <p>{"Page " + pageNo}</p>
        </div>
        <div>
          <button
            type="button"
            className={`${pageNo === 0 && "disabled"}`}
            onClick={gotoPrev}
          >
            Previous{" "}
          </button>
          <button type="button" className="" onClick={gotoNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
