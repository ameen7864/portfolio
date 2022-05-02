import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Qualification</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Marticulation</h1>
          <h3 className="position"> </h3>
          <h4 className="about">
            Cambridge Public High School
            <p> Mar 09 - Apr 10 </p>
          </h4>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Intermediate</h1>
          <h3 className="position">Science </h3>
          <h4 className="about">
            SRML Higher Secondary School
            <p>Apr 11 - May 12</p>
          </h4>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">B.E Mechanical</h1>
          <h3 className="position">university of jammu</h3>
          <h4 className="about">
            Bachelor of Engineering, Mechanical Engineering
            <p>Jul 13 - Jul 17</p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Members;
