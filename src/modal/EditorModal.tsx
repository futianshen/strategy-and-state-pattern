import {
  DeleteOutlined,
  EditOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import React from "react";
import GeneralModal from "./GeneralModal";

const editorStrategy: (props: {
  hasContent: boolean;
  onOpen: () => void;
  onClear: () => void;
}) => React.ReactNode = ({ hasContent, onOpen, onClear }) => {
  if (hasContent) {
    return (
      <ButtonGroup>
        <Button onClick={onOpen} icon={<EditOutlined />}>
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
    <GeneralModal
      renderTrigger={(onOpen) =>
        editorStrategy({ hasContent, onOpen, onClear })
      }
      // renderTrigger={(onOpen) => {
      //   if (hasContent) {
      //     return (
      //       <ButtonGroup>
      //         <Button onClick={onOpen} icon={<EditOutlined />}>
      //           Edit
      //         </Button>
      //         <Button onClick={onClear} icon={<DeleteOutlined />}>
      //           Clear
      //         </Button>
      //       </ButtonGroup>
      //     );
      //   }

      //   return (
      //     <Button onClick={onOpen} icon={<FileAddOutlined />}>
      //       Create
      //     </Button>
      //   );
      // }}
    >
      {children}
    </GeneralModal>
  );
};

export default EditorModal;
