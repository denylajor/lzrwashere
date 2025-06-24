import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "./modal";
import Datatable from "react-data-table-component";

function Home() {
  const [ListUser, setListUser] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setListUser(response.data.data);
    });
  }, []);

  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      sortable: true,
      width: "80px",
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (row.isActive === 1 ? "Active" : "NonActive"),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button type="button" className="btn btn-sm btn-info">
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="container">
      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        Add User
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)}></Modal>}

      <Datatable
        title="Daftar Pengguna"
        columns={columns}
        data={ListUser}
        pagination
        fixedHeader
        highlightOnHover
      />
    </div>
  );
}

export default Home;
