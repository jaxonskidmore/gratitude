export default function History({ gratitudes }) {
  return (
    <div className="text-white text-6xl p-6">
      <p className="font-black flex flex-row flex-wrap">
        Previously you were
        <span className="text-blue-400 px-3 underline">grateful</span> for:
      </p>

      <span className="flex flex-col p-5 items-center text-blue-400">
        {gratitudes.map((g, i) => (
          <h1 className="p-3 " key={i}>
            {gratitudes[i]},
          </h1>
        ))}
      </span>
    </div>
  );
}
