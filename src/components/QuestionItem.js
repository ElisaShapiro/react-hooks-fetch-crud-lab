import React from "react";

function QuestionItem({ question, handleDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers ? answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  )) : null; 
  //getting errors after set up form on this mapping - need this in order for initial load so that when no answers to map through its null

  function onDeleteQuestion(){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    handleDeleteQuestion(question.id)
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
