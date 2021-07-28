import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(response => response.json())
    .then(questionData => setQuestions(questionData))
  }, []);

  function addQuestion(newQuestion){
    const updatedQuestions = [...questions, newQuestion]
    setQuestions(updatedQuestions)
  }

  function handleDeleteQuestion(id){
    let deletedQuestion = questions.filter((question) => {
      if (question.id !== id)
        return true
    })
    setQuestions(deletedQuestion)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion} /> : <QuestionList questions={questions} handleDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
