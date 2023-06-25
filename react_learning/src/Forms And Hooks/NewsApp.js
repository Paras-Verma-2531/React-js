// NewsApp component which displays the news fetched from API:

// used https://newsapi.org/ for the news API:
import React, { useEffect, useRef, useState } from "react";
import News from "./News";

function NewsApp() {
  const apiKey = "f2846fd3e8be4141925775ab566097f4";
  const [newsList, setList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const queryValue = useRef(null);
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-05-21&sortBy=publishedAt&apiKey=${apiKey}`;
  //map over the list and store the updated list in another var:
  const mappedList = newsList.map((news) => {
    return (
      <>
        {/* returns the JSX COMPONENT FOR EACH NEWS:: */}
        <News
          image={news.urlToImage}
          title={news.title}
          description={news.description}
        />
      </>
    );
  });
  //call the useEffect hook for API to fetch data
  useEffect(() => {
    fetchData();
  }, [query]);
  // asyn function to fetch data
  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      // to extract the JSON body content from the Response object, we use the json()
      const jsonData = await response.json();
      setList(jsonData.articles);
    } catch (error) {
      console.log(error, " error occured");
    }
  }
  //handleSub,it function
  function handleSubmit() {
    setQuery(queryValue.current.value);
  }
  return (
    <>
      <div className="searchBar">
        <input type="text" ref={queryValue} placeholder="tesla" />
        <button type="submit" onClick={handleSubmit} value="fifa">
          Submit
        </button>
      </div>
      <div className="news-container">
        {/* mappedList contains array of jxs component */}
        {mappedList}
      </div>
    </>
  );
}
export default NewsApp;
