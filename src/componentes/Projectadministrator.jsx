import "../styles/Projectadministrator.css";
import { Link } from "react-router-dom";
import WordFile from "./Wordfile.jsx";

const Projectadministrator = () => {
  return (
    <div className='BackGround'>
      <div className='toptext'>
        <h4 className='projectTitle'>تحقيق كتاب</h4>
        <h3 className='projectTitle'>
          {" "}
          فتح القدير للكمال بن الهمام على الهداية شرح بداية المبتدي
        </h3>
        <h4 className='projectTitle'>لبرهان الدين المرغيناني</h4>
        <h3
          style={{
            fontWeight: "900",
            fontSize: "1.4rem",
            marginBottom: "0px",
          }}>
          التعريف بالمشرف على المشروع
        </h3>
      </div>
      <div className='Projectadministrator'>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='Generator' content='Microsoft Word 15 (filtered)' />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n<!--\n /* Font Definitions */\n @font-face\n\t{font-family:"Cambria Math";\n\tpanose-1:2 4 5 3 5 4 6 3 2 4;}\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;}\n /* Style Definitions */\n p.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{margin:0cm;\n\tfont-size:1.0rem;\n\tfont-family:"Calibri",sans-serif;}\n.MsoChpDefault\n\t{font-family:"Calibri",sans-serif;}\n@page WordSection1\n\t{size:595.0pt 842.0pt;\n\tmargin:72.0pt 72.0pt 72.0pt 72.0pt;}\ndiv.WordSection1\n\t{page:WordSection1;}\n-->\n',
          }}
        />
        <div className='projectadministratorLinks'>
          <div className='projectadministratorInsideLinks'>
            <a href='#desc'>التعريف بالمشرف</a>
            <a href='#degrees'>الشهادات العلمية</a>
            <a href='#work'>العمل</a>
            <a href='#Sworks'>الأعمال العلمية</a>
          </div>
          <Link className='backToHomePageFromProjectadministrator' to='/'>
            العودة الى الصفحة الرئيسة
          </Link>
        </div>
        <WordFile></WordFile>
      </div>
    </div>
  );
};

export default Projectadministrator;
