import { Alert, Button, Input } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import React, { useState } from "react";
import { useRole } from "../others/RoleContext";
import Step from "../others/Step";

type PostProps = {
  content: string;
  setContent?: React.Dispatch<React.SetStateAction<string>>;
};

type PostState = "draft" | "check" | "published" | "archived";

type StateProps = PostProps & {
  setState: React.Dispatch<React.SetStateAction<PostState>>;
};

const DraftState: React.FC<StateProps> = (props) => {
  return (
    <>
      <Step step={0} />
      <div className="my-3">
        <Input.TextArea
          value={props.content}
          onChange={(e) => props.setContent?.(e.target.value)}
          className="my-3"
        />
      </div>
      <Button onClick={() => props.setState("check")}>發布</Button>
    </>
  );
};
const CheckState: React.FC<StateProps> = (props) => {
  const { role } = useRole();

  if (role === "member") {
    return (
      <>
        <Step className="mb-3" step={1} />
        <div className="my-3">審核中...</div>
      </>
    );
  }

  return (
    <>
      <Step className="mb-3" step={1} />
      <div className="my-3">
        <Alert type="info" message={props.content} />
      </div>
      <ButtonGroup>
        <Button onClick={() => props.setState("published")} className="mr-2">通過</Button>
        <Button onClick={() => props.setState("draft")} danger>
          不通過
        </Button>
      </ButtonGroup>
    </>
  );
};
const PublishState: React.FC<StateProps> = (props) => {
  return (
    <>
      <Step className="mb-3" step={2} />
      <div className="my-3">
        <Alert type="success" message={props.content} />
      </div>
      <ButtonGroup>
        <Button onClick={() => props.setState("archived")} className="mr-2">封存</Button>
        <Button onClick={() => props.setState("draft")} danger>
          取消發布
        </Button>
      </ButtonGroup>
    </>
  );
};
const ArchivedState: React.FC<StateProps> = (props) => {
  return (
    <>
      <Step className="mb-3" step={4} />
      <div className="my-3">
        <Alert type="warning" message={props.content} />
      </div>
      <ButtonGroup>
        <Button onClick={() => props.setState("published")} className="mr-2">重新發布</Button>
        <Button onClick={() => props.setState("draft")} danger>
          重新修改
        </Button>
      </ButtonGroup>
    </>
  );
};

// State Pattern
const Editor: React.FC<PostProps> = (props) => {
  const [state, setState] = useState<PostState>("draft");

  const StateSwitcher = {
    draft: DraftState,
    check: CheckState,
    published: PublishState,
    archived: ArchivedState,
    // error: ErrorState
  };

  return StateSwitcher[state]({
    content: props.content,
    setContent: props.setContent,
    setState,
  });
};

export default Editor;
