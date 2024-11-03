<template>
  <div>
    <header>
      <nav class="navbar">
        <div class="logo">
          <a href="#"><img src="../assets/Group 247.png" alt="SELVY TEX Logo"></a>
        </div>
        <ul class="nav-links">
          <li class="fonts"><router-link to="/">Home</router-link></li>
          <li class="fonts"><router-link to="company">Our Company</router-link></li>
          <li class="fonts"><router-link to="services">Our Services</router-link></li>
          <li class="fonts"><router-link to="product">Our Product</router-link></li>
          <li class="fonts"><router-link to="contact">Contact</router-link></li>
          </ul>
      </nav>
    </header>
    <section class="sec2">
      <div class="sec2-text">
        <h1>SELVYTEX</h1>
        <div class="box">
          <p>"Get in touch with Selvy Tex for custom clothing solutions <span class="inline-text"> tailored to your <br> needs</span>, with a commitment to <span class="inline-text"> quality</span> and <span class="inline-text"> timely delivery</span>."</p>
        </div>
      </div>
      <order></order>
      <section>
      <faq></faq>
      </section>
      <ma></ma>
      <foot></foot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted', this.$data);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.box
{
  margin-top: 4%;
  margin-bottom: 4%;
  background-color: #fff;
  width: 70%;
  box-shadow: 8px 8px 4px #959595;
  justify-self: center;
  border-radius: 50px 0px 50px 0px;
  border: 8px solid #E07040;
}

@keyframes appear
{
    from
    {
        opacity: 0;
        scale: 0.1;
    }
    to
    {
        opacity: 1;
        scale: 1;
    }
}
.block
{
    animation :appear linear;
    animation-timeline: view();
    animation-range: entry 0;
}
@keyframes appearSideLeft
{
    from
    {
        opacity: 0;
        transform: translateX(-500px);
    }
    to
    {
        opacity: 1;
        transform: translateX(0px);
    }
}
.block-left
{
    animation :appearSideLeft linear;
    animation-timeline: view();
    animation-range: entry 0;
}
@keyframes appearSideRight
{
    from
    {
        opacity: 0;
        transform: translateX(500px);
    }
    to
    {
        opacity: 1;
        transform: translateX(0px);
    }
}
.block-right
{
    animation :appearSideRight linear;
    animation-timeline: view();
    animation-range: entry 0;
}

header {
  background-color: white;
}

.navbar {
display: flex;
margin-left: 3%;
margin-right: 3%;
}
.fonts
{
font-family: 'Outfit', sans-serif;
text-transform: uppercase;
position: relative;
}
.logo
{
flex-basis: 25%;
margin-top: 8px;
margin-left: 2%;
height: 17vh;
}
.nav-links
{
flex-basis: 70%;
}

.logo img {
width: 90%;
}

.nav-links {
list-style-type: none;
margin: 0;
margin-right: 30px;
padding: 0;
display: flex;
align-items: center;
justify-content: space-around;
}

/*.nav-links li {
font: 400 20px Monda, sans-serif;
}*/

.nav-links a {
    text-decoration: none;
    color: #E07040;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 2em;
}
.nav-links a::after
{
    position: absolute;
    background:#D25D38;
    content: "";
    width: 0%;
    height: 4px;
    right: 0;
    bottom: -2px;
    transition: width 1s;
}
.nav-links a:hover::after
{
    width: 70%;
    cursor: pointer;
}
/* Responsive Design for Tablets and Smaller Screens */
@media screen and (max-width: 1024px) {
  .navbar {
    padding: 0 30px;
  }

  .nav-links a {
    font-size: 1rem;
    margin-left: 2em;
  }

  .logo img {
    height: 80px;
    width: 150px;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 0 20px;
  }

  .nav-links a {
    font-size: 0.9rem;
    margin-left: 1.5em;
  }

  .logo img {
    height: 70px;
    width: 130px;
  }
}

@media screen and (max-width: 480px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
  }

  .logo img {
    height: 60px;
    width: 110px;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
  }

  .nav-links li {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .nav-links a {
    font-size: 1rem;
    margin-left: 0;
  }
}

.sec2 {
  height: 111vh;
  width: 100%;
  background-image: url(/src/assets/Ellipse1.png);
  background-position: center;
  background-size: cover;
  margin-top: 0.1em;
  opacity: 95%;
}
.inline-text
{
    color:#E07040;
    font-weight: bold;
    font-size: 28px;
}

.sec2-text h1 {
  color: #D25D38;
  font-family: "Magra", sans-serif;
  font-size: 64px;
  font-weight: bolder;
  letter-spacing: 1px;
  line-height: 50px;
  text-align: center;
  padding-top: 1.3em;
  display: flex;
  margin-top: 1%;
  flex-direction: column;
  transition: all 0.5ms ease-in-out;
}


.sec2-text p {
  font-family: "Outfit", Helvetica;
  text-align: center;
  /*text-align: center;*/
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  padding-top: 4%;
  padding-bottom: 4%;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 4em;
  height: 85%;

}

.contact-info {
  margin-right: 40px;
  padding: 0em 4em;
}

.contact-info h2 {
  color: #e07040;
  font-family: "Magra",sans-serif;
  font-size: 48px;
  font-weight: bold;
  height: 100px;
  left: 0;
  letter-spacing: 0;
  line-height: 100px;
  text-align: center;
  white-space: nowrap;
}

.info {
  margin-top: 2em;
}

.social-media {
  margin-top: 2em;
}

.social-img {
  margin-top: 1em;
}

.social-img img {
  margin-left: 1em;
}

.social-media h3 {
  color: #e07040;
  font-family: "Magra", sans-serif;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  white-space: nowrap;
}

.contact-form {
  font-family: Poppins, sans-serif;
  text-align: center;
  max-width: 698px;
  margin: 0 auto;
}

.form-container {
  background-color: rgba(224, 112, 64, 0.9);
  border-radius: 20px;
  padding: 1em 56px;
  height: 97%;

}

.form-title {
  color: #fff;
  font: 600 48px/100px Magra, sans-serif;
  margin-bottom: 0.40em;
}

.name-fields {
  display: flex;
  gap: 40px;
  margin-bottom: 3px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 18px;
}

.input-group label {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 11px;
}



.phone-input {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 25px;
  width: 96%;
}

.country-code {
  color: #000;
  font-size: 15px;
  font-weight: 300;
  margin-right: 17px;
}

.message-area {
  height: 17vh;
  resize: vertical;
}

.submit-button {
  background-color: #fff;
  border: none;
  border-radius: 15px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  padding: 13px 70px;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #f0f0f0;
}

@media (max-width: 991px) {
  .form-container {
    padding: 26px 20px;
  }

  .form-title {
    font-size: 40px;
    line-height: 93px;
  }

  .name-fields {
    flex-direction: column;
    gap: 20px;
  }

  .submit-button {
    width: 100%;
    padding: 13px 20px;
  }
}

.image-section {
  display: flex;
  padding-top: 123px;
  flex-direction: column;
  margin-top: 33em;
}

.image-container {
  background-color: rgba(224, 112, 64, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 70px 146px;
}

.main-image {
  aspect-ratio: 3.5;
  object-fit: contain;
  object-position: center;
  width: 100%;
  z-index: 10;
  max-width: 1240px;
  margin: -123px 0 -29px;
  transition: all 2ms ease-in-out;
}
.main-image:hover
{
  transform: translateY(10px);
}

@media (max-width: 991px) {
  .image-section {
    padding-top: 100px;
  }

  .image-container {
    max-width: 100%;
    padding: 0 20px 100px;
  }

  .main-image {
    max-width: 100%;
    margin-bottom: 10px;
  }
}
.footer {
  align-items: start;
  display: flex;
  gap: 20px;
  font-weight: 400;
  justify-content: space-between;
  margin-top: 3em;
  padding: 2em 8em 0em 7em;
  height: 410px;
}

@media (max-width: 991px) {
  .footer {
      flex-wrap: wrap;
  }
}

.footer-column {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #333;
  padding: 0 20px 12px;
}



.footer-message {
  font-family: Lora, sans-serif;
  margin-top: 36px;
}

.footer-title {
  color: #e07040;
  margin-top: 55px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family:'Magra', sans-serif;
  font-weight: 900;
  font-size: 20px;
  position: relative;
}

.footer-title1 {
  color: #e07040;
  position: relative;
  margin-top: 55px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font: 20px/150% Magra, sans-serif;
  font-weight: 900;
  margin-bottom: 1em;
}

.footer-title2 {
  color: #E07040;
  position: relative;
  margin-top: 55px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font: 20px/150% Magra, sans-serif;
  font-weight: 900;
  margin-bottom: 1em;
}

.footer-address {
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 32px;
  align-self: stretch;
  margin-top: 30px;
}

.footer-email {
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  font-weight: 700;
  line-height: 32px;
}

.footer-language {
  color: #333;
  margin-top: 13px;
  font: 18px/156% Open Sans, sans-serif;
}

.footer-language-option {
  margin-top: 33px;
  gap: 6px;
  white-space: nowrap;
  line-height: 173%;
}

@media (max-width: 991px) {
  .footer-language-option {
      white-space: initial;
  }
}

.footer-language-flag {
  aspect-ratio: 1.45;
  object-fit: auto;
  object-position: center;
  width: 16px;
  align-self: start;
}

.footer-language-name {
  font-family: Open Sans, sans-serif;
}

.footer-link {
  margin-top: 10px;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
}

.footer-social {
  color: #959595;
  margin-top: 32px;
  font: 15px/213% Open Sans, sans-serif;
}

.footer-rect {
  width: 100%;
  height: 5vh;
  background-color: #e07040;
}
.image-gallery {
  display: flex;
  gap: 19px;
}

.gallery-link {
  display: inline-block;
  text-decoration: none;
}
.gallery-link:hover
{
  size: 1.2em;
  cursor: pointer;
}

.gallery-image {
  object-fit: contain;
  object-position: center;
}

.small-image {
  width: 20px;
  aspect-ratio: 1;
}
.medium-image {
  width: 28px;
  aspect-ratio: 1.4;
}

.large-image {
  width: 22px;
  aspect-ratio: 1.16;
  align-self: start;
}
.cont{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
}
.flag{
  margin-top: 1em;
  margin-left: 3em;
}
.fonts::after
{
    position: absolute;
    background:#D25D38;
    content: "";
    width: 0%;
    height: 4px;
    right: 0;
    bottom: -3px;
    transition: width 1s;
}

.footer-title1::after
{
    position: absolute;
    background:#D25D38;
    content: "";
    width: 0%;
    height: 4px;
    left: 0;
    right: 1;
    bottom: -3px;
    transition: width 1s;
}
.footer-title1:hover::after
{
    width: 90%;
    cursor: pointer;
}
.footer-title::after
{
    position: absolute;
    background:#D25D38;
    content: "";
    width: 0%;
    height: 4px;
    left: 0;
    right: 1;
    bottom: -3px;
    transition: width 1s;
}
.footer-title:hover::after
{
    width: 40%;
    cursor: pointer;
}
.footer-title2::after
{
    position: absolute;
    background:#D25D38;
    content: "";
    width: 0%;
    height: 4px;
    left: 0;
    right: 1;
    bottom: -3px;
    transition: width 1s;
}
.footer-title2:hover::after
{
    width: 50%;
    cursor: pointer;
}
.footer-link
{
  transition: transform 0.3s ease;
}
.footer-link:hover
{
  transform: translateX(5px);
}

</style>
