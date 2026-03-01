import { useRef } from "react";

function RefExample1FocusInput() {
  const inputRef = useRef(null);
  const handlFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="example-card">
      <h3>RefExample1FocusInput</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Натисни кнопку для фокусу"
      />
      <button type="button" onClick={handlFocus}>
        Фокус в input
      </button>
    </div>
  );
}

export default RefExample1FocusInput;
