import "../styles/bookelemnt.css";
import imge from "../componentes/download.jpg"
const BookElement = ({ doc }) => {
  return (
    <div className="eachpdf">
      <img src={imge} alt='' />
      <div className="containerr">
      <h5>{doc.fileName}</h5>
      <h5>{doc.fileAuther}</h5>
      
      </div >
      <div>
        
      </div>
      <button >
      <a   href={doc.fileLink}>للتصفح والتنزيل</a>
      </button>
    
    </div>
  );
};

export default BookElement;
