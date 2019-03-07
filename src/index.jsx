import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          imgUrl={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={"Today at 8:00PM"}
          content={faker.lorem.text()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imgUrl={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={"Today at 8:00PM"}
          content={faker.lorem.text()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imgUrl={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={"Today at 8:00PM"}
          content={faker.lorem.text()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
