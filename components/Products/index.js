import React from 'react'
import styles from './products.module.scss'
import { Card } from "./card";

export const Products = (data) => {
    return (
        <div className={styles.container}>
            {data?.data?.map((product, index) => {
                return(
                    <Card key={index} data={product}></Card>
                )
            })}
        </div>
    )
}
