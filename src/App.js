import Header from "./components/Header/Header";
import GalleryS from "./components/Gallery/Gallery";
import { ImageData } from "./data/imagedate";
import baseUrl from "../src/utility/baseUrl";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import GlobalStyle from "./globalStyles";
function App() {
  const [pins, setNewPins] = useState([]);
  const getImages = (term) => {
    return baseUrl.get("", {
      params: {
        query: term,
      },
    });
  };
  const onSearch = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;
      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  // const getNewPins = () => {
  //   let promises = [];
  //   let pinData = [];
  //   //selection of different pin data
  //   let pins = ["cars", "professional", "all"];

  //   pins.forEach((category) => {
  //     promises.push(
  //       getImages(category).then((res) => {
  //         let results = res.data.results;

  //         pinData = pinData.concat(results);

  //         pinData.sort(function (a, b) {
  //           return 0.5 - Math.random();
  //         });
  //       })
  //     );
  //   });
  //   Promise.all(promises).then(()=>{
  //     setNewPins(pinData);
  //   })
  // };

  // const getNewPins = () => {
  //   let images = ImageData;

  //   images.sort((a, b) => {
  //     return 0.5 - Math.random();
  //   });
  //   setNewPins(images)
  // };

  const getNewPins = () => {
    axios
      .get("https://josh-imageserver.herokuapp.com/image/v1/all/images")
      .then((response) => {
        let images = response.data;
        console.log(images);
        images.sort((a, b) => {
          return 0.5 - Math.random();
        });
        setNewPins(images);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getNewPins();
  }, []);
  return (
    <div className="app">
      <GlobalStyle />
      <Header onSearch={onSearch} />
      <GalleryS Imgdata={ImageData} pins={pins} />
    </div>
  );
}

export default App;
