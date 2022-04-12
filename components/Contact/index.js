import React, {useEffect} from 'react'
import styles from './contact.module.scss';

export const Contact = (props) => {

    const map = React.createRef();

    useEffect(() => {
        map.current.setAttribute("src",map.current.getAttribute("data-src"));
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul>
                    <li><i className="fa-solid fa-phone"/>{props.tel}</li>
                    <li><i className="fa-solid fa-map-pin"/>{props.address}</li>
                </ul>
                <iframe ref={map} width="600" className={styles.map} height="450" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" src="" data-src={"https://maps.google.com/maps?q=" + props.address + "&t=&z=13&ie=UTF8&iwloc=&output=embed"}></iframe>
            </div>
        </div>
    )
}
