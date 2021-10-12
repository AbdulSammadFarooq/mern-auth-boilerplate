import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/EditProfile.css"
// import '../../src/App.css';
const EditProfile = () => {
  return (
    <div className="editProfile">
      <div className="editProfile-wrapper bg-white mt-sm-5">
        <h4 className="pb-4 border-bottom editProfile-h4">Account settings</h4>
        <div className="d-flex align-items-start py-3 border-bottom">
          <img
            src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="img"
            alt=""
          />
          <div className="pl-sm-4 pl-2" id="img-section">
            <b>Profile Photo</b>
            <p>Accepted file type .png. Less than 1MB</p>
            <button className="btn button border">
              <b>Upload</b>
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="row py-2">
            <div className="col-md-12">
              <label for="firstname" className="editProfile-label">
                Full Name
              </label>
              <input
                type="text"
                className="bg-light form-control editProfile-form-control"
                placeholder="Steve"
              />
            </div>
          </div>
          <div className="row py-2">
            <div className="col-md-12">
              <label for="email" className="editProfile-label">
                Email Address
              </label>
              <input
                type="text"
                className="bg-light form-control editProfile-form-control"
                placeholder="steve_@email.com"
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-md-12">
              <label for="email" className="editProfile-label">
                Phone Number
              </label>
              <input
                type="text"
                className="bg-light form-control editProfile-form-control"
                placeholder="steve_@email.com"
              />
            </div>
          </div>

          <div className="row py-2">
            <div className="col-md-12">
              <label for="email" className="editProfile-label">
                Password
              </label>
              <input
                type="text"
                className="bg-light form-control editProfile-form-control"
                placeholder="steve_@email.com"
              />
            </div>
          </div>

          <div className="py-3 pb-4 border-bottom">
            <button className="btn btn-primary mr-3 editProfile-button">
              Save Changes
            </button>
            <button className="btn border button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
