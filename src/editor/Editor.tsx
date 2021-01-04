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
      <Input.TextArea
        value={props.content}
        onChange={(e) => props.setContent?.(e.target.value)}
      />
      <Button onClick={() => props.setState("check")}>發布</Button>
    </>
  );
};
const CheckState: React.FC<StateProps> = (props) => {
  const { role } = useRole();

  if (role === "member") {
    return (
      <div>
        <Step step={1} />
        <span>審核中...</span>
      </div>
    );
  }

  return (
    <>
      <Step step={1} />
      <Alert type="info" message={props.content} />
      <ButtonGroup>
        <Button onClick={() => props.setState("published")}>通過</Button>
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
      <Step step={2} />
      <Alert type="success" message={props.content} />
      <ButtonGroup>
        <Button onClick={() => props.setState("archived")}>封存</Button>
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
      <Step step={4} />
      <Alert type="warning" message={props.content} />
      <ButtonGroup>
        <Button onClick={() => props.setState("published")}>重新發布</Button>
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
    archived: ArchivedState
    // error: ErrorState
  };

  return StateSwitcher[state]({
    content: props.content,
    setContent: props.setContent,
    setState
  });
};

export default Editor;
