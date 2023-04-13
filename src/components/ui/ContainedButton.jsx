import './ContainedButton.css';

function ContainedButton(props) {
  // destructuring statement to extract props as variables with fallback values for style
  const { content, fontSize = '1rem', width = 'fit-content' } = props;
  return (
    <button
      style={{ fontSize: fontSize, width: width }}
      className="containedButton"
    >
      {content}
    </button>
  );
}

export default ContainedButton;
