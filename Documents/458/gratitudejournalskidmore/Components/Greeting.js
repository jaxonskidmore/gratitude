export default function Greeting({
  user,
  color,
  gratitudes,
  hasSubmittedToday,
}) {
  return (
    <div className="text-white text-6xl p-6">
      <h1>
        Hello, <span className={color}>{user.name}</span>!
      </h1>
      {hasSubmittedToday ? (
        <h2 className="font-black">
          Today you're grateful for{" "}
          <span className="text-blue-400">{gratitudes.slice(-1)[0].entry}</span>
        </h2>
      ) : (
        <h2 className="font-black">What are you grateful for today?</h2>
      )}
    </div>
  );
}
