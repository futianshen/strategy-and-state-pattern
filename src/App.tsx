import React, { useState } from "react";
import Editor from "./editor/Editor";
import EditorModal from "./modal/EditorModal";
import "./others/index.css";
import RoleButton from "./others/RoleButton";



function App() {
  const [content, setContent] = useState("我是需要被編輯的內容");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <RoleButton className="mb-3" />

      <EditorModal hasContent={!!content.length} onClear={() => setContent("")}>
        <Editor content={content} setContent={setContent} />
      </EditorModal>
    </div>
  );
}

export default App;
