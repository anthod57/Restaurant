import React from 'react'
import styles from './footer.module.scss'

export const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                {console.log(props.links)}
                {props?.links?.map((link, index) => {
                    return (
                        <a name={link.name} key={index} href={link.url} className={styles.socialmedia} target="_blank">
                            <i class={link.icon}></i>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}
