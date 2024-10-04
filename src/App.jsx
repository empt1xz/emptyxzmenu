import './App.css'

function App() {
  return (
    <div className="container">
      <h1>
        Emptyxz <span>Menu</span>
      </h1>

      <form action="#">
        <label htmlFor="key">
          <i className="fa-solid fa-key"></i>
          <input type="password" id="key" placeholder="Digite sua senha" />
        </label>
        <input id="login" type="button" value="Login" />
      </form>

      <footer>
        <p>&copy; Direitos Reservados</p>
      </footer>
    </div>
  );
}

export default App;
