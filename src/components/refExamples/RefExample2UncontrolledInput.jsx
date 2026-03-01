import { useRef } from "react";

function RefExample2UncontrolledInput() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const handleValue = () => {
    const value = inputRef.current?.value?.trim();
    outputRef.current.textContent = value ? `Value: ${value}` : `Empty sting`;
  };

  const clearForm = () => {
    inputRef.current.value = "";
    outputRef.current.textContent = "Clean";
  };

  return (
    <div className="example-card">
      <h3>RefExample2UncontrolledInput</h3>
      <p>Читання та очищення значення без контрольованого state.</p>

      <input ref={inputRef} type="text" placeholder="Введи текст" />
      <div className="button-row">
        <button type="button" onClick={handleValue}>
          Показати значення
        </button>
        <button type="button" onClick={clearForm}>
          Очистити
        </button>
      </div>
      <p ref={outputRef} className="hint">
        Очікування вводу...{" "}
      </p>
    </div>
  );
}

export default RefExample2UncontrolledInput;
