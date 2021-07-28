import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(questionData => setQuestions(questionData))
  }, []);

  function handleDeleteQuestion(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => {
      const deletedQuestions = questions.filter((question) => question.id !== id)
      setQuestions(deletedQuestions)
    })
  }

  function handleChangeAnswer(id, correctIndex){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        correctIndex
      })
    }).then(response => response.json())
    .then((updatedQuestion) => {
      const updatedQuestions = questions.map((question) => {
        if (question.id === updatedQuestion.id) return updatedQuestions
        return question
      })
      setQuestions(updatedQuestions)
    })
  }
    // function onChangeAnswer(){
  //   let updatedQuestions = questions.map((question) => {
  //     if (question.id === updatedQuestion.id) {
  //       return updatedQuestions;
  //     } else return question
  //   })
  //   setQuestions(updatedQuestions)
  // }
  
  const questionsDisplay = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion} handleChangeAnswer={handleChangeAnswer}/>
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsDisplay}</ul>
    </section>
  );
}

export default QuestionList;
