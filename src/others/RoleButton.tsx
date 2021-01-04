import { Button } from "antd";
import React from "react";
import "./index.css";
import { useRole } from "./RoleContext";

const RoleButton: React.FC<{ className?: string }> = ({ className }) => {
  const { role, setRole } = useRole();
  return (
    <Button
      onClick={() => setRole?.(role === "member" ? "admin" : "member")}
      className={className}
    >
      現在權限：{role}
    </Button>
  );
};

export default RoleButton;
