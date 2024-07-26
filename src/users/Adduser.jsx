import React, { Fragment } from "react";
import style from "../style.module.css";
import { Link, useParams, Outlet, useNavigate, useLocation } from "react-router-dom";

const Addsers = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const pm = useLocation();
  // console.log(pm)
  return (
    <Fragment>
      <div className={style.contents}>
        <h3>{Id ? "ویرایش کاربر" : "افزودن کاربر"}</h3>
        <div className={style.form_contents}>
          <form className={style.forms}>
            <div className={style.boxinput}>
              <label className={style.lable} htmlFor="">
                نام و نام خانوادگی
              </label>
              <input className={style.demo} type="text" />
            </div>
            <div className={style.boxinput}>
              <label className={style.lable} htmlFor="">
                نام کاربری
              </label>
              <input className={style.demo} type="text" />
            </div>
            <div className={style.boxinput}>
              <label className={style.lable} htmlFor="">
                ایمیل
              </label>
              <input className={style.demo} type="email" />
            </div>
            <div className={style.boxinput}>
              <label className={style.lable} htmlFor="">
                آدرس
              </label>
              <div className={style.box_addres}>
                <div className={style.mini_box_addres}>
                  <input
                    className={style.addres}
                    type="text"
                    placeholder="شهر"
                  />
                  <input
                    className={style.addres}
                    type="text"
                    placeholder="خیابان"
                  />
                </div>
                <div className={style.mini_box_addres}>
                  <input
                    className={style.addres}
                    type="text"
                    placeholder="ادامه ادرس"
                  />
                  <input
                    className={style.addres}
                    type="text"
                    placeholder="کد پستی"
                  />
                </div>
              </div>
            </div>
            <div className={style.btn}>
              <Link>
                <button className={style.save}>
                  {Id ? "ویرایش" : "ذخیره"}
                </button>
              </Link>

              <button
              type="button"
                className={style.exit}
                onClick={() => 
                  navigate(-1)
                }
              >
                بازگشت
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Outlet/> */}
    </Fragment>
  );
};

export default Addsers;
