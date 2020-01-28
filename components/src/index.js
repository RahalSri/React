import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          date="Today at 6.00 PM"
          comment="Nice Blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          date="Today at 9.00 PM"
          comment="Nice Blog!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="David"
          date="Today at 5.00 PM"
          comment="Nice Blog!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
