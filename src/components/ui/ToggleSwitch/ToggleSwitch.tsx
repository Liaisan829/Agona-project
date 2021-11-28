import "./ToggleSwitch.css"

export const ToggleSwitch =() => {
    return (
        <div className = "switch">
            <div className = "button-area">
                <div className = "main-button">
                    <input type="checkbox" className = "checkbox"/>
                    <div className="text"/>
                    <div className="textBack"/>
                </div>
            </div>
        </div>
    );
}