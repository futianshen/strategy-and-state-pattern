import { Steps } from "antd";
import React from "react";

const Step: React.FC<{ step: number }> = ({ step }) => {
  return (
    <Steps current={step}>
      {["Draft", "Check", "Published", "Archived"].map((v) => (
        <Steps.Step title={v} />
      ))}
    </Steps>
  );
};

export default Step;
