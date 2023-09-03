import clsx from "clsx";
import Timer from "@/app/Timer";
import { DateTime, Duration } from "luxon";

function Subtask({ title, finished = false, subtasks = [] }) {
  return (
    <div
      className={clsx(
        "p-1",
        finished ? "text-slate-400 line-through" : "text-slate-900"
      )}
    >
      <label>
        <input type="checkbox" checked={finished} /> {title}
      </label>
      <div class="ml-4">
        {subtasks.map((subtask, index) => (
          <Subtask
            key={index}
            title={subtask.title}
            finished={subtask.finished}
          />
        ))}
      </div>
    </div>
  );
}

function Task({ title, status, createdAt, finishedAt, subtasks = [] }) {
  return (
    <div className="border-2 border-slate-500 mb-1">
      {(createdAt || finishedAt) && (
        <div className="bg-slate-300">
          {createdAt && <span>Created: {createdAt}</span>}&nbsp;
          {finishedAt && <span>Finished: {finishedAt}</span>}
        </div>
      )}
      <div
        className={clsx(
          "p-1 font-bold",
          status === "finished"
            ? "text-slate-400 line-through"
            : "text-slate-900",
          status === "most-important" ? "text-3xl" : "text-lg"
        )}
      >
        {title}
      </div>
      <div class="">
        {subtasks.map((subtask, index) => (
          <Subtask
            key={index}
            title={subtask.title}
            finished={subtask.finished}
            subtasks={subtask.subtasks}
          />
        ))}
      </div>
    </div>
  );
}

function TaskInput({}) {
  return (
    <>
      <textarea
        placeholder="Add New Task"
        className="border-2 border-slate-400 p-2 w-full"
      ></textarea>
    </>
  );
}

export default function Home() {
  const tasks = [
    {
      id: 1,
      status: "backlog",
      title: "Allow adding a new task by typing it into a text box.",
      subtasks: [
        { finished: true, title: "Create a new component for task input" },
        {
          finished: false,
          title:
            "Pull out the data from being hardcoded and put it into a data structure.",
        },
        { finished: false, title: "Make the input widget into a form" },
        { finished: false, title: "Create a submit button" },
        { finished: false, title: "Persist the data to some kind of storage." },
      ],
    },
    {
      id: 2,
      status: "backlog",
      title: "Format task timestamps in a human-readable way.",
    },
    {
      id: 3,
      status: "finished",
      title: "Allow creating subtasks for complex tasks.",
    },
    {
      id: 4,
      status: "finished",
      title:
        "Allow specifying the datetime stamps of when the task is first created and when it is completed.",
    },
    {
      id: 5,
      status: "finished",
      title:
        "Make the next most important thing visibly different from other tasks",
    },
    { id: 6, status: "finished", title: "Allow marking a task done." },
    { id: 7, status: "finished", title: "Allow adding a new task." },
    {
      id: 8,
      status: "finished",
      title:
        "Allow specifying the next most important task, and put it at the top of the screen.",
    },
    {
      id: 9,
      status: "backlog",
      title: "Add a dark mode to the app to prevent blindness during the night",
    },
    {
      id: 10,
      status: "most-important",
      title: "Add a countdown timer until the next work period is finished",
      subtasks: [
        { title: "Create the timer display", finished: true },
        {
          finished: true,
          title:
            "Using a hardcoded end time, use setInterval to create a countdown effect.",
        },
        {
          title: "Add pause, unpause, and reset",
          subtasks: [
            { title: "Add pause and unpause" },
            { title: "Add reset button" },
          ],
        },
      ],
    },
    {
      id: 13,
      status: "backlog",
      title:
        "Allow toggling the showing of subtasks so that they can be hidden if they aren't being worked on right now, and so that they don't have to be visible when browsing tasks, unless you want them to be.",
    },
    {
      id: 11,
      status: "backlog",
      title:
        "Make Github issues the backing store for tasks and convert this into a Github Issue Pomodoro Timer",
    },
    {
      id: 12,
      status: "backlog",
      title: "Use Airtable for the time tracking?",
    },
  ];

  return (
    <main>
      <Timer />

      {tasks
        .filter((task) => task.status === "most-important")
        .map((task) => (
          <>
            <Task
              key={task.id}
              title={task.title}
              status={task.status}
              subtasks={task.subtasks}
            />
          </>
        ))}

      <TaskInput />
      <h3 className="text-3xl mb-4">Backlog</h3>

      {tasks
        .filter((task) => task.status === "backlog")
        .map((task) => (
          <>
            <Task
              key={task.id}
              title={task.title}
              status={task.status}
              subtasks={task.subtasks}
            />
          </>
        ))}

      <h3 className="text-3xl mb-4">Finished</h3>

      {tasks
        .filter((task) => task.status === "finished")
        .map((task) => (
          <>
            <Task
              key={task.id}
              title={task.title}
              status={task.status}
              subtasks={task.subtasks}
            />
          </>
        ))}
    </main>
  );
}
