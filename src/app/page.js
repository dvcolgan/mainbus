import clsx from "clsx";

function Subtask({ title, finished = false }) {
  return (
    <div
      className={clsx(
        "p-1",
        finished ? "text-slate-400 line-through" : "text-slate-900"
      )}
    >
      {title}
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
          "p-1",
          status === "finished"
            ? "text-slate-400 line-through"
            : "text-slate-900",
          status === "most-important" ? "text-3xl font-bold" : "text-base"
        )}
      >
        {title}
      </div>

      {subtasks.map((subtask, index) => (
        <Subtask
          key={index}
          title={subtask.title}
          finished={subtask.finished}
        />
      ))}
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
      status: "most-important",
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
  ];

  return (
    <main>
      <h3 className="text-xl mb-4">Most Important Task</h3>
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
