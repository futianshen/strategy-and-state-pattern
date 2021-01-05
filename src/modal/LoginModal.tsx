import { Button } from "antd";
import React from "react";
import Modal from "./Modal";

const loginStrategy: (props: { onOpen: () => void }) => React.ReactNode = ({
  onOpen,
}) => {
  return <Button onClick={onOpen}>Login</Button>;
};

const LoginModal: React.FC<{}> = ({ children }) => {
  return (
    <Modal
      centered
      renderTriggerStrategy={function setStrategy(onOpen) {
        return loginStrategy({ onOpen });
      }}
    >
      {children}
    </Modal>
  );
};

export default LoginModal;
