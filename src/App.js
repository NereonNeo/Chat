import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import Messages from './Messages';
import { db } from './firebase';
import firebase from 'firebase';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  function handlerInput(e) {
    db.collection('messages').add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages([...messages, { user: user, message: input }]);
    setInput('');
  }
  useEffect(() => {
    db.collection('messages').onSnapshot((snapShot) => {
      setMessages(snapShot.docs.map((doc) => doc.data()));
    });
  }, []);
  useEffect(() => {
    setUser(prompt('Please Enter Your name'));
  }, []);
  console.log(messages);
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerx">
          <div className="logo">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/part+1+facebook+messenger-1320568338825632685.png"
              alt=""
              width="100px"
            />
          </div>
          <h2>Welcome {user}</h2>
        </div>
      </header>
      <div className="main">
        <div className="messages">
          {messages.map((mess, index) => {
            return <Messages userName={user} message={mess} key={index} />;
          })}
        </div>
      </div>
      <div className="wrap">
        <div className="input">
          <TextField
            value={input}
            id="outlined-basic"
            label="Message"
            variant="outlined"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="button">
          <Button
            variant="outlined"
            color="primary"
            onClick={(e) => handlerInput(e)}
          >
            Send <span>🚀</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
