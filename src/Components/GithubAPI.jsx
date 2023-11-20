import React, { Fragment } from "react";
import GithubProfile from "./GithubProfile";
import { Axios } from "axios";

const Logo = () => {
  return (
    <div
      className="flex pb-2 justify-center items-center "
      border-b
      border-gray-500
    >
      <img
        src="https://cdn0.iconfinder.com/data/icons/free-social-media-45/32/github_logo_social_media-256.png "
        className="w-24 rounded-full"
        alt="Github Logo"
      />
      <h1 className="text-white"> Github Users</h1>
    </div>
  );
};

class GithubAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profile: null,
      repos: null,
    };
  }
  updateInput = (e) => {
    this.setState((prevState)=>({
      ...prevState,
      username: e.target.value,
    }));
  };

  searchUser = (e) => {
    e.preventDefault();
    this.searchProfile();
  };

  searchProfile = () => {
    const{username}=this.state;
    if (!username){
      return;
    }
    Axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          profile: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:",error);
      });
  };

  render() {
    return (
      <Fragment>
        <pre>{JSON.stringify}(this.state)</pre>

        <div className="flex justify-center items-center h-screen">
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header bg-gray-900 text-white">
                    <Logo />

                    <h3 className="text text-white">Github Profile Search</h3>
                    <div className="card-body">
                      <form onSubmit={this.searchUser}>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="user name"
                            value={this.state.username}
                            onChange={this.updateInput}
                            className="text-black bg-white border-2 border-gray-300 px-4 py-2 rounded-md"
                          />
                          
                        </div>
                        
                        <div>
                          <input type="submit" value="Search" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col">
                {this.state.profile ? (
                  <GithubProfile profile={this.state.profile} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default GithubAPI;
