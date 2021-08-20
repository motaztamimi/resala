import React from 'react'
import { useState, useEffect } from "react";
import { dataBase } from "../config/firebase";
import "../styles/Search.css";
const SearchRsael = () => {
    const [files, setFiles] = useState(null);

    useEffect(() => {
      dataBase
        .collection("pdfs").orderBy("fileOrder")
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
        <div className="holepage">
            <h1> كشف باسماء الرسائل</h1>
            <table className="students">
                <th>الرقم</th>
                <th>اسم الرسالة</th>
                <th>الباحث</th>
                <tbody>
                {files &&   files.map((item, index) => {
                return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.fileName}</td>
                    <td>{item.fileAuther}</td>
                </tr>
                )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default SearchRsael
