import Post from "../Post/Post";
import "./content.css";
function Content() {
  return (
    <>
      <div className="content">
        <div className="page">
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
}
export default Content;
