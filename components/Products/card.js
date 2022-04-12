import React from 'react'
import styles from './products.module.scss'

export const Card = (product) => {
    return (
        <div className={styles.card}>
            <div className={styles.picture}>
                <img className={styles.image} src={product.data.img.src}></img>
            </div>
            <div className={styles.infos}>
                <h3 className={styles.productTitle}>{product.data.name}</h3>
                <div className={styles.price}>
                    <span>{product.data.price}</span>
                </div>             
            </div>
            <div className={styles.description}>
                    <p>{product.data.desc}</p>
            </div>
        </div>
    )
}
