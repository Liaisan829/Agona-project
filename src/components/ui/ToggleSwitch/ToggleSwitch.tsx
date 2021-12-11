import styles from "./ToggleSwitch.module.sass"

export const ToggleSwitch =() => {
    return (
        <div className = {styles.switch}>
            <div className = {styles.buttonArea}>
                <div className = {styles.mainButton}>
                    <input type="checkbox" className = {styles.checkbox}/>
                    <div className={styles.text}/>
                    <div className={styles.textBack}/>
                </div>
            </div>
        </div>
    );
}