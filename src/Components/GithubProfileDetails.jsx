import React from "react";
class GithubProfileDetails extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  let {followers,following,repos,location,dateOfJoining}=this.props.profile;
  return(
    <div>
      <div className="card">
        <div className="card-header bg-light">
          

<span className="badge badge-primary mx-2">{followers}Followers</span>

<span className="badge badge-success mx-2">{repos}Repos</span>

<span className="badge badge-influence mx-2">{following}Following</span>


<span className="badge badge-adress mx-2">{location}Location</span>

<span className="badge badge-timing mx-2">{dateOfJoining}Date of Joining</span>




        </div>

      </div>
      
      <br />
    </div>
  );
}
}
export default GithubProfileDetails;