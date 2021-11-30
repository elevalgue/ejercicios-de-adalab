import '../styles/App.css';

function App() {
  return (
  <body className="happy-face" id="js-body">
      <h1><span id="js-face" className="face">:)</span></h1>
      <form className="form">
          <select name="select" id="js-select-face" className="select">
            <option value=":)" >:)</option>
            <option value=":(" >:(</option>
          </select>
          <button id="js-btn" className="btn">Update</button>
      </form>
    </body>
  );
}

export default App;
