<template>
    <div>
        <header>
            <nav class="navbar">
                <div class="logo">
                    <a href="#"><router-link to="/"><img src="../assets/Group 247.png" alt="SELVY TEX Logo"></router-link></a>
                </div>
                <ul class="nav-links">
                    <li class="fonts"><router-link to="/">Home</router-link></li>
                    <li class="fonts"><router-link to="company">Our Company</router-link></li>
                    <li class="fonts"><router-link to="services">Our Services</router-link></li>
                    <li class="fonts"><router-link to="product">Our Product</router-link></li>
                    <!--<li><a href="#">How To Order</a></li>-->
                    <li class="fonts"><router-link to="contact">Contact</router-link></li>
                    </ul>
                        <!--<div class="flag">
                            <img loading="lazy"
                                srcset="https://cdn.builder.io/api/v1/image/assets%2Fb4f70d42747f4784a7941910e7311e3c%2F53e717eb79cc432db4d5dd09319488b6"
                                class="nav-flag" />
                        </div>-->
            </nav>
        </header>
        <section class="sec1">
            <div class="bci">
                <img src="./../assets/bcihomepng.png" alt="logo">
            </div>
            <div class="oeko">
                <img src="./../assets/oeko.png" alt="logo">
            </div>
        </section>
        <div class="box">
            <div class="group">
                <div class="service-header2">
                    <div class="service-line2"></div>
                    <h2 class="service-title2">“Threads of Tradition,<br>
                        Stitches of Innovation.”</h2>
                    <div class="service-line2"></div>
                </div>
                <p class="section">
                    Welcome to <span class="inline-text">Selvy Tex</span>,  your trusted partner for premium custom clothing since<span class="inline-text"> 2013.</span> Based in <span class="inline-text">Tirupur</span>, India's textile <br> hub, we deliver<span class="inline-text"> unmatched quality</span> and <span class="inline-text">craftsmanship.</span> At Selvy Tex, we bring your vision to life with precision and care, <br> building lasting partnerships through excellence.
                </p>
            </div>
        </div>
        <section class="velcord-stats">
            <div class="stats-container">
                <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f835946adadea0f7c8204b3a19651d26bda6e40f95b3c01c65fa5137b55c59?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a"
                    class="background-image" alt="" />
                <div class="stats-wrapper">
                    <div class="stats-grid">
                        <StatCard v-for="(stat, index) in stats" :key="index" :icon="stat.icon" :number="stat.number"
                            :title="stat.title" :description="stat.description" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="service-header">
                <div class="service-line"></div>
                <h2 class="service-title">"See How Selvytex is Tailored to Your Needs”</h2>
                <div class="service-line"></div>
            </div>
            <!--<img loading="lazy block"
                src="https://cdn.builder.io/api/v1/image/assets%2Fb4f70d42747f4784a7941910e7311e3c%2Fcb14f9d16a2944c4a9cd0da7459a3652"
                alt="" class="responsive-image" />
        -->
                <div class="elements sec5">
                    <div class="items block-left">
                        <div class="item">
                            <h1>TRUSTWORTHY PARTNERSHIP</h1>
                            <div class="item-box">
                                <p>Since 2013, Selvy Tex has earned a reputation for <span class="inline-text"> reliability</span> and <span class="inline-text">integrity</span>. We value long-term<br> relationships with our clients, built on transparency, open communication, and a  shared<br> commitment to success. You can count on us to consistently <span class="inline-text">meet your expectations</span>  and <br> deliver results that<span class="inline-text"> align with your brand’s vision.</span></p>
                            </div>
                        </div>
                        <div class="item-image">
                            <img src="../assets/item1.png">
                        </div>
                    </div>
                    <div class="items-right block-right">
                        <div class="item-image">
                            <img src="../assets/item2.png">
                        </div>
                        <div class="item-right">
                            <h1>FLEXIBLE MOQ</h1>
                            <div class="item-box-right">
                                <p>Whether you’re an established brand or just starting out, we offer<span class="inline-text"> flexible MOQ</span> options to suit your <br> production needs. We empower businesses of all sizes to<span class="inline-text"> access premium manufacturing services</span> <br> without the pressure of large order commitments, allowing for scalability and growth at your pace.</p>
                            </div>
                        </div>
                    </div>
                    <div class="items block-left">
                        <div class="item-q">
                            <h1>UNMATCHED QUALITY</h1>
                            <div class="item-box">
                                <p>Quality is at the core of everything we do. Located in<span class="inline-text"> Tirupur</span>, India’s textile hub responsible for <br> the major share of the country’s cotton knitwear exports, Selvy Tex leverages the region’s rich <br><span class="inline-text"> expertise and resources</span>. Our commitment to superior materials, craftsmanship, and attention <br> to detail ensures that every product we create upholds the<span class="inline-text"> highest standards of durability</span>, <br> comfort, and style.</p>
                            </div>
                        </div>
                        <div class="item-image">
                            <img src="../assets/item3.png">
                        </div>
                    </div>
                </div>
        </section>
        <img loading="lazy block"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0edcac7e3a3ae3a65e0edae79d5a503ff4d6dc14b241c481fe20fab5a319d43c?placeholderIfAbsent=true&apiKey=b4f70d42747f4784a7941910e7311e3c"
            alt="" class="responsive-image2" />
        <section>
            <div class="service-header1">
                <div class="service-line1"></div>
                <h2 class="service-title1">GLOBAL PRESENCE</h2>
                <div class="service-line1"></div>
            </div>
            <img loading="lazy block"
                src="https://cdn.builder.io/api/v1/image/assets%2Fb4f70d42747f4784a7941910e7311e3c%2Fcd127f820c6145b6be54e5d8cac6b013"
                alt="Descriptive text for the image" class="map" />
            
            <div class="block"><brand></brand></div>
        </section>
        <section class="sec4 block">
            <div class="sec4-boxt block">
                <div class="order-instructions">
                    <h2 class="order-title">HOW TO ORDER</h2>
                </div>
                <div class="sec4-box">
                    <div class="minimum-quantity-info">
                        <h2 class="quantity-title">MINIMUM QUANTITY</h2>
                        <p class="quantity-description">
                            Colors and fabrics stocks from
                            <span class="highlight">50 pcs</span><br>
                            Pantone colors from
                            <span class="highlight">100 pcs</span>
                        </p>
                    </div>
                    <div class="lead-time-info">
                        <h2 class="lead-time-title">LEAD TIME</h2>
                        <div class="lead-time-details">
                        <p><strong>Prototypes : </strong>10 to 15 days</p>
                        <p><strong>Production : </strong>45 to 60 days</p>
                        <P><strong>Transport : </strong>
                            3 to 7 days by
                            <span class="highlight1">Air</span>
                            ; 20 to 35 days by
                            <span class="highlight1">Sea</span>
                            .
                        </P>
                        </div>
                    </div>
                    <router-link to="contact"><button class="sec4-btn">Make enquiry <span class="arrow"><img src="./../assets/icon.png"></span></button></router-link>
                </div>
            </div>
        </section>
        <footer>
            <div class="footer">
            <div class="footer-column">
                <router-link to="/">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Faf0c4f4a34884a7c857808257a84dbe0%2Fa5682d076d5c4a38903293c828d70d7f"
                    class="footer-logo" />
                    </router-link>
            </div>
            <div class="footer-column">
                <div class="footer-title">Contact</div>
                    <div class="footer-address">
                    <span style="font-family: 'Outfit', sans-serif;font-size: 15px;font-weight: 400;font-weight: 700;line-height: 32px;" >Address:</span> 8/962, PN Rd, Karupparayan Nagar,
                    <br />
                    Tiruppur, India. 641603
                </div>
                <div class="footer-email">
                    Email:
                    <span style="font-weight: 400"> contact@selvytex.com</span>
                </div>
                <div class="footer-email">
                    Ph.no:
                    <span style="font-weight: 400"> +91  82485 46440</span>
                </div>
            </div>
            <div class="footer-column">
                <div class="footer-title1">Quick links</div>
                <a class="footer-link"><router-link to="/">Home</router-link></a>
                <a class="footer-link"><router-link to="company">Our Company</router-link></a>
                <a class="footer-link"><router-link to="services">Our Services</router-link></a>
                <a class="footer-link"><router-link to="product">Our Product</router-link></a>
                <a class="footer-link"><router-link to="contact">How to order</router-link></a>
                <a class="footer-link"><router-link to="contact">Contact</router-link></a>
            </div>
            <div class="footer-column">
                <div class="footer-title2">Follow</div>
                <section class="image-gallery">
                    <a href="#" class="gallery-link">
                        <img src="./../assets/instagram.png" alt="instagram">
                    </a>
                    <a href="#" class="gallery-link">
                        <img src="./../assets/LinkedinLogo.png" alt="linkedin">
                    </a>
                    <a href="#" class="gallery-link">
                        <img src="./../assets/FacebookLogo.png" alt="facebook">
                    </a>
                    <a href="#" class="gallery-link">
                        <img src="./../assets/ArrowLineDown.png" alt="download">
                    </a>
                </section>
                <div class="footer-bci">
                    <img src="./../assets/bci.png" alt="bci">
                </div>
                <div class="footer-bc">
                    <img src="./../assets/oeko.png" alt="icon">
                </div>
            </div>
        </div>
            <div class="footer-rect">

            </div>
        </footer>
    </div>
</template>

<script>
import { RouterLink } from "vue-router"
import StatCard from './statCard.vue';
import dress from '@/assets/dress.png'
import industry from '@/assets/industry.png'
import graph from '@/assets/graph.png'
import certificate from '@/assets/certificate.png'
export default {
    name: 'VelcordStats',
    components: {
        StatCard,
    },
    data() {
        return {
            stats: [
                {
                    icon: dress,
                    description: '"From April 1, 2023, to March 30, 2024, Selvy Tex proudly produced nearly <span style="color:#E07040;"> 3,20,000 pieces </span> of custom garments, showcasing our commitment to <span style="color:#E07040;"> quality craftsmanship </span> and <span style="color:#E07040;"> premium materials. </span>"',
                },
                {
                    icon: industry,
                    description: ' "With a team of over <span style="color:#E07040;"> 250 </span> employees, including <span style="color:#E07040;"> 40% women </span>, Selvy Tex fosters diversity and delivers excellence in every garment we create."',
                },
                {
                    icon: certificate,
                    description: '"Selvy Tex is proud to be <span style="color:#E07040;"> BCI</span> certified, ensuring our commitment to sustainable cotton sourcing and environmentally responsible textile manufacturing."',
                },
                {
                    icon: graph,
                    description: '"With <span style="color:#E07040;"> 11 years</span> of experience <br>since 2013, Selvy Tex has built a<span style="color:#E07040;"> legacy of excellence</span> in custom clothing manufacturing, blending quality craftsmanship with innovation and sustainability."',
                },
            ],
        };
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
body {
    overflow-x: hidden;
}


header {
    background-color: white;
}
.elements
{
    display: flex;
    flex-direction: column;
    background-color: #F5F1EA;
    padding-top: 7%;
    gap: 70px;
    padding-bottom: 7%;
}
.items {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between; /* Ensure positioning works for the child */
}
.items-right {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
}

.items h1 {
    margin-top: 80px;
    font-family: 'Magra', sans-serif;
    font-weight: bold;
    font-size: 40px;
    color: #e07040;
    width: 100%;
    letter-spacing: 2px;
    padding-left:80px ;
}
.item-q h1 {
    margin-top: 80px;
    font-family: 'Magra', sans-serif;
    font-weight: bold;
    font-size: 40px;
    color: #e07040;
    width: 100%;
    letter-spacing: 2px;
    padding-left:80px ;
}
.item-right {
    text-align: right;
}

.item-right h1 {
    margin-top: 80px;
    font-family: 'Magra', sans-serif;
    font-weight: bold;
    font-size: 40px;
    color: #e07040;
    letter-spacing: 2px;
    padding-right: 80px;
}
.inline-text
{
    color:#E07040;
    font-weight: bolder;
}
.item-box {
    background: #FFFFFF;
    margin-top: 4%;
    padding: 40px 80px;
    position:absolute;
    width: 70%;
    border-radius: 0px 20px 20px 0px;
    border-top:8px solid #E07040;
}

.item-box-right {
    background: #FFFFFF;
    margin-top: 4%;
    padding: 40px 80px;
    position:absolute;
    width: 70%;
    border-radius: 20px 0px 0px 20px ;
    border-top:8px solid #E07040;
    right: 0;
    text-align: right;
}
.item-box p
{
    font-family: 'OpenSans',sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
}
.item-box-right p
{
    font-family: 'OpenSans',sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
}

.item-image {
    position: relative; /* To allow image adjustments if needed */
    z-index: -1;
}



/*.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
}

.logo img {
    width: 96%;
}

.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.nav-links li {
    font: 400 20px Monda, sans-serif;
}

.nav-links a {
    text-decoration: none;
    color: #D25D38;
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 3em;
}
*/
/*new style*/
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
.fonts::after
{
    position: absolute;
    background:#D25D38;
    content: "";
    width: 0%;
    height: 4px;
    right: 0;
    bottom: -2px;
    transition: width 0.5s;
}
.fonts:hover::after
{
    width: 70%;
    cursor: pointer;
}

/* Responsive Design for Tablets and Smaller Screens 
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

    */
.bci
{
    position: absolute;
    right: 0;
    bottom:25%;
}
.oeko
{
    position: absolute;
    right: 0;
    bottom:8%;
    width: 6%;
    border-radius: 20px 0px 0px 0px;
    background-color: #FFFFFF;
}
.oeko img
{
    padding: 15px;
    height: 11vh;
    width: 100%;
}
.sec1 {
background-image: url('./../assets/home.png');
    position: relative;
    height: 79vh;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
}

.box {
    width: 100%;
    padding-top: 3em;
}

.overlap-group {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.box .section-heading {
    color: rgba(224, 112, 64, 1);
    font: 600 40px/1 Magra, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    margin-right: 0.6em;
}

.box .rectangle {
    background-color: #e0704066;
    height: 12px;
    left: 669px;
    top: 20px;
    width: 400px;
}

.box .section {
    color: #585858;
    font: 400 17px/26px Outfit, sans-serif;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 25.5px;
    text-align: center;
    padding-top: 2em;

}

.sec2 {
    height: 68vh;
    background-image: url(../assets/Designer.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: 5em;
}

.border-img {
    height: 80%;
    width: 100%;
    padding: 0em 0em 4em 0em;
}

.overlap-group1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.section-heading1 {
    color: #e07040;
    font: 600 40px/1 Magra, sans-serif;
    font-size: 40px;
    font-weight: 700;
    left: 0;
    letter-spacing: 2px;
    line-height: 50px;
    text-align: center;
    top: 0;
    white-space: nowrap;
    text-transform: uppercase;
}

.rectangle1 {
    background-color: #e0704066;
    height: 12px;
    left: 669px;
    top: 20px;
    width: 37%;
    margin-right: 2em;
}

.map {
    width: 90%;
    margin-top: 4em;
    margin-bottom: 1.5em;
    margin-left: 5%;
    margin-right: 5%;
}

.brand {
    padding: 0em 10em;
}
.sec4 {
    margin: 0;
    height: 100vh;
    width: 100%;
    background-image: url(../assets/back3.png);
    margin-top: 4em;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.sec4-boxt {
    padding: 3em 32em;
}

.sec4-box {
    margin-top: 3em;
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 70px 0px 70px 0;
}


.minimum-quantity-info {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.quantity-title {
    color: #F4B194;
    align-self: center;
    font: 600 24px/1 Magra, sans-serif;
}

.quantity-description {
    color: #000;
    margin-top: 21px;
    width: 100%;
    font: 400 15px/29px Outfit, sans-serif;
}

.highlight {
    font-weight: 700;
    color: #E07040;
}

.lead-time-info {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 2em;
}

.lead-time-title {
    color: #f4b194;
    align-self: center;
    font: 600 24px/1 Magra, sans-serif;
}

.lead-time-details {
    color: #000;
    margin-top: 25px;
    width: 100%;
    font: 400 15px / 29px Outfit, sans-serif;
}

.lead-time-details strong {
    font-family: Outfit, sans-serif;
    font-weight: 800;
}

.lead-time-details span {
    font-family: Outfit, sans-serif;
    font-weight: 700;
    color: #E07040;
}

.sec4-btn {
    background-color: #e07040;
    padding: 8px 30px;
    padding-right: 40px;
    border: none;
    width: 100%;
    color: white;
    border-radius: 12px 0 12px 0;
    margin-top:30% ;
    transition: all 0.5ms ease;
    font-family: 'Magra',sans-serif;
}
.arrow
{
    position: absolute;
    margin-left: 1px;
}
.sec4-btn:hover .arrow
{
    transform: translateX(10px);
    cursor: pointer;
}
.sec4-btn:hover
{
    transform: translateY(-10px);
    opacity: 70%;
    cursor: pointer;
}

.order-instructions {
    display: flex;
    max-width: 496px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.order-title {
    background-color: #F5F1EA;
    width: 100%;
    padding: 19px 18px;
    color: #E07040;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 5%;
    font: 600 42px/1 Magra, sans-serif;
}

.footer {
  align-items: start;
  display: flex;
  gap: 20px;
  font-weight: 400;
  justify-content: space-between;
  margin-top: 3em;
  padding: 2em 8em 0em 7em;
  height: 450px;
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

.footer-logo
{
    margin-top: 10px;
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
  font-size: 22px;
  position: relative;
}

.footer-title1 {
  color: #e07040;
  position: relative;
  margin-top: 55px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font: 22px/150% Magra, sans-serif;
  font-weight: 900;
  margin-bottom: 0.5em;
}

.footer-title2 {
  color: #E07040;
  position: relative;
  margin-top: 55px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font: 22px/150% Magra, sans-serif;
  font-weight: 900;
  margin-bottom: 1em;
}

.footer-address {
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 32px;
  align-self: stretch;
  margin-top: 20px;
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
    margin-top: 13px;
    font-family: "Outfit", Helvetica;
    font-size: 15px;
    font-weight: 600;
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
  .footer-bc
{
    margin-top: 15%;
    border: 5px solid #E07040;
    border-radius: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-right: 10%;
    width: 80px;
}
.footer-bc img
  {
    margin: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
.footer-bci
  {
    margin-top: 15%;
    border: 5px solid #E07040;
    border-radius: 20px 0 20px 0;
    display: flex;
    justify-content: center;
    width: 140px;
    height: 80px;
  }
  .footer-bci img
  {
    margin: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 80%;
  }
  .gallery-link {
    display: inline-block;
    text-decoration: none;
    transition: transform 0.5s ease-in-out;
  }
  .gallery-link:hover
  {
    transform: translateY(-10px);
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

.velcord-stats {
    display: flex;
    flex-direction: column;
}

.stats-container {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 447px;
    align-items: center;
    justify-content: center;
    padding: 87px 70px;
    margin-top: 5em;
}

.background-image {
    position: absolute;
    inset: 0;
    height: 90%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.stats-wrapper {
    position: relative;
    width: 100%;
    max-width: 1098px;
}


.stats-grid {
    display: flex;
    gap: 20px;
}

@media (max-width: 991px) {
    .stats-container {
        max-width: 100%;
        padding: 0 20px;
    }

    .stats-wrapper {
        max-width: 100%;
    }

    .stats-grid {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
}

.cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3em;
}

.flag {
    margin-top: 1em;
    margin-left: 3em;
}
.sec5
{
    margin-left: 5%;
    margin-right: 5%;
}

.service-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px 44px;
    color: #e07040;
    text-align: center;
    text-transform: uppercase;
    font: 600 40px/1 Magra, sans-serif;
    margin-top: 0.5em;
    margin-bottom: 2em;
}

.service-line {
    background-color: rgba(224, 112, 64, 0.4);
    align-self: stretch;
    width: 161px;
    max-width: 100%;
    height: 12px;
    margin: auto 0;
    flex-basis: 20%;
}

.service-title {
    align-self: stretch;
    flex-basis: 60%;
    font-weight: bold;
    font-size: 40px;
    font-family: "Magra",sans-serif;
}
.service-header:hover .service-line
{
    flex-basis: 20%;
}

.responsive-image {
    width: 100%;
}

.responsive-image2 {
    width: 100%;
    margin-top: 5em;
    margin-bottom: 5em;
}

.service-header1 {
    display: flex;
    justify-content:space-between ;
    align-items: center;
    gap: 40px 44px;
    color: #e07040;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font: 600 40px/1 Magra, sans-serif;
    margin-top: 0.5em;
}

.service-line1 {
    background-color: rgba(224, 112, 64, 0.4);
    align-self: stretch;
    width: 370px;
    max-width: 100%;
    height: 12px;
    flex-basis: 30%;
    margin: auto 0;
}

.service-title1 {
    align-self: stretch;
    flex-basis: 50%;
    font-size: 40px;
    font-family: "Magra",sans-serif;
    font-weight: bold;

}
.service-header1:hover .service-line1
{
    flex-basis: 30%;
}

.order-instructions {
    display: flex;
    max-width: 496px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.order-title {
    background-color: #F5F1EA;
    width: 100%;
    padding: 19px 18px;
    color: #E07040;
    text-align: center;
    letter-spacing: 2px;
    font: 600 40px/1 Magra, sans-serif;
}

@media (max-width: 991px) {
    .order-title {
        max-width: 100%;
        padding: 0 20px;
    }
}
.service-header2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px 44px;
    color: #e07040;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font: 600 40px/1 Magra, sans-serif;
    margin-top: 0.1em;
}

.service-line2 {
    background-color: rgba(224, 112, 64, 0.4);
    align-self: stretch;
    width: 219px;
    max-width: 100%;
    height: 12px;
    flex-basis: 30%;
    margin: auto 0;
}
.service-header2:hover .service-line2
{
    flex-basis: 30%;
}
.service-title2 {
    align-self: stretch;
    flex-basis: 60%;
    font-size: 40px;
    font-family: "Magra",sans-serif;
    font-weight: bold;
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
a
{
    text-decoration: none;
    color: #333;
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


</style>
