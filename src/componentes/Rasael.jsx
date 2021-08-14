import { useState, useEffect } from "react";
import { dataBase } from "../config/firebase";
import BookElement from "./BookElement";
import '../styles/bookelemnt.css'
const Rasael = () => {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    dataBase
      .collection("pdfs")
      .get()
      .then((items) => {
        let temp = [];
        items.forEach((item) => {
          temp.push(item.data());
        });
        setFiles(temp);
      });
  }, []);

  return (
    <div className="pdffiles">
      {files &&
        files.map((item, index) => {
          return <BookElement doc={item} key={index}></BookElement>;
        })}
    </div>
  );
};

export default Rasael;
