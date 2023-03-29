import React from 'react'
import style from './footer.module.css'



export const Footer = () => {


    return (
        <footer className={style.wrapper}>Footer</footer>
    )
}


export const MemoFooter = React.memo(Footer)