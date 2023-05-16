import './ContainedButton.css';

function ContainedButton(props) {
  // destructuring statement to extract props as variables with fallback values for style
  const {
    className,
    fontSize = '1rem',
    width = 'fit-content',
    padding = '8px 16px',
    fontWeight = '500',
  } = props;
  return (
    <button
      style={{ fontSize, width, padding, fontWeight }}
      className={`ContainedButton ${className}`}
      type="button"
    >
      {props.children}
    </button>
  );
}

export default ContainedButton;
