import { FC } from "react";
import Badge from "../Badge/Badge";
//styling
import "./UserListTable.scss";
//types
import { User } from "../../utils";

type Props = {
  userList: User[];
};

const UserListTable: FC<Props> = ({ userList }) => {
  return (
    <div className="user-list-table-container">
      <table className="table-responsive-lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Job Title</th>
            <th>Name</th>
            <th>Email</th>

            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(
            ({ ID, JobTitle, Email, FirstNameLastName, Phone, Company }) => (
              <tr className="table-row" key={ID}>
                <td>{ID}</td>
                <td>{JobTitle}</td>
                <td className="profile-cell">
                  <Badge
                    imgUrl={`https://i.pravatar.cc/150?u=${Math.floor(
                      Math.random() * 10
                    )}`}
                  />
                  {FirstNameLastName}
                </td>

                <td>{Email}</td>
                <td>{Phone}</td>
                <td>{Company}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
