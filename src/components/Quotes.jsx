import React from "react";
import { useState, useEffect } from "react";

const Quotes = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return (
      <div className="mt-11 p-12">
        <div role="alert ">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Error: {error.message}</p>
          </div>
        </div>
      </div>
    );
    // return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-48">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-blue-400 h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-blue-400 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-blue-400 rounded"></div>
              <div class="h-4 bg-blue-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Quotes</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <ul className="grid grid-cols-1 md:grid-cols-3">
              {items.map((item) => (
                <li key={item.id}>
                  <div className=" grid-rows-{item.id} py-8 m-5 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    {/* <img src="" alt="Woman's Face"> */}

                    {/* <img
                      className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
                      src={item.img}
                      alt=""
                      srcset=""
                    /> */}
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          {item.quote}
                        </p>
                        <p className="text-gray-500 font-medium">
                          {item.author}
                        </p>
                      </div>
                      {/* <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Message
                      </button> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    );
  }
};

export default Quotes;
