import './App.css';

function FormTitle({ children }) {
  return (
    <h2>{children}</h2>
  );
}

function FormField({ children }) {
  return (
    <fieldset>{children}</fieldset>
  );
}

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>{children}</label>
  );
}

function Input(props) {
  return (
    <input {...props} />
  );
}

function EventForm() {
  return (
    <form className="event-form">
      <FormTitle>Preencha para criar um evento</FormTitle>

      <FormField>
        <Label htmlFor="name">Qual o nome do evento?</Label>

        <Input
          type="text"
          id="name"
          placeholder="Summer dev hits"
          name="eventName"
        />
      </FormField>
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
