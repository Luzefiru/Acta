import './TabGeneral.css';
import TextField from '../../components/forms/TextField';
import TextArea from '../../components/forms/TextArea';
import ContainedButton from '../../components/ui/ContainedButton';
import { db } from '../../utils/firebase.config';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { useEffect } from 'react';

function TabGeneral({
  user,
  fname,
  setFname,
  dname,
  setDname,
  bio,
  setBio,
  handleChange,
}) {
  async function setData(userID, state) {
    console.log('Setting', state);
    await setDoc(doc(db, `users/${userID}`), state);
  }

  useEffect(() => {
    async function getData() {
      const docPath = doc(db, 'users', user.uid);
      const snapshot = await getDoc(docPath);

      if (snapshot.exists()) {
        console.log('Exists', snapshot.data());
        setFname(snapshot.data().fname);
        setDname(snapshot.data().dname);
        setBio(snapshot.data().bio);
      } else {
        console.log('no doc');
        setData(user.uid, { fname, dname, bio }).then(() => {
          console.log('data set');
        });
      }
    }
    getData();
  }, []);

  return (
    <form className="TabGeneral">
      <h2 className="TabGeneral__header">Identification</h2>
      <fieldset className="TabGeneral__fieldset profile">
        <TextField
          className="TabGeneral__fieldset__fullName"
          id="fullName"
          label="Full Name"
          placeholder="Your full name"
          value={fname}
          onChange={(e) => handleChange(e, setFname)}
        />
        <TextField
          className="TabGeneral__fieldset__displayName"
          id="displayName"
          label="Display Name"
          placeholder="Your display name"
          value={dname}
          onChange={(e) => handleChange(e, setDname)}
        />
        <TextArea
          className="TabGeneral__fieldset__bio"
          id="bio"
          label="Bio"
          placeholder="Say something about yourself"
          value={bio}
          onChange={(e) => handleChange(e, setBio)}
        />
      </fieldset>

      <hr />

      <h2 className="TabGeneral__header">Account</h2>
      <fieldset className="TabGeneral__fieldset profile">
        <TextField
          className="TabGeneral__fieldset__email"
          id="email"
          label="Email"
          placeholder="example.email@gmail.com"
          value={user.email}
          disabled={true}
        />
        <TextField
          className="TabGeneral__fieldset__password"
          id="password"
          label="Password"
          placeholder="●●●●●●●●"
          disabled={true}
        />
      </fieldset>
      <div
        className="TabGeneral__btn--wrapper"
        onClick={() => setData(user.uid, { fname, dname, bio })}
      >
        <ContainedButton
          padding="12px 16px"
          className="TabGeneral__btn--submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-save"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          Save Information
        </ContainedButton>
      </div>
    </form>
  );
}

export default TabGeneral;
