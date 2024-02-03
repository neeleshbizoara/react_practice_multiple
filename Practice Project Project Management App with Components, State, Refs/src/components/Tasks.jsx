import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="text-2xl font-bold text-stone-700 mb-4">
      <h2 className="text-stone-800 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd}></NewTask>
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((item) => (
            <li key={item.id} className="flex justify-between my-4">
              <span>{item.text}</span>
              <button onClick={() => onDelete(item.id)} className="text-stone-700 hover:text-red-500">Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
