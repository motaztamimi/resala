import "../styles/bookelemnt.css";
import imge from "../componentes/JvzCve.png";
const BookElement = ({ doc ,ind}) => {
  return (
    <div className={`eachpdf ${ind%2==0 ? "shadow": ""}`} >
      <img src={imge} alt='' />
        <h5 className='containerr'> {doc.fileName}</h5>
        <h5 className='containerr'>{doc.fileAuther}</h5>
     
      <button>
        <a href={doc.fileLink}>للتصفح والتنزيل</a>
      </button>
    </div>
  );
};

export default BookElement;
