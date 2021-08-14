import "../styles/bookelemnt.css";

const BookElement = ({ doc }) => {
  return (
    <div>
      <img src='' alt='' />
      <span>{doc.fileName}</span>
      <span>{doc.fileAuther}</span>
      <span>{doc.autherDegree}</span>
      <a href={doc.fileLink}>dasda</a>
    </div>
  );
};

export default BookElement;
