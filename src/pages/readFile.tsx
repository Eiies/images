import { useEffect, useState } from "react";

function ReadFile() {
  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");
  const [, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9090/api/readfile");
        const data = await response.json();
        if (data && data.fileName && data.base64Data) {
          setFileName(data.fileName);
          handleBase64Decode(data.base64Data);
        } else {
          setError("API 响应中缺少 fileName 或 base64Data");
        }
      } catch (error: any) {
        setError("获取数据时出错： " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // 清理对象
      URL.revokeObjectURL(imageSrc);
    };
  }, []);

  const handleBase64Decode = (base64String: string) => {
    const binaryString = atob(base64String);
    const blob = new Blob(
      [
        new Uint8Array(binaryString.length).map((_, i) =>
          binaryString.charCodeAt(i)
        ),
      ],
      { type: "image/jpeg" }
    );
    setImageSrc(URL.createObjectURL(blob));
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <b>{fileName}</b>
      <div>
        <img src={imageSrc} alt="Images" />
      </div>
    </>
  );
}

export default ReadFile;
