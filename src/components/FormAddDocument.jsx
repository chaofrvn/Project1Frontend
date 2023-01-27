import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormAddDocument = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const types = [
    { name: "Tài liệu đại cương", value: "Tài liệu đại cương" },
    { name: "Tài liệu ngành CNTT", value: "Tài liệu ngành CNTT" },
    { name: "Tài liệu khác", value: "Tài liệu khác" },
  ];

  const subjects = [
    { name: "Giải tích", value: "Giải tích", typeid: "Tài liệu đại cương" },
    { name: "Đại số ", value: "Đại số", typeid: "Tài liệu đại cương" },
    {
      name: "Xác suất thống kê",
      value: "Xác suất thống kê",
      typeid: "Tài liệu đại cương",
    },
    {
      name: "Vật lý đại cương",
      value: "Vật lý đại cương",
      typeid: "Tài liệu đại cương",
    },
    {
      name: "Tin học đại cương",
      value: "Tin học đại cương",
      typeid: "Tài liệu đại cương",
    },
    // {
    //   name: "Lý luận chính trị",
    //   value: "Lý luận chính trị",
    //   typeid: "Tài liệu đại cương",
    // },
    {
      name: "Các môn khác",
      value: "Các môn đại cương khác",
      typeid: "Tài liệu đại cương",
    },
    {
      name: "Toán rời rạc",
      value: "Toán rời rạc",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Cấu trúc dữ liệu và thuật toán",
      value: "Cấu trúc dữ liệu và thuật toán",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Lập trình hướng đối tượng",
      value: "Lập trình hướng đối tượng",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Mạng máy tính",
      value: "Mạng máy tính",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Cơ sở dữ liệu",
      value: "Cơ sở dữ liệu",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Kiến trúc máy tính",
      value: "Kiến trúc máy tính",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Hệ điều hành",
      value: "Hệ điều hành",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Kĩ thuật lập trình",
      value: "Kĩ thuật lập trình",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Nhập môn AI",
      value: "Nhập môn AI",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Nhập môn CNPM",
      value: "Nhập môn CNPM",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Nhập môn học máy",
      value: "Nhập môn học máy",
      typeid: "Tài liệu ngành CNTT",
    },
    {
      name: "Nhập môn an toàn thông tin",
      value: "Nhập môn an toàn thông tin",
      typeid: "Tài liệu ngành CNTT",
    },
    ,
    {
      name: "Các môn khác",
      value: "Các môn CNTT khác",
      typeid: "Tài liệu ngành CNTT",
    },

    { name: "Các môn khác", value: "other", typeid: "other" },
  ];

  const [typea, setTypea] = useState([]);
  const [subjecta, setSubjecta] = useState([]);

  useEffect(() => {
    setTypea(types);
  }, []);

  const handleType = (a) => {
    const b = subjects.filter((x) => x.typeid === a);
    setSubjecta(b);
  };

  const saveDocument = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4688/documents", {
        name: name,
        author: author,
        type: type,
        subject: subject,
        description: description,
        link: link,
      });
      navigate("/documents");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Documents</h1>
      <h2 className="subtitle">Add New Document</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveDocument}>
              <p className="has-text-centered">{msg}</p>
              {/* Tên tài liệu */}
              <div className="field">
                <label className="label">Tên tài liệu </label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập vào tên tài liệu"
                  />
                </div>
              </div>

              {/* Tác giả */}
              <div className="field">
                <label className="label">Tác giả</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Nhập vào tên tác giả"
                  />
                </div>
              </div>
              {/* Mô tả về tài liệu */}
              <div className="field">
                <label className="label">Mô tả</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Mô tả về tài liệu"
                  />
                </div>
              </div>
              {/* Link tài liệu */}
              <div className="field">
                <label className="label">Đường dẫn tới tài liệu</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Link"
                  />
                </div>
              </div>

              {/* Loại tài liệu */}
              <div className="field">
                <label className="label">Loại tài liệu</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                        handleType(e.target.value);
                        console.log(e.target.value);
                      }}
                    >
                      <option value="">Chọn chủ đề</option>
                      {typea && typea !== undefined
                        ? typea.map((r, index) => {
                            return (
                              <option key={index} value={r.value}>
                                {r.name}
                              </option>
                            );
                          })
                        : "No Type"}
                    </select>
                  </div>
                </div>
              </div>
              {/* Môn học */}
              <div className="field">
                <label className="label">Test</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    >
                      <option value="123456">Chọn môn học</option>
                      {subjecta && subjecta !== undefined
                        ? subjecta.map((r, index) => {
                            return (
                              <option key={index} value={r.value}>
                                {r.name}
                              </option>
                            );
                          })
                        : "No Subject"}
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddDocument;
