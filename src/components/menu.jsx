import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  const handleClickHome = () => {
    navigate("/"); // Điều hướng về trang chủ "/"
  };
  const handleClick = () => {
    navigate("/projects"); // Điều hướng về trang chủ "/"
  };
  return (
    <div className="max-w-[500px] w-[500px] flex justify-center items-center gap-[70px] bg-white border border-solid fixed z-20 bottom-0">
      <div className="flex flex-col items-center " onClick={() => handleClickHome("/")}>
        <span>
          <i class="fa-solid fa-house text-3xl"></i>
        </span>
        <span className="text-sm">Trang chủ</span>
      </div>
      <div className="flex flex-col items-center" onClick={() => handleClick("/projects")}>
        <span>
          <i class="fa-solid fa-book text-3xl"></i>
        </span>
        <a href="/projects" className="text-sm">
          Dự án
        </a>
      </div>
      <div className="flex flex-col items-center">
        <span>
          <i class="fa-solid fa-comment-dots text-3xl"></i>
        </span>
        <span className="text-sm">CSKH</span>
      </div>
      <div className="flex flex-col items-center">
        <span>
          <i class="fa-solid fa-user text-3xl"></i>
        </span>
        <span className="text-sm">Của tôi</span>
      </div>
    </div>
  );
};
export default Menu;
