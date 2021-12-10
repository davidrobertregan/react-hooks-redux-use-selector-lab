import React from "react";
import { useSelector } from "react-redux"
import usersReducer from "./usersSlice";

function Users() {
  
  const usersArr = useSelector(state => state.users)
  console.log(usersArr)

  return (
    <div>
      <ul>
        Users!
        {usersArr.map(u => <li>{u.username}</li>)}
        {<li>{usersArr.length}</li>}
      </ul>
    </div>
  );
}

export default Users;
