import { Button } from "antd";
import React from "react";
import { useRole } from "../others/RoleContext";
import Modal from "./Modal";

const planStrategy: (props: { onOpen: () => void }) => React.ReactNode = ({
  onOpen,
}) => {
  const { role } = useRole();
  if (role === "member") {
    return "error";
  }

  return <Button onClick={onOpen}>Start</Button>;
};

const LoginModal: React.FC<{}> = ({ children }) => {
  return (
    <Modal
      centered
      renderTriggerStrategy={function setStrategy(onOpen) {
        return planStrategy({ onOpen });
      }}
    >
      {children}
    </Modal>
  );
};

export default LoginModal;
