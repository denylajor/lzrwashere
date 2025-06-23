import axios from "axios";
import { useEffect, useState } from "react";
import $ from "jquery";

function Home() {
  const [ListUser, setListUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((response) => {
      setListUser(response.data.data);
    });

    $("#AddUser").on("click", () => {
      $("#modalAddUser").show(); // atau pakai toggleClass dll
    });
  }, []);

  return (
    <div className="container">
      <button className="btn btn-success" id="AddUser">
        Add User
      </button>
      <br />
      <table className="table table-hover">
        <thead className="bg-info">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {ListUser.map((value, key) => {
            return (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{value.username}</td>
                <td>{value.isActive === 1 ? "Active" : "NonActive"}</td>
                <td>
                  <button type="button" className="btn btn-md btn-info">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="modal" id="modalAddUser" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                id="closeModal"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" id="closeModal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   {ListUser.map((value,key) =>{
    //     return(
    //         <div className='list' key={value.idUser}>
    //             <div className='username'> {value.username} </div>
    //             <div className='active'>{value.isActive === 1 ? 'Active' : 'NonActive'} </div>
    //         </div>
    //     );
    //   })}
    // </div>
  );
}

export default Home;
