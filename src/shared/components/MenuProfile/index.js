import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import profileIcon from "../../../assets/images/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { Profile } from "../header/style";
import axios from "axios";
import { API_URL } from "../../../pages/constant";
import { toast } from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {logoutSuccess, updateToken} from "../../../redux/actions/accounts";

export const MenuProfile = (props) => {
  const token = useSelector((state) => state.account.token);
  const isLogin = useSelector((state) => state.account.isLogin);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/auth/logout-user`,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (res.data.data.result) {
        dispatch(updateToken({ token: "" }));
        dispatch(logoutSuccess());
        navigate("/login");
      }
      handleClose();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      handleClose();
      return null;
    }
  };

  return (
    <div>
      <Profile
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={profileIcon} alt={"profile"} />
        <div>
          {isLogin ? (
            <p>{props.profile ? props.profile.lastName : "---"}</p>
          ) : (
            <>
              <p>My Account</p>
              <Link to={"login"}>
                <p className="bold">Login</p>
              </Link>
            </>
          )}
        </div>
      </Profile>
      {isLogin && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Thông tin tài khoản</MenuItem>
          <MenuItem onClick={() => navigate("/user-bill")}>Hoá đơn</MenuItem>
          <MenuItem onClick={logout}>Đăng xuất</MenuItem>
        </Menu>
      )}
    </div>
  );
};
