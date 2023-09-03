import clsx from "clsx";

function Task({ finished = false, children }) {
  return (
    <div
      className={clsx(
        "text-xl font-bold",
        finished ? "text-slate-400 line-through" : "text-slate-900"
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Task finished={true}>Allow marking a task done.</Task>
      <Task finished={true}>Allow adding a new task.</Task>
      <Task finished={true}>
        Allow specifying the next most important task, and put it at the top of
        the screen.
      </Task>
    </main>
  );
}
