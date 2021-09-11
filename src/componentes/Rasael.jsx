import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { dataBase } from "../config/firebase";
import BookElement from "./BookElement";
import "../index.css";
import "../styles/bookelemnt.css";
const Rasael = () => {
  const [files, setFiles] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const onSearchInputChange = (serachStr) => {
    const temp = [];
    if (serachStr === "") {
      setSearchResult(files);
      return;
    }
    files.forEach((file) => {
      if (
        file.fileName.includes(serachStr) ||
        file.fileAuther.includes(serachStr)
      ) {
        temp.push(file);
      }
    });
    setSearchResult(temp);
  };
  useEffect(() => {
    dataBase
      .collection("pdfs")
      .orderBy("fileOrder")
      .get()
      .then((items) => {
        let temp = [];
        items.forEach((item) => {
          temp.push(item.data());
        });
        setFiles(temp);
        setSearchResult(temp);
      });
  }, []);
  return (
    <div className='rsaelPage'>
      <div className='toptext'>
        <h4 className='projectTitle'>تحقيق كتاب</h4>
        <h3 className='projectTitle'>
          {" "}
          فتح القدير للكمال بن الهمام على الهداية شرح بداية المبتدي
        </h3>

        <h4 className='projectTitle'>لبرهان الدين المرغيناني</h4>
      </div>

      <div className='topic'>
        <input
          type='search'
          className='searchInput'
          placeholder='بحث...'
          onChange={(e) => {
            onSearchInputChange(e.target.value);
          }}
        />
        <h1>الرسائل</h1>
        <Link to='/'>العودة الى الصفحة الرئيسية</Link>
      </div>

      <div className='pdffiles'>
        {searchResult &&
          searchResult.map((item, index) => {
            return (
              <BookElement doc={item} key={index} ind={index}></BookElement>
            );
          })}
      </div>
    </div>
  );
};

export default Rasael;
