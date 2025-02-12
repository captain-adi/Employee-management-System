
import React from 'react';

const Header = ({userData}) => {
  return (
    <header className="bg-blue-600 text-white shadow-md header">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">{userData?.data?.name }</h1>
        <button type="button" className="btn-gradLogOut" onClick={()=>{
         localStorage.removeItem("loggedInUser");
          window.location.reload();
        }}>Log Out</button>
      </div>
    </header>
  );
};

export default Header;
