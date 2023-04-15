import './TabGeneral.css';
import AuthTextField from '../../components/forms/AuthTextField';

function TabGeneral() {
  return (
    <form className="TabGeneral">
      <h2 className="TabGeneral__header">Profile</h2>
      <fieldset className="TabGeneral__fieldset">
        <AuthTextField />
      </fieldset>
    </form>
  );
}

export default TabGeneral;
