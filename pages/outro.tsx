export default function Outro() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          const result = prompt("dddd");
          alert(result);
        }}
      >
        Launch demo modal
      </button>
    </div>
  );
}
