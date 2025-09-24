import EventForm from "./components/EventForm";
import './App.css';
import Theme from "./components/Theme";
import Banner from "./components/Banner";

function App() {
  const theme = [
    {
      id: 1,
      name: "front-end",
    },
    {
      id: 2,
      name: "back-end",
    },
    {
      id: 3,
      name: "dev-ops",
    },
    {
      id: 4,
      name: "inteligência artificial",
    },
    {
      id: 5,
      name: "data science",
    },
    {
      id: 6,
      name: "cloud",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />
      <EventForm />

      <section>
        <Theme theme={theme[0]} />
      </section>
      <section>
        <Theme theme={theme[1]} />
      </section>
      <section>
        <Theme theme={theme[2]} />
      </section>
      <section>
        <Theme theme={theme[3]} />
      </section>
      <section>
        <Theme theme={theme[4]} />
      </section>
      <section>
        <Theme theme={theme[5]} />
      </section>
    </main>
  );
}

export default App
