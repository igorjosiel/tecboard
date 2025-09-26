import "./selectInput.css";

function SelectInput({ themes, ...rest }) {
    return (
        <select {...rest} className="select-input" defaultValue="">
            <option value="" disabled>Selecione uma opção</option>

            {themes.map(theme => {
                return (
                    <option key={theme.id} value={theme.id}>
                        {theme.name}
                    </option>
                );
            })}
        </select>
    );
}

export default SelectInput;
