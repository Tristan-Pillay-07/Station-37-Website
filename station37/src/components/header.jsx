import React from "react";
import "./header.css";
import "bootstrap";
import WebsitePhone from "./WebsitePhone.png";
import inImage from "./inImage.jpeg";

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
          (Currently unavailable for IOS)
          <br />
          Download the app below
        </p>
        <div className="submit-container">
          <div className="download-buttons">
            <a href="./com.ShadowWolf.x37base_app.apk" className="download">
              <div>Android</div>
            </a>
            <div className="downloadIos">iOS</div>
          </div>
          <img src={WebsitePhone} alt="Mockup" width={600} />
        </div>
      </div>

      <div className="instructions-container">
        <h2>Installation Instructions</h2>
        <img src={inImage} alt="Installation" width={300} />
        <p className="paragraph">
          1. Open the Settings app on your device.
          <br />
          2. Go to Apps & notifications (or similar, e.g., "Apps" then tap the
          three-dot menu).
          <br />
          3.Tap Special app access.
          <br />
          4. Select Install unknown apps.
          <br />
          5. Find and tap the app you'll use to download or open the APK (e.g.,
          Chrome, a file manager).
          <br />
          6. Toggle on the Allow from this source option.
        </p>
      </div>
    </div>
  );
}
export default header;
