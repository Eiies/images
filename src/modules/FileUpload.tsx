import { ChangeEvent, useState } from "react";
import axios from "axios";

const FileUpload = () => {
  // 定义状态 selectedFile，初始值为 null，类型为 File 或 null
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 处理文件输入框变化事件的函数
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 检查是否选择了文件
    if (e.target.files && e.target.files.length > 0) {
      // 将选择的文件设置为 selectedFile 状态的值
      setSelectedFile(e.target.files[0]);
    }
  };

  // 处理文件上传的函数
  const handleUpload = async () => {
    try {
      // 检查是否选中了文件
      if (!selectedFile) {
        console.error("没有选中文件");
        return;
      }

      // 创建 FormData 对象，并将选中的文件添加到表单中
      const formData = new FormData();
      formData.append("file", selectedFile);

      // 发送 POST 请求到服务器端点 http://localhost:3001/upload，传递表单数据作为请求体
      const response = await axios.post(
        "http://172.19.0.1:9090/uplocad",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // 输出上传文件的响应数据
      console.log("文件已上传：", response.data);
    } catch (error) {
      // 输出上传文件错误的信息
      console.error("上传文件时出现了错误：", error);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      {/* 文件输入框，选择文件时触发 handleFileChange 函数 */}
      <input type="file" onChange={handleFileChange} />
      {/* 上传按钮，点击时触发 handleUpload 函数 */}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
