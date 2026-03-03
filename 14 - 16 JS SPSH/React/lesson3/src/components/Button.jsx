import "./Button.css";

function Button({ rang, yozu, bosish }) {
  return (
    <button style={{ backgroundColor: rang }} onClick={bosish}>
      {yozu}
    </button>
  );
}

export default Button;
