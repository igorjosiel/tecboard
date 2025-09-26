import { useState } from "react";

import EventForm from "./components/EventForm";
import './App.css';
import Theme from "./components/Theme";
import Banner from "./components/Banner";
import EventCard from "./components/EventCard";

function App() {
  const themes = [
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

  const [events, setEvents] = useState([
    {
      cover: "https://raw.githubusercontent.com/viniciusneves/tecboard-assets/refs/heads/main/imagem_1.png",
      theme: themes[0],
      date: new Date(),
      title: "Mulheres no Front",
    }
  ]);

  function addEvent(event) {
    setEvents([...events, event]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />
      <EventForm themes={themes} onSubmit={addEvent} />

      {themes.map(function (item) {
        return (
          <section key={item.id}>
            <Theme theme={item} />
            {events.map((event, index) => {
              return (
                <EventCard event={event} key={index} />
              );
            })}
          </section>
        );
      })}
    </main>
  );
}

export default App
