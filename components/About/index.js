import React from 'react'
import styles from './about.module.scss'
import parse from 'html-react-parser'
import Image from 'next/image'

export const About = (props) => {
    return (
        <div className={styles.about}>
            <div className={styles.picture}>
                <Image width="100%" height="100%" layout="responsive" objectFit="cover" src={props.imageUrl} loading="lazy"></Image>
            </div>
            <div className={styles.text}>
                {props.text ? parse(props.text) : ""}
            </div>
        </div>
    )
}
