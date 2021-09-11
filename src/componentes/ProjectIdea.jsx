import "../styles/projectIdeaStyle.css";
import { Link } from "react-router-dom";
const projectIdea = () => {
  // When the user scrolls down 20px from the top of the document, show the button

  // When the user clicks on the button, scroll to the top of the document

  return (
    <div className='projectIdeaMainSec'>
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
          فكرة المشروع
        </h3>
      </div>
      <div className='ideaText'>
        <div className='projectIdeaLinks'>
          <div className='projectIdeaInsideLinks'>
            <a href='#mmm'>معالم الخطة الرئيسة</a>
            <a href='#sectionone'>قسم الدراسة</a>
            <a href='#secondsection'>قسم التحقيق</a>
          </div>
          <Link className='backToHomePageFromProjectIdea' to='/'>
            العودة الى الصفحة الرئيسة
          </Link>
        </div>
        <h1>بسم الله الرحمن الرحيم</h1>
        <h1>فكرة المشروع</h1>
        <p className='ideaText_p1'>
          إن التراث الفقهي الضخم الذي خلَّفه فقهاؤنا يحتاج لمزيد من العناية
          والخدمة ، وإن من أولى الأمور التي ينبغي أن تصرف فيها الأوقات ، وتتجه
          إليها جهود الباحثين من طلبة العلم ، هي تحقيق ما تيسر من هذا التراث وفق
          القواعد والأسس العلمية لتحقيق المخطوطات ، ومن المعلوم أن تحقيق
          المخطوطات علم وفن قائم بذاته ، له قواعده وأسسه ، وتعتني الجامعات
          الإسلامية بتدريسه ، وتدريب الباحثين عليه لما له من أهمية في إبراز
          تراثنا الإسلامي وخدمته بصورة لائقة . ولما كان كتاب فتح القدير لكمال
          الدين ابن الهمام الفقيه الحنفي المعروف قد طبع قديماً بدون أي تحقيق أو
          عناية أو حتى فهرسة صحيحة رأيت أن أقوم بوضع منهج لتحقيق هذا الكتاب
          المهم . وتأتي أهمية هذا الكتاب من عدة أوجه أهمها: أنه شرحٌ على كتاب "
          الهداية في فروع الحنفية " لأبي بكر المرغيناني الذي يعتبر من أهم الكتب
          المعتمدة عند الحنفية حيث إن مؤلفه حرر مذهب الحنفية تحريراً دقيقاً ،
          كما أنه اعتنى بذكر الأدلة. وقد لقي هذا الكتاب عناية فائقة من فقهاء
          الحنفية وغيرهم ، فبلغت الأعمال العلمية عليه ما بين شرح وحاشية واختصار
          وتخريج لأحاديثه ونظم حوالي الستين . ولما كان فتح القدير من أهم شروحه
          حيث إن مؤلفه هو كمال الدين بن الهمام المعروف لدى الحنفية بالمحقق كما
          في رسالة رسم المفتي لابن عابدين ص19،52 ، وعدَّه ابن نجيم الحنفي من أهل
          الترجيح وعدَّه آخرون من أهل الاجتهاد ويمتاز فتح القدير بعنايته بالأدلة
          وتخريج الأحاديث والحكم عليها ، كما أن المؤلف ابن الهمام معروف بالإنصاف
          وعدم تعصبه لمذهبه . وقد اعتمد على هذا الشرح معظم فقهاء الحنفية الذين
          جاءوا بعده وهذا واضح من النقول الكثيرة عنه والمبثوثة في كتبهم . لهذه
          الأسباب وغيرها كان الكتاب جديراً بالخدمة العلمية المنهجية وفق خطة عمل
        </p>
        <p></p>
        <h2 className='IdeaMainPlan'>
          {" "}
          <u id='mmm'>معالم الخطة الرئيسة : </u>
        </h2>
        <br />
        <h3>
          <u>تنقسم الخطة إلى قسمين : </u>
        </h3>
        <h4 id='sectionone'>أولاً : قسم الدراسة </h4>
        <h4>ثانياً : قسم التحقيق </h4>

        <p className='Sectiontext'>أما قسم الدراسة فيشتمل على ما يلي: </p>
        <p className='Sectiontext'>
          الفصل الأول : التعريف بصاحب المتن المرغيناني وبالشارح ابن الهمام وفيه
          المباحث الآتية :{" "}
        </p>
        <p className='Sectiontext'>
          الأول : نبذة موجزة عن الإمام أبي بكر المرغيناني صاحب الهداية تشمل :
          حياته العلمية ومكانته في المذهب الحنفي … الخ .
        </p>
        <p className='Sectiontext'>
          الثاني : التعريف بعصر الشارح ابن الهمام من حيث :
        </p>
        <ul>
          <li className='Sectiontext Liprop'> الحالة السياسية . </li>
          <li className='Sectiontext Liprop'> الحالة العلمية . </li>
        </ul>
        <p className='Sectiontext'>الثالث : ترجمة الشارح وفيه ما يلي : </p>
        <ul>
          <li className='Sectiontext Liprop'>اسمه ونسبه .</li>
          <li className='Sectiontext Liprop'>نشأته وطلبه للعلم . </li>
          <li className='Sectiontext Liprop'>شيوخه .</li>
          <li className='Sectiontext Liprop'>تلاميذه .</li>
          <li className='Sectiontext Liprop'>مؤلفاته .</li>
          <li className='Sectiontext Liprop'>
            {" "}
            مكانته العلمية أصولياً وفقهياً ومحدثاً .
          </li>
        </ul>
        <p className='Sectiontext'>
          الفصل الثاني : التعريف بالكتاب فتح القدير وفيه :{" "}
        </p>
        <ul>
          <li className='Sectiontext Liprop'>تحقيق اسم الكتاب </li>
          <li className='Sectiontext Liprop'>
            . تحقيق نسبته إلى الشارح ابن الهمام.{" "}
          </li>
          <li className='Sectiontext Liprop'>مصادره التي اعتمد عليها . </li>
          <li className='Sectiontext Liprop'>ميزات الكتاب . </li>
          <li className='Sectiontext Liprop'>
            بيان اختيارات المؤلف والتعليق عليها .{" "}
          </li>
        </ul>
        <p className='Sectiontext' id='secondsection'>
          القسم الثاني : قسم التحقيق ويشتمل على :
        </p>
        <ul>
          <li className='Sectiontext Liprop'>وصف النسخ المخطوطة . </li>
          <li className='Sectiontext Liprop'>بيان حال النسخة المطبوعة . </li>
          <li className='Sectiontext Liprop'>بيان منهج التحقيق .</li>
        </ul>
        <h4>وأهم ملامح هذا المنهج ما يلي : </h4>
        <ul>
          <li className='Sectiontext Liprop'>
            ضبط نص الكتاب بحيث يكون أقرب إلى الصورة التي وضعه مؤلفه عليها .{" "}
          </li>
          <li className='Sectiontext Liprop'>اتباع الرسم الإملائي الحديث . </li>
          <li className='Sectiontext Liprop'>
            مقابلة النسخ ووضع الفروق التي يبنى علها اختلاف في الهامش .{" "}
          </li>
          <li className='Sectiontext Liprop'>
            ترقيم الآيات القرآنية ببيان اسم السورة ورقم الآية .
          </li>
          <li className='Sectiontext Liprop'>
            تخريج الأحاديث النبوية فإذا كان الحديث في الصحيحين أو في أحدهما
            فيكتفى بذلك مع التوثيق منهما أو من أحدهما، وأما إذا كان الحديث في
            غيرهما من مصادر السنة فيخرج من مصادره ويذكر حكم أهل الحديث عليه.{" "}
          </li>
          <li className='Sectiontext Liprop'>
            عزو الأبيات الشعرية إلى قائليها وتوثيق ذلك من مصادرها .{" "}
          </li>
          <li className='Sectiontext Liprop'>
            الترجمة للأعلام الذين ذكرهم الشارح في الكتاب ترجمة موجزة وتوثيق ذلك
            من كتب التراجم .{" "}
          </li>
          <li className='Sectiontext Liprop'>
            توثيق ما يرد في الكتاب من النقول والآراء والأقوال من المصادر
            المعتمدة .{" "}
          </li>
          <li className='Sectiontext Liprop'>شرح الألفاظ الغريبة .</li>
          <li className='Sectiontext Liprop'>
            توثيق المسائل الفقهية من المصادر المعتمدة عند المذاهب الفقهية.{" "}
          </li>
          <li className='Sectiontext Liprop'>
            عمل الفهارس الآتية :
            <ul>
              <li className='Sectiontext Liprop1'> فهرس الآيات القرآنية . </li>
              <li className='Sectiontext Liprop1'> فهرس الأحاديث النبوية . </li>
              <li className='Sectiontext Liprop1'>
                {" "}
                فهرس الحدود والمصطلحات والألفاظ الغريبة
              </li>
              <li className='Sectiontext Liprop1'> فهرس الأبيات الشعرية </li>
              <li className='Sectiontext Liprop1'> فهرس الأمثال ونحوها </li>
              <li className='Sectiontext Liprop1'> فهرس الأعلام </li>
              <li className='Sectiontext Liprop1'>
                {" "}
                فهرس الكتب الواردة في النص{" "}
              </li>
              <li className='Sectiontext Liprop1'> فهرس الفرق والطوائف </li>
              <li className='Sectiontext Liprop1'> فهرس الأماكن والبقاع </li>
              <li className='Sectiontext Liprop1'> فهرس مراجع البحث </li>
              <li className='Sectiontext Liprop1'> فهرس الموضوعات </li>
            </ul>
          </li>
        </ul>
        <p className='Sectiontext'>
          وختاماً فإني آمل إن تمَّ هذا العمل العلمي - بهذه الخطة التي يجب أن
          يلتزم بها جميع الباحثين المشاركين فيه - أن نكون قد قدمنا خدمة جليلة
          للفقه الإسلامي عامة وللفقه الحنفي خاصة .
        </p>
        <div className='endText'>
          <p>أعدها أ.د حسام الدين عفانة</p>
          <p>أستاذ الفقه والأصول</p>
          <p>كلية الدعوة وأصول الدين / جامعة القدس</p>
        </div>
      </div>
    </div>
  );
};

export default projectIdea;
