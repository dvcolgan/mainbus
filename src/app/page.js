import clsx from "clsx";

function Task({
  important = false,
  finished = false,
  createdAt,
  finishedAt,
  children,
}) {
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
          finished ? "text-slate-400 line-through" : "text-slate-900",
          important ? "text-3xl font-bold" : "text-base"
        )}
      >
        {children}
      </div>
    </div>
  );
}

function TaskInput({}) {
  return (
    <>
      <label className="italic text-slate-600 text-sm">Add New Task</label>
      <textarea className="border-2 border-slate-400 p-2 w-full"></textarea>
    </>
  );
}

export default function Home() {
  return (
    <main>
      <h3 className="text-xl mb-4">Most Important Task</h3>
      <Task important={true}>
        Allow adding a new task by typing it into a text box.
        <Task finished={true}>Create a new component for task input</Task>
        <Task>Create a submit button</Task>
        <Task>Make the input widget into a form</Task>
        <Task>
          Pull out the data from being hardcoded and put it into a data
          structure.
        </Task>
        <Task>Persist the data to some kind of storage.</Task>
        <TaskInput />
      </Task>

      <TaskInput />
      <h3 className="text-3xl mb-4">Backlog</h3>
      <Task>Format task timestamps in a human-readable way.</Task>
      <h3 className="text-3xl mb-4">Finished</h3>

      <Task finished={true}>Allow creating subtasks for complex tasks.</Task>

      <Task
        createdAt={"2023-09-03T18:50:49.843Z"}
        finishedAt={"2023-09-03T18:51:14.226Z"}
        finished={true}
      >
        Allow specifying the datetime stamps of when the task is first created
        and when it is completed.
      </Task>
      <Task finished="true">
        Make the next most important thing visibly different from other tasks
      </Task>
      <Task finished={true}>Allow marking a task done.</Task>
      <Task finished={true}>Allow adding a new task.</Task>
      <Task finished={true}>
        Allow specifying the next most important task, and put it at the top of
        the screen.
      </Task>
    </main>
  );
}
