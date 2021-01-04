import { Modal } from "antd";
import { ModalProps } from "antd/lib/modal";
import React, { useState } from "react";

type GeneralModalProps = ModalProps & {
  renderTrigger: (onOpen: () => void) => React.ReactNode;
};

const GeneralModal: React.FC<GeneralModalProps> = ({
  renderTrigger,
  children,
  ...modalProps
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Strategy Pattern */}
      {renderTrigger(() => setVisible(true))}

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

export default GeneralModal;
