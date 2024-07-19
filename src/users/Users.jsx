import React from "react";
import style from "../style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
const Users = () => {
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کاربران</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
          />
        </div>
        <div className="col-2 text-start px-0">
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <table className="table bg-light shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>نام</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>qasem</td>
            <td>qasemB</td>
            <td>mahdicmptr@gmail.com</td>
            <td>
              
              <i className=" text-warning mx-2 pointer ">
              <FontAwesomeIcon icon={faEdit} />
              </i>
              <i className=" text-danger mx-2 pointer ">
                <FontAwesomeIcon icon={faTrash} />
              </i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
