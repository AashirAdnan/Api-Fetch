import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const githubApi = "https://api.github.com/users";

  const getData = async () => {
    const response = await fetch(githubApi);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto grid grid-cols-3 gap-3">
        {users?.map((item, index) => {
          return <SingleUser {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default ApiFetch;
