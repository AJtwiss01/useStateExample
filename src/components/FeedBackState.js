import React, { useState } from "react";

import {
  Form,
  Label,
  Textarea,
  Button,
  Title
} from "../components/feedback.styles";

const FeedBackState = () => {
  const [text, setText] = useState("");
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
      <Title>State Example</Title>
      <Label>
        Have feedback for our team? <br /> Let us know here 👇
        <Textarea value={text} onChange={e => handleTextChange(e)} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FeedBackState;
