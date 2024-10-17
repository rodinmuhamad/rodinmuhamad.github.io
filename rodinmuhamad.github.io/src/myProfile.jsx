import "./styles.css";
import rodinImage from './rodin.jpg';
const MyProfile = () => {
  return (
      <div className="container">
        <div className="word_split wrapper">
          <span className="word word1">Muhamad </span>
          <span className="word word2">Rodin </span>
          <small className="small">S. Kom, M. Kom</small>
          <hr className="dashed-hr" />
          <span className="word word3">Personal</span>
          <span className="word word4">Details</span>
          <hr className="dashed-hr" />
          <span className="word word5">Employment</span>
          <span className="word word6">History </span>
          <hr className="dashed-hr" />
          <span className="word word7">Education</span>
          <hr className="dashed-hr" />
          <span className="word word8">Personal</span>
          <span className="word word9">Skills </span>
          <hr className="dashed-hr" />
          <span className="word word10">Technical</span>
          <span className="word word11">Skills </span>
          <hr className="dashed-hr" />
          <span className="word word12">Get In </span>
          <span className="word word13">Touch</span>

          <div className="bubble1">
            <span className="the-arrow1"></span>
            Hi! <br /> I Am..
          </div>
          <div className="bubble2">
            <span className="the-arrow2"></span>
            <img src={rodinImage} />
          </div>
          <div className="bubble3">
            <span className="the-arrow3"></span>
            Fullstack Developer with over 8 years of experience in web
            development using the latest technologies. Additionally, skilled in
            building desktop and mobile applications. A hardworking individual
            who is continuously evolving and able to work both independently and
            as part of a team
            <hr className="dashed-hr" />
            Birthday: <del>ask me by email</del>
            <hr className="dashed-hr" />
            Location: Kabupaten Tangerang - Banten
            <hr className="dashed-hr" />
            Hobbies: Playing eFootball & Drawing or sketching
            <hr className="dashed-hr" />
          </div>
          <div className="bubble4">
            <span className="the-arrow4"></span>
            Fullstack Developer - PT. Ching Luh Indonesia Oct 2017 - Present
            <hr className="dashed-hr" />
            Fullstack Developer - Freelance offering custom program development
            services Oct 2015 - Present
            <hr className="dashed-hr" />
            Web Developer & Digital Marketing - DacoreDesign Jun 2017 - Aug 2017
            <hr className="dashed-hr" />
            IT Programmer - PT. Larona prima Solution Feb 2017 - May 2017
            <hr className="dashed-hr" />
          </div>
          <div className="bubble5">
            <span className="the-arrow5"></span>
            Universitas Pamulang (S2)
            <br />
            Master's Degree/Post Graduate Degree in Computer Science/Information
            Technology | Indonesia
            <br />
            2020 - 2022, GPA 3.93/4.0
            <br />
            <hr className="dashed-hr" />
            Universitas Pamulang (S1) <br />
            Bachelor's Degree in Computer Science/Information Technology |
            Indonesia
            <br />
            2012 - 2016, GPA 3.72/4.0
          </div>
          <div className="bubble6">
            <span className="the-arrow6"></span>
            CREATIVITY & INNOVATIVE
            <hr className="dashed-hr" />
            COMMUNICATION
            <hr className="dashed-hr" />
            TEAMWORK
            <hr className="dashed-hr" />
          </div>
          <div className="bubble7">
            <span className="the-arrow7"></span>
            Laravel 11
            <hr className="dashed-hr" />
            CodeIgniter 3<hr className="dashed-hr" />
            Node.Js (React.Js & Next.Js)
            <hr className="dashed-hr" />
            Java Netbean
            <hr className="dashed-hr" />
            Flutter
            <hr className="dashed-hr" />
            GoLang
            <hr className="dashed-hr" />
            Python & Flask
            <hr className="dashed-hr" />
            Delphi
            <hr className="dashed-hr" />
            Web Design (Figma, css, js, Bootstrap & jquery )
            <hr className="dashed-hr" />
          </div>
          <div className="bubble8">
            <span className="the-arrow8"></span>
            Email: muhamadrodin@gmail.com
            <hr className="dashed-hr" />
            Telepon: <del>ask me by email</del>
            <hr className="dashed-hr" />
            LinkedIn: linkedin.com/in/muhamadrodin
            <hr className="dashed-hr" />
            GitHub: rodinmuhamad.github.io
            <hr className="dashed-hr" />
            Instagram: https://www.instagram.com/muhamadrodin
            <hr className="dashed-hr" />
            X: https://x.com/muhamadrodin
            <hr className="dashed-hr" />
            Business: rodinproject.github.io
            <hr className="dashed-hr" />
          </div>
        </div>
      </div>
  );
};

export default MyProfile;
