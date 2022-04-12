import React from 'react'
import Image from 'next/image'
import styles from './products.module.scss'

export const Card = (product) => {
    return (
        <div className={styles.card}>
            <div className={styles.picture}>
                <Image width="100%" height="100%" layout="responsive" objectFit="cover" loading="lazy" src={product.data.img.src}></Image>
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
