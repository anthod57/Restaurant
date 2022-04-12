import Head from 'next/head'
import React, {useEffect }from 'react'
import styles from '../styles/main.module.scss'
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Contact } from "../components/Contact"
import { Products } from "../components/Products"
import { productData } from "../components/Products/data";
import { About } from "../components/About";

export default function Home() {

  useEffect(() => {
    document.getElementById("font-awesome").setAttribute("media","all");
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.bg}/>

      {/*
      You can add a link in the navbar by providing an object with a text and a link.
      Ex: 
      -  {
      -      text: "Accueil",
      -      link: "/"
      -  }
      */}
      <Navbar menu={[
        {
          text: "Accueil",
          link: "/"
        },
        {
          text: "Menu",
          link: "#Menu"
        },
        {
          text: "À propos",
          link: "#About"
        }
      ]}></Navbar>

      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.section} id={"Home"}>
            <h1>LES MEILLEURS BURGERS DE PARIS</h1>
            <a href="tel:+33123456789"></a><button>COMMANDER</button> {/* This button is a click to call, only displayed on mobile device. */}

            {/* 
            Tel and address can be changed here, it will also update the Google Maps link to point to the address. They are both required.
            */}
            <Contact tel="+33123456789" address="Champ de Mars, 5 Av. Anatole France, 75007 Paris"></Contact>
          </div>
          
          <div className={styles.section} id={"Menu"}>
            <h2>DECOUVREZ NOTRE MENU</h2>

            {/* 
            The data props contains an array of products to display. You can change it by modifying => components/Products/data.js
            */}
            <Products data={productData}></Products>
          </div>

          <div className={styles.section} id={"About"}>
            <h2>A PROPOS DE NOUS</h2>

            {/* 
            Display the about section. Simply change the text by using HTML tags (h3 must be used for title). Modify the imageUrl props to change the image.
            */}
            <About text={
              `<h3>Lorem ipsum dolor sit amet</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <i>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</i>`
              } imageUrl={"/images/about.jpg"}></About>
          </div>

        </div>
      </div>
      <link rel="stylesheet" id="font-awesome" media="print" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      {/*
      Footer simply display your social medias. Add a social media by adding an object with a name, url and icon (Provide the class of the icon from Font-Awesome).
      Ex:
      -  {
      -      name: "Instagram",
      -      link: "https://instagram.com/username"
      -      icon: "fa-brands fa-instagram"
      -  }
      
      If the links props array is empty or not provided, it will not display anything.
      */}
      <Footer
        links={[
          {
            name: "Instagram",
            url: "https://instagram.com/",
            icon: "fa-brands fa-instagram"
          },
          {
            name: "Facebook",
            url: "https://facebook.com/",
            icon: "fa-brands fa-facebook"
          },
          {
            name: "Twitter",
            url: "https://twitter.com/",
            icon: "fa-brands fa-twitter"
          },
          {
            name: "Snapchat",
            url: "https://snapchat.com/",
            icon: "fa-brands fa-snapchat"
          },
        ]}
      ></Footer>
    </>
  )
}
