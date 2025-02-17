import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const { avatar, name } = user;

  function onClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={avatar} alt={name} />
      <span>Welcome, {name}</span>
      <button onClick={onClick}>Logout</button>
    </div>
  );
}

export default User;
