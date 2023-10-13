function FontStyle({ setFont }) {
  console.log();
  return (
    <div>
      <select className="selectOption" onClick={(e) => setFont(e.target.value)}>
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
    </div>
  );
}

export default FontStyle;
