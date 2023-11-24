import React from "react";
function GithubProfile({ userProfile }) {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 text-white p-4 rounded-lg">
      <img
        src={userProfile.avatar_url}
        alt="Profile Pic"
        className="rounded-full w-50 h-50 mb-2"
      />

      <h1 className="text-3x1 font-bold text-blue mb-1">{userProfile.login}</h1>

      <p className="text-sm">
        {" "}
        <a href={userProfile.html_url} target="_blank" rel="">
          {userProfile.login}
        </a>
      </p>

      <p className="text-sm"> Followers:{userProfile.followers}</p>
    </div>
  );
}
export default GithubProfile;
