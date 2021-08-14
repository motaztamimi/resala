import { useState, useEffect } from "react";
import { dataBase } from "../config/firebase";
import BookElement from "./BookElement";
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
    <div>
      {files &&
        files.map((item, index) => {
          return <BookElement doc={item} key={index}></BookElement>;
        })}
    </div>
  );
};

export default Rasael;
