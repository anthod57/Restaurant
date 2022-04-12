import React, {useState, useEffect} from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link'

export const Navbar = (props) => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    const Menu = React.createRef();

    //Hide or show the mobile menu
    const showMenu = () => {
        setMobileMenu(!showMobileMenu);
        if(showMobileMenu){
            Menu.current.style = "right: -60%;";
        }else{
            Menu.current.style = "right: 0px;";
        }
    }

    return (
        <div className={styles.navbar}>
            <Link href={"/"}><a><h1>Burger</h1></a></Link>
            <div className={styles.menubutton} onClick={showMenu}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className={styles.menu} ref={Menu} style={{right: "-60%"}}>
                <i class="fa-solid fa-xmark" onClick={showMenu}></i>
                <ul>
                    {console.log(props)}
                    {props.menu?.map((item, index) => {
                        return(
                            <Link key={index} href={item.link}><a><li onClick={showMenu}>{item.text}</li></a></Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
