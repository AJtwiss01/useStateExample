import React, { useState, useEffect } from "react";

import {
  Form,
  Label,
  Textarea,
  Button,
  Title
} from "../components/feedback.styles";

const FeedBackEffect = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    async function getStarWarsQuote() {
      // Get initial text
      const response = await fetch(
        "https://starwars-quote-proxy-gi0d3x1lz.now.sh/api/randomQuote"
      );
      const data = await response.json();
      const quote = data.starWarsQuote;
      setText(quote);
    }
    getStarWarsQuote();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Submitting response to API: "${text}"`);
    setText("");
  };

  // Update text in state onchange for textarea
  const handleTextChange = e => {
    const updatedText = e.target.value;

    setText(updatedText);
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Title>Effect Example</Title>
      <Label>
        Have feedback for our team? <br /> Let us know here 👇
        <Textarea value={text} onChange={e => handleTextChange(e)} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FeedBackEffect;
