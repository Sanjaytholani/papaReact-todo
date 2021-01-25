import { useEffect, useState } from "react";
import "./Quote.css";
function Quote() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    const getQuote = async () => {
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) =>
          setQuote(data[Math.floor(Math.random() * (data.length - 1))])
        );
    };
    getQuote();
  }, []);
  return (
    <div className="quote">
      <i className="quote__text">{quote.text}</i>
      <p className="quote__author">{quote.author}</p>
    </div>
  );
}

export default Quote;
