import React from "react";
import Logo from "./Logo";
function GithubAPI() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mt-3">
        <Logo />

        <h3 className="text text-white">Github Profile Search</h3>

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
  );
}

export default GithubAPI;
console.log(GithubAPI);
