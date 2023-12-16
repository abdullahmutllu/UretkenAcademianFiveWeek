import "./header.css";
import { CiLogin } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

function Header() {
  const pages = ["HomePage", "Content", "BlogPage"];
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <h1 className="pageTitle">BlogPage</h1>
        </div>
        <div className="headerMiddle">
          <ul className="topList">
            {pages.map((item, index) => (
              <li className="TopListItem" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="headerRight">
          <CiLogin className="Icon" />
          <MdManageAccounts className="Icon" />
          <FaFacebook className="Icon" />
        </div>
      </div>
    </>
  );
}
export default Header;
