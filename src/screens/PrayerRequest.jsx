import Sidebar from "../components/Sidebar/SideBar";
import Header from "../components/Header/AppBar";

const PrayerRequestScreen = () => {
  const users = [
    {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      phone: "9876549878",
      role: "admin",
      isBan: "Active",
    },
    {
      id: 2,
      name: "Ved Prakash",
      email: "ved@gmail.com",
      phone: "8889998888",
      role: "user",
      isBan: "Active",
    },
    {
      id: 3,
      name: "User",
      email: "user@gmail.com",
      phone: "9876549878",
      role: "user",
      isBan: "Active",
    },
  ];

  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-table">
            <div className="dashboard-table-header">
              <h3>Sermon Lists</h3>
              <button className="add-user-btn">ADD SERMON</button>
            </div>
            <div className="table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Is Ban</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.role}</td>
                      <td>
                        <span
                          className={`status ${
                            user.isBan === "Active" ? "active" : "inactive"
                          }`}
                        >
                          {user.isBan}
                        </span>
                      </td>
                      <td>
                        <button className="edit-btn">EDIT</button>
                        <button className="delete-btn">DELETE</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequestScreen;
