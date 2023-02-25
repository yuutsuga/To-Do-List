import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Return</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
		    <p>This is your task!</p>		
      </div>
    </>
  );
};

export default TaskDetails;
