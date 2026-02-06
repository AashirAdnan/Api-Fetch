import React from "react";

const SingleUser = ({ avatar_url, login }) => {
  return (
    <>
      <div className="p-5 shadow-2xl rounded-2xl my-3">
        <div className="flex items-center flex-col">
          <img className="h-90 w-90 object-cover" src={avatar_url} alt="" />
          <h1>{login}</h1>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
