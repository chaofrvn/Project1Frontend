import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Document = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getDocumentById = async () => {
      try {
        console.log(id);
        const response = await axios.get(
          `http://localhost:4688/documents/${id}`
        );
        setName(response.data.name);
        setAuthor(response.data.author);
        setType(response.data.type);
        setSubject(response.data.subject);
        setDescription(response.data.description);
        setLink(response.data.link);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getDocumentById();
  }, [id]);

  return (
    <div>
      <h1 className="title">Tài liệu</h1>
      <p className="has-text-centered">{msg}</p>

      <p className="document-name">Tên tài liệu: {name}</p>
      <p className="document-price"> Tác giả: {author} </p>
      <p className="document-price"> Mô tả tài liệu : {description} </p>
      <p className="document-price">
        {" "}
        Đường dẫn : <a href={link}>
          Nhấn vào đây để chuyển tiếp tới tài liệu
        </a>{" "}
      </p>
    </div>
  );
};

export default Document;
