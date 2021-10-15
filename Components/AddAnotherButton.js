export default function AddAnotherButton({ AddAnother }) {
  return (
    <div>
      <button
        onClick={AddAnother}
        className="bg-blue-400 rounded px-12 py-3 hover:bg-blue-500"
      >
        Add Another Gratitude
      </button>
    </div>
  );
}
