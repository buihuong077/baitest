const Popular = () => {
  return (
    <div className="mt-[30px] flex justify-center items-center flex-col gap-3">
      <span className="text-2xl">Phổ biến</span>
      <div className="m-3 p-3">
        <img
          className="border-none rounded-xl"
          src="https://api.vingroupcapitalfund.org/storage/projects/August2024/vA6T6zRmldgCOY5nkg7F.jpg"
          alt=""
        />
        <p className="text-2xl font-bold pt-4 pb-4">Quỹ phát triển giáo dục liên cấp</p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-red-600 text-2xl">2.95 %</span>
            <span>Lợi nhuận</span>
          </div>
          <div className="flex flex-col">
            <span className="text-red-600 text-2xl">2.000.000 đ</span>
            <span>Số tiền gửi </span>
          </div>
        </div>
        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-2">
            <span>Quy mô dự án:</span>
            <span className="text-red-600 text-base font-bold">287.245.124.000 ₫</span>
          </div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Gửi tiền ngay
          </button>
        </div>
        <div>
          <span className="w-full h-3 text-gray-300 mb-20"></span>
        </div>
      </div>

      <div className="m-3 p-3">
        <img
          className="border-none rounded-xl"
          src="https://api.vingroupcapitalfund.org/storage/projects/August2024/vA6T6zRmldgCOY5nkg7F.jpg"
          alt=""
        />
        <p className="text-2xl font-bold pt-4 pb-4">Quỹ phát triển giáo dục liên cấp</p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-red-600 text-2xl">2.95 %</span>
            <span>Lợi nhuận</span>
          </div>
          <div className="flex flex-col">
            <span className="text-red-600 text-2xl">2.000.000 đ</span>
            <span>Số tiền gửi </span>
          </div>
        </div>
        <div className="flex justify-between mt-4 items-center">
          <div className="flex gap-2">
            <span>Quy mô dự án:</span>
            <span className="text-red-600 text-base font-bold">287.245.124.000 ₫</span>
          </div>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Gửi tiền ngay
          </button>
        </div>
        <div>
          <span className="w-full h-3 text-gray-300 mb-20"></span>
        </div>
      </div>
    </div>
  );
};
export default Popular;
