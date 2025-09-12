import React from "react";
import "./header.css";
import "bootstrap";
import WebsitePhone from "./WebsitePhone.png";

function header() {
  return (
    <div className="container-fluid">
      <div className="mainHead">
        <div className="heading">37BASE</div>
        <h2>Station 37 Checklist App</h2>
        <p>
          This app is only for crew members from NSRI Station 37. The login
          details will only be shared with the crew.
          <br />
          Download the app below
        </p>
        <div className="submit-container">
          <div className="download andriod">Andriod</div>
          <div className="download ios">IOS</div>
        </div>
        <img src={WebsitePhone} alt="Mockup" width={600} />
      </div>
    </div>
  );
}
export default header;
