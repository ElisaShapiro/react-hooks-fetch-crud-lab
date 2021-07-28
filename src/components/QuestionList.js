import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  const questionsDisplay = questions.map((question) => {
    return <QuestionItem key={question.id} question={question}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsDisplay}</ul>
    </section>
  );
}

export default QuestionList;
