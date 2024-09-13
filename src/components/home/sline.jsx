import "bootstrap/dist/css/bootstrap.min.css";
const Slineimge = () => {
  const handeNextImage = () => {};

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://api.vingroupcapitalfund.org/storage/images/August2024/IblMZ5bDIZFYnbb8V7lU.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://api.vingroupcapitalfund.org/storage/images/August2024/Z7EsdDuo9U6tJ6XXund3.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://api.vingroupcapitalfund.org/storage/images/August2024/T8NEOcwknevYkUgkSwJP.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://api.vingroupcapitalfund.org/storage/images/August2024/52ro23vM0fLJUQxtuPAH.jpg"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://api.vingroupcapitalfund.org/storage/images/August2024/NaeORIeIryTYpuEIQKRF.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only" onClick={handeNextImage}>
          Next
        </span>
      </a>
    </div>
  );
};
export default Slineimge;
