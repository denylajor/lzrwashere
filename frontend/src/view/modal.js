import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

export const Modal = ({ onClose }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Minimal 3 karakter")
      .max(8, "Maksimal 8 karakter")
      .required("Username wajib diisi"),
    password: Yup.string()
      .min(3, "Minimal 3 karakter")
      .max(8, "Maksimal 8 karakter")
      .required("Password wajib diisi"),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/saveUser", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.responseCode === 201) {
          Swal.fire({
            icon: "success",
            title: "Sukses",
            text: "Data berhasil disimpan!",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.reload();
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Server Error",
          text:
            error.response?.data?.message || "Terjadi kesalahan pada server.",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.reload();
        });
      });
  };

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Tambah User</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {() => (
              <Form>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="control-label">Username</label>
                        <ErrorMessage
                          name="username"
                          component="span"
                          className="text-danger"
                        />
                        <Field
                          autoComplete="off"
                          id="username"
                          name="username"
                          placeholder="username"
                          className="form-control"
                        ></Field>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="control-label">Passwrod</label>
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="text-danger"
                        />
                        <Field
                          autoComplete="off"
                          id="password"
                          name="password"
                          type="password"
                          placeholder="password"
                          className="form-control"
                        ></Field>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={onClose}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
