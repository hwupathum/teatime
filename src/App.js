import { Table, TableBody, TableCell, TableRow, Button, Typography } from "@mui/material";
import React from "react";
import QuizPage from "./Quiz";

const categories = ["Singers", "Scientists", "Actors", "Sportperson", "Politicians"];
const quizCount = 8;
const timer = 30;

function App() {
  const [quizMatrix, setQuizMatrix] = React.useState(Object.assign({}, ...categories.map((cat) => ({ [cat]: Array(quizCount).fill(false) }))));
  const [selectedQuiz, setSelectedQuiz] = React.useState(null);

  function getQuizRow(quizCount, category) {
    const row = []
    for (let index = 0; index < quizCount; index++) {
      row.push(
        <TableCell>
          <Button variant="contained" onClick={() => selectQuiz(category, index)} disabled={quizMatrix[category][index]}>
            {`Q ${index + 1}`}
          </Button>
        </TableCell>
      )
    }
    return row;
  }

  function selectQuiz(category, index) {
    const matrix = { ...quizMatrix }
    matrix[category][index] = true
    setQuizMatrix(matrix)
    setSelectedQuiz([category, index])
    console.log(quizMatrix[category][index])
  }

  console.log(quizMatrix);
  return (
    <div className="App">
      <Typography textAlign={"center"} variant="h4">
        Tea Time Game
      </Typography>
      {selectedQuiz ? (
        <>
          <Typography textAlign={"center"} variant="h6">
            {selectedQuiz[0]} -  Question {selectedQuiz[1] + 1}
          </Typography>
          <QuizPage category={selectedQuiz[0]} quizNumber={selectedQuiz[1]} setSelectedQuiz={setSelectedQuiz} timer={timer}/>
        </>
      ) : (
        <Table style={{ marginTop: 30 }}>
          <TableBody>
            {categories.map(cat =>
              <TableRow>
                <TableCell>
                  {cat}
                </TableCell>
                {getQuizRow(quizCount, cat)}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default App;
