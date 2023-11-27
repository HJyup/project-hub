import {
  CheckCircle2,
  CircleDot,
  CircleSlash,
  MinusCircle,
} from "lucide-react";

import { TaskStatus } from "@/types/task";

const TaskStatusMapper = (status: TaskStatus) => {
  const statusIcons = {
    NotStarted: <CircleSlash size={16} />,
    Blocked: <MinusCircle size={16} />,
    InProgress: <CircleDot size={16} />,
    Completed: <CheckCircle2 size={16} />,
  };

  const statusNames = {
    NotStarted: "Not Started",
    Blocked: "Blocked",
    InProgress: "In Progress",
    Completed: "Completed",
  };

  return (
    <div className="flex gap-1 items-center text-zinc-700">
      {statusIcons[status]}
      <span>{statusNames[status]}</span>
    </div>
  );
};

export default TaskStatusMapper;
