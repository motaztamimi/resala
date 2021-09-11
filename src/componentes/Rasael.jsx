import { useState, useEffect } from "react";
import { dataBase } from "../config/firebase";
import BookElement from "./BookElement";
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
      <input
        type='search'
        className='searchInput'
        placeholder='بحث'
        onChange={(e) => {
          onSearchInputChange(e.target.value);
        }}
      />
      
      <div className='pdffiles'>
        {searchResult &&
          searchResult.map((item, index) => {
            return <BookElement doc={item} key={index}></BookElement>;
          })}
      </div>
    </div>
  );
};

export default Rasael;
