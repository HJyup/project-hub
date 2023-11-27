import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";

import { TaskPriority } from "@/types/task";

const TaskPriorityMapper = (priority: TaskPriority) => {
  const priorityMap = {
    1: {
      icon: <ArrowDown size={16} />,
      label: "Low",
    },
    2: {
      icon: <ArrowRight size={16} />,
      label: "Medium",
    },
    3: {
      icon: <ArrowUp size={16} />,
      label: "High",
    },
  };

  const { icon, label } = priorityMap[priority];

  return (
    <div className="flex gap-1 items-center text-zinc-700">
      {icon}
      {label}
    </div>
  );
};

export default TaskPriorityMapper;
