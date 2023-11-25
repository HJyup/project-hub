import {
  CheckCircle2,
  CircleDot,
  CircleSlash,
  MinusCircle,
} from "lucide-react";

import { TaskStatus } from "@/types/task";

const TaskStatusMapper = (status: TaskStatus) => {
  const statusIcons = {
    "Not Started": <CircleSlash size={16} />,
    Blocked: <MinusCircle size={16} />,
    "In Progress": <CircleDot size={16} />,
    Completed: <CheckCircle2 size={16} />,
  };

  const icon = statusIcons[status] || <CircleSlash size={16} />;

  return (
    <div className="flex gap-1 items-center text-zinc-700">
      {icon}
      <span>{status}</span>
    </div>
  );
};

export default TaskStatusMapper;
