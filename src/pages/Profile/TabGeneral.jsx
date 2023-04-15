import './TabGeneral.css';
import TextField from '../../components/forms/TextField';

function TabGeneral() {
  return (
    <form className="TabGeneral">
      <h2 className="TabGeneral__header">Profile</h2>
      <fieldset className="TabGeneral__fieldset">
        <TextField
          id="fullName"
          label="Full Name"
          placeholder="Your full name"
        />
      </fieldset>
    </form>
  );
}

export default TabGeneral;
