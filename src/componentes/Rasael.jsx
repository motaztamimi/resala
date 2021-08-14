import { useState, useEffect } from "react";
import { dataBase } from "../config/firebase";
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
      hello world{files !== null ? console.log(files) : console.log(false)}
    </div>
  );
};

export default Rasael;
