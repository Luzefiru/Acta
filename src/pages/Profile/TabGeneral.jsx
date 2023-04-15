import './TabGeneral.css';
import TextField from '../../components/forms/TextField';
import TextArea from '../../components/forms/TextArea';

function TabGeneral() {
  return (
    <form className="TabGeneral">
      <h2 className="TabGeneral__header">Identification</h2>
      <fieldset className="TabGeneral__fieldset profile">
        <TextField
          className="TabGeneral__fieldset__fullName"
          id="fullName"
          label="Full Name"
          placeholder="Your full name"
        />
        <TextField
          className="TabGeneral__fieldset__displayName"
          id="displayName"
          label="Display Name"
          placeholder="Your display name"
        />
        <TextArea
          className="TabGeneral__fieldset__bio"
          id="bio"
          label="Bio"
          placeholder="Say something about yourself"
        />
      </fieldset>
    </form>
  );
}

export default TabGeneral;