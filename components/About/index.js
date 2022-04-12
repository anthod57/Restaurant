import React from 'react'
import styles from './about.module.scss'
import parse from 'html-react-parser'

export const About = (props) => {
    return (
        <div className={styles.about}>
            <div className={styles.picture}>
                <img src={props.imageUrl}></img>
            </div>
            <div className={styles.text}>
                {props.text ? parse(props.text) : ""}
            </div>
        </div>
    )
}
