import FormTitle from "../FormTitle";
import FormField from "../FormField";
import Label from "../Label";
import Input from "../Input";
import Botao from "../Botao";
import SelectInput from "../SelectInput";
import "./eventForm.css";

function EventForm() {
  return (
    <form className="event-form">
      <FormTitle>Preencha para criar um evento</FormTitle>

      <div className="fields">
        <FormField>
          <Label htmlFor="eventName">Qual o nome do evento?</Label>

          <Input
            type="text"
            id="eventName"
            placeholder="Summer dev hits"
            name="eventName"
          />
        </FormField>
        <FormField>
          <Label htmlFor="eventDate">Data do evento?</Label>

          <Input
            type="date"
            id="eventDate"
            name="eventDate"
          />
        </FormField>
        <FormField>
          <Label htmlFor="eventDate">Data do evento?</Label>

          <SelectInput />
        </FormField>
      </div>

      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}

export default EventForm;
