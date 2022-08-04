import React, { useState, useEffect } from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

function App() {
  const API_KEY = "29041557-7dba1ef7f573f4cb2926a525a";
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Header />

      <div className="dark:bg-slate-800 transition duration-200 min-h-screen">
        <div className="container px-5 py-4 mx-auto">
          <ImageSearch searchText={(text) => setTerm(text)} />
          {!isLoading && images.length === 0 && (
            <h1 className="text-5xl font-bold text-center mx-auto mt-18 dark:text-white">
              No Images Found
            </h1>
          )}

          {isLoading ? (
            <h1 className="text-5xl font-bold text-center mx-auto mt-18 dark:text-white">
              Loading...
            </h1>
          ) : (
            <div className="flex flex-wrap -m-4 mb-4">
              {images.map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
