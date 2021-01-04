import { Steps } from "antd";
import React from "react";

const Step: React.FC<{ step: number; className?: string }> = ({
  step,
  className,
}) => {
  return (
    <Steps current={step} className={className}>
      {["草稿", "審核", "公開", "封存"].map((v) => (
        <Steps.Step title={v} />
      ))}
    </Steps>
  );
};

export default Step;
