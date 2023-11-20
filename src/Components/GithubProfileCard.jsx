import React from "react";
class GithubProfileCard extends React.Component{
  constructor(props){
    super(props);
  }

render(){
  let{login, avatar_url, html_url} = this.props.profile;
  return(
    <div>
        {<pre>{JSON.stringify(this.props.profile)}</pre>}
        <div className="card">
          <img src={avatar_url} alt=""className="img-fluid"/>
          <div className="card-body">
            <h3 className="card-title">{login}</h3>
            <a href={html_url} target="_blank"className="btn btn-success btn-sm"></a>

          </div>
        </div>
    </div>
  );
}
}
export default GithubProfileCard;