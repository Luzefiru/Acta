import './TabGeneral.css';
import TextField from '../../components/forms/TextField';

function TabGeneral() {
  return (
    <form className="TabGeneral">
      <h2 className="TabGeneral__header">Profile</h2>
      <fieldset className="TabGeneral__fieldset profile">
        <TextField
          className="TabGeneral__fieldset__fullName"
          id="fullName"
          label="Full Name"
          placeholder="Your full name"
        />
        <TextField
          className="TabGeneral__fieldset__displayName"
          id="dsiplayName"
          label="Display Name"
          placeholder="Your display name"
        />
      </fieldset>
    </form>
  );
}

export default TabGeneral;
