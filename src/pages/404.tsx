import { Link } from "react-router-dom";

function NotPage() {
  return (
    <>
      <h1>404</h1>
      <Link to={"/"}>
        <button>点我回家</button>
      </Link>
    </>
  );
}

export default NotPage;
