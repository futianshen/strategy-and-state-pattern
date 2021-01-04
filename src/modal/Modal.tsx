import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";
import React, { useState } from "react";

type ModalContextProps = ModalProps & {
  renderTriggerStrategy: (onOpen: () => void) => React.ReactNode;
};

const ModalContext: React.FC<ModalContextProps> = ({
  renderTriggerStrategy,
  children,
  ...modalProps
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Strategy Pattern */}
      {renderTriggerStrategy(() => setVisible(true))}

      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        {...modalProps}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalContext;
