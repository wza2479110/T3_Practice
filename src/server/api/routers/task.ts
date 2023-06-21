import { createTRPCRouter } from "~/server/api/trpc";
import showTasks from "./taskHelpers";
import createTask from "./taskHelpers/create";
import deleteTask from "./taskHelpers/deleteTask";
import toggleCompleted from "./taskHelpers/toggleCompleted";

export const taskRouter = createTRPCRouter({
  // allow displaytask
  index: showTasks,
  // allow add tasks
  create: createTask,
  // allow delete tasks
  delete: deleteTask,
  // allow toggle completed task from incompleted tasks list
  toggleCompleted: toggleCompleted,
});
