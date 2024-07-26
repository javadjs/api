import React from "react";
import style from "../style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Users = () => {
  const navigate = useNavigate();

  const deletealeart = () => {
    swal({
      title: "حذف رکورد!",
      text: `آیا از حذف آیدی اطمینان دارید؟`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("حذف با موفقیت انجام شد.", {
          icon: "success",
        });
      } else {
        swal("از حذف منصرف شدید!");
      }
    });
  };

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
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/user/add", { state: "react" });
            }}
          >
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
            <td>javad</td>
            <td>javadjs</td>
            <td>javad@gmail.com</td>
            <td>
              <Link to={"add/2"} state={"editereact"}>
                <i className=" text-warning mx-2 pointer ">
                  <FontAwesomeIcon icon={faEdit} />
                </i>
              </Link>

         
                <i className='text-danger mx-2 pointer' onClick={deletealeart}>
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
