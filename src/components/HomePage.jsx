import React from "react";
import Bg from "../img/bg2.jpg";
const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Home Page</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          {/* <!-- Replace with your content --> */}
          <div className="border-dashed">
            {/* <img src={Bg} class="img-fluid" alt="..."></img> */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  <img src={Bg} class="d-block w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
