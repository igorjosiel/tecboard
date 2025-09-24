import FormTitle from "../FormTitle";
import FormField from "../FormField";
import Label from "../Label";
import Input from "../Input";
import "./eventForm.css";

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

export default EventForm;
