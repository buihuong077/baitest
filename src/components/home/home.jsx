import Popular from "./popular";
import Slineimge from "./sline";

const Home = () => {
  return (
    <div className="max-w-[500px] border border-solid pt-[108px] pl-4 pr-4">
      <Slineimge />
      <div>
        <div className="flex justify-center gap-6 mt-5 mb-4">
          <div>
            <div className="border border-solid w-[103px] h-[72px] relative rounded-2xl mb-2">
              <i class="fa-solid fa-layer-group text-3xl absolute mt-3 ml-[34px] text-red-500"></i>
            </div>
            <span className="text-sm">Hồ sơ công ty</span>
          </div>
          <div>
            <div className="border border-solid w-[103px] h-[72px] relative rounded-2xl mb-2">
              <i class="fa-solid fa-money-check-dollar text-3xl absolute mt-3 ml-[36px] text-red-500"></i>
            </div>
            <span className="text-sm">Tôi muốn gửi tiền</span>
          </div>
          <div>
            <div className="border border-solid w-[103px] h-[72px] relative rounded-2xl mb-2">
              <i class="fa-regular fa-money-bill-1 text-3xl absolute mt-3 ml-[36px] text-red-500"></i>
            </div>
            <span className="text-sm">Tôi muốn rút tiền</span>
          </div>
        </div>

        <div className="flex gap-1">
          <span>
            <i class="fa-solid fa-bullhorn text-red-600 text-2xl"></i>
          </span>
          <marquee>
            <strong>Chào mừng bạn đến với dự án của tập đoàn Vingroup</strong>
          </marquee>
        </div>
      </div>
      <Popular />
    </div>
  );
};
export default Home;
