import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to={"/upload"}>
        <button>上传文件页面</button>
      </Link>

      <Link to={"/readfile"}>
        <button>查看文件页面</button>
      </Link>
    </>
  );
}

export default Home;
