import React from "react";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubProfileCard from "./GithubProfileCard";
class GithubProfile extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {
              object.keys(this.props).length !==0?
              <GithubProfileCard profile={this.props.profile}/> : null
            }    
            </div>
            <div className="col-md-5">
              {
                object.keys(this.props.profile).length !==0?
            <GithubProfileDetails profile={this.props.profile}/> : null
              }
            </div>
          </div>
        </div>
      </div>
    
  );
}
}
export default GithubProfile;
