import { useEffect, useState } from "react";
import Input from "./main";

const BASE_URL = "../src/cities.json";

function App() {
  const [citiesArray, setCitiesArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(citiesArray);


  useEffect(() => {
    const controller = new AbortController();
    setCitiesArray([]);
    if (!inputValue) return;

    const search = async () => {
      try {
        fetch(BASE_URL, { signal: controller.signal })
          .then((response) => response.json())
          .then((jsonArray) => {
            let temp = [];
            jsonArray.map((item) => {
              if (item.includes(inputValue)) {
                temp.push(item);
              }
              setCitiesArray(temp);
            });

            return () => controller.abort();
          });
          // console.log(citiesArray);
          
      } catch (error) {
        if (error.name !== "AbortError") alert(error.message);
      }
    };

    search();
  }, [inputValue]);

  return (
    <>
      <Input citiesArray={citiesArray} inputValue={inputValue} setInputValue={setInputValue}/>
    </>
  );
}

export default App;
