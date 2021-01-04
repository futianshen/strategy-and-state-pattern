import {
  DeleteOutlined,
  EditOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import React from "react";
import Modal from "./Modal";

const editorStrategy: (props: {
  hasContent: boolean;
  onOpen: () => void;
  onClear: () => void;
}) => React.ReactNode = ({ hasContent, onOpen, onClear }) => {
  if (hasContent) {
    return (
      <ButtonGroup>
        <Button onClick={onOpen} icon={<EditOutlined />} className="mr-2">
          Edit
        </Button>
        <Button onClick={onClear} icon={<DeleteOutlined />}>
          Clear
        </Button>
      </ButtonGroup>
    );
  }

  return (
    <Button onClick={onOpen} icon={<FileAddOutlined />}>
      Create
    </Button>
  );
};

const EditorModal: React.FC<{
  hasContent: boolean;
  onClear: () => void;
}> = ({ hasContent, onClear, children }) => {
  return (
    <Modal
      centered
      renderTriggerStrategy={function setStrategy(onOpen) {
        return editorStrategy({ hasContent, onOpen, onClear });
      }}
    >
      {children}
    </Modal>
  );
};

export default EditorModal;
