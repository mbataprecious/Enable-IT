import axios from "axios";
import { useEffect, useState } from "react";
import StatBoard from "../../components/StatBoard/StatBoard";
import UserListTable from "../../components/UserListTable/UserListTable";
import { toast } from "react-toastify";

//types
import { User } from "../../utils";
//styling
import "./Dashboard.scss";

const Dashboard = () => {
  const [pageNo, setPageNo] = useState(0);
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://give-me-users-forever.herokuapp.com/api/users/${pageNo}/next`
      )
      .then((res) => {
        setUserList(res.data.users.slice(0, 10));
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.message);
        }
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
      <UserListTable userList={userList} />

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
