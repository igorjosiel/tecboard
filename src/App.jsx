import './App.css';

function EventForm() {
  return (
    <form className="event-form">
      <h2>Preencha para criar um evento:</h2>

      <fieldset>
        <label htmlFor="">Qual o nome do evento?</label>
        <input type="text" id="name" />
      </fieldset>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>

      <EventForm />
    </main>
  );
}

export default App
