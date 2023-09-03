import clsx from "clsx";

function Task({
  important = false,
  finished = false,
  createdAt,
  finishedAt,
  children,
}) {
  return (
    <div className="border-4 border-slate-500 mb-4">
      <div className="bg-slate-300">
        {createdAt && <span>Created: {createdAt}</span>}&nbsp;
        {finishedAt && <span>Finished: {finishedAt}</span>}
      </div>
      <div
        className={clsx(
          "font-bold p-4",
          finished ? "text-slate-400 line-through" : "text-slate-900",
          important ? "text-3xl" : "text-xl"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <h3 className="text-3xl mb-4">Most Important Task</h3>
      <Task important={true}>
        Allow adding a new task by typing it into a text box.
      </Task>
      <h3 className="text-3xl mb-4">Backlog</h3>
      <Task>Format task timestamps in a human-readable way.</Task>
      <h3 className="text-3xl mb-4">Finished</h3>

      <Task
        createdAt={"2023-09-03T18:50:49.843Z"}
        finishedAt={"2023-09-03T18:51:14.226Z"}
        finished={true}
        important={true}
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
