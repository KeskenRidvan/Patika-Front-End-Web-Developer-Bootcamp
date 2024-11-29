function NoteItem({ note, index, handleDeleteNote, handleToggleComplete }) {
  return (
    <li
      className={`rounded flex justify-between items-center my-2 p-3 border-b border-gray-200 ${
        note.isCompleted ? "line-through text-gray-500" : ""
      }`}
      style={{ backgroundColor: note.color }}
    >
      <span
        onClick={() => handleToggleComplete(index)}
        className="cursor-pointer font-bold p-2"
      >
        {note.text}
      </span>
      <button
        onClick={() => handleDeleteNote(index)}
        className=" right-0 p-2 text-white text-3xl mix-blend-exclusion hover:font-bold focus:outline-none"
      >
        &times;
      </button>
    </li>
  );
}

export default NoteItem;
