import FormTitle from "../FormTitle";
import FormField from "../FormField";
import Label from "../Label";
import Input from "../Input";
import Botao from "../Botao";
import SelectInput from "../SelectInput";
import "./eventForm.css";

function EventForm({ themes, onSubmit }) {
  function handleForm(formData) {
    const event = {
      cover: formData.get("cover"),
      theme: themes.find(function (item) {
        return item.id == formData.get("theme");
      }),
      date: new Date(formData.get("date")),
      title: formData.get("name"),
    }

    onSubmit(event);
  }

  return (
    <form className="event-form" action={handleForm}>
      <FormTitle>Preencha para criar um evento</FormTitle>

      <div className="fields">
        <FormField>
          <Label htmlFor="name">Qual o nome do evento?</Label>

          <Input
            type="text"
            id="name"
            placeholder="Summer dev hits"
            name="name"
          />
        </FormField>
        <FormField>
          <Label htmlFor="cover">Qual o endereço da imagem de capa?</Label>

          <Input
            type="text"
            id="cover"
            placeholder="http://..."
            name="cover"
          />
        </FormField>
        <FormField>
          <Label htmlFor="date">Data do evento?</Label>

          <Input
            type="date"
            id="date"
            name="date"
          />
        </FormField>
        <FormField>
          <Label htmlFor="theme">Tema do evento?</Label>

          <SelectInput id="theme" name="theme" themes={themes} />
        </FormField>
      </div>

      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}

export default EventForm;
