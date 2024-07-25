import Heading from "./components/Heading";
import Body from "./components/Body";
import './App.css';
import { useState } from "react";

function App() {
  const [showAuthor,setshowAuthor]=useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content)
      setAuthor(data.author)
      setshowAuthor(true)
      console.log(data);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  }

  return (
    <>
      <Heading />
      <Body newquote={handleSubmit} quote={quote} author={author} showAuthor={showAuthor}/>
    </>
  );
}

export default App;
