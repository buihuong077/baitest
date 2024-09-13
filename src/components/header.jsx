const Header = () => {
  return (
    <div className=" max-w-[500px] w-[500px] flex justify-end items-center gap-[67px] bg-white border border-solid fixed z-20">
      <img
        className=" h-13 w-[85.1px]"
        src="https://vingroupcapitalfund.org/static/media/logo.c69a48792bf1d10689ba.png"
        alt=""
      />
      <div className="flex justify-end items-center mr-3 gap-2 text-sm">
        <span>Đăng ký</span>
        <span>Đăng nhập</span>
      </div>
    </div>
  );
};
export default Header;
