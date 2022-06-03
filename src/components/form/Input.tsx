import styles from './Input.module.css';

type InputProps = {
    type: string,
    text: string,
    name: string,
    placeholder: string,
    value: number | string,
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={props.name}>{props.text}:</label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}                
                onChange={props.handleOnChange}
                value={props.value}
             />
        </div>
    );
}

export default Input;