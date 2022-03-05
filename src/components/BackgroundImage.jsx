import React from 'react'
import styles from "./BackgroundImage.module.css"


export default function BackgroundImage({imagesource}) {
  return (
    <div className={styles.imagecontainer}>
        <img src={imagesource} alt="" className={styles.backgroundimage} />
    </div>
  )
}
