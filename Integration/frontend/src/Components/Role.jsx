import './role.css'
import { Link } from 'react-router-dom';
const Role = () => {
  return (
    <div>
        <div className="hsplit hleft">
    <Link to="/Signin">
  <div className="hcentered">
    <img src="../images/user2.jpg" alt="Avatar woman"/>
    <h2 id="use">User</h2>
  </div>
    </Link>
</div>
  
<div className="usplit hright">
    <Link to="/AdSignin">
  <div className="hcentered">
    <img src="../images/admin.png" alt="Avatar man"/>
    <h2 id="ad">Admin</h2>
  </div>
  </Link>
</div>
    </div>
  )
}

export default Role