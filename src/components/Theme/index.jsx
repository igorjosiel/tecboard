import "./theme.css";

function Theme({ theme }) {
    return (
        <h3 className="theme-title">{theme.name}</h3>
    );
}

export default Theme;
