import React from 'react'
import styles from './contact.module.scss';

export const Contact = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul>
                    <li><i class="fa-solid fa-phone"/>{props.tel}</li>
                    <li><i class="fa-solid fa-map-pin"/>{props.address}</li>
                </ul>
                <iframe width="600" className={styles.map} height="450" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src={"https://maps.google.com/maps?q=" + props.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"}></iframe>
            </div>
        </div>
    )
}
