import { memo, useState } from "react"

import styles from './Input.module.css';

const Input = (props) => {
    const { onChange, error, v } = props;
    const [value, setValue] = useState(v);

    const cl = `${styles.input} ${error ? styles.errors : ""}`

    return (
        <input
            className= {cl}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
        />
    )
}

export default memo(Input)