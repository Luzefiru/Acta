import './ClipboardField.css';

function ClipboardField() {
  return (
    <div className="ClipboardField">
      <span className="ClipboardField__text">
        acta.com/profile/19asnca12038shfd4
      </span>
      <div
        className="ClipboardField__clipboard"
        onClick={() => {
          copyNodeTextToClipboard(
            document.querySelector('.ClipboardField__text')
          );
        }}
      >
        <svg
          className="lucide lucide-clipboard-copy"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
          <path d="M16 4h2a2 2 0 0 1 2 2v4"></path>
          <path d="M21 14H11"></path>
          <path d="m15 10-4 4 4 4"></path>
        </svg>
      </div>
    </div>
  );
}

export default ClipboardField;

function copyNodeTextToClipboard(node) {
  var range = document.createRange();
  range.selectNode(node);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand('copy');
  window.getSelection().removeAllRanges(); // to deselect
}
