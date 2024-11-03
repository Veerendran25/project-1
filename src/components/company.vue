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
        <section class="sec1"></section>
        <div class="box">
            <div class="group">
                <div class="service-header1">
                    <div class="service-line1"></div>
                    <h2 class="service-title1">OUR COMPANY</h2>
                    <div class="service-line1"></div>
                </div>
                <p class="section">
                    SelvyTex is a <span class="inline-text"> premier custom clothing manufacturer</span> dedicated to <span class="inline-text">exceptional quality</span> and<span class="inline-text"> impeccable craftsmanship</span>. Our <br> passion for fashion drives us to cultivate strong relationships with clients and  suppliers alike. Through strategic planning and <br> investments, we <span class="inline-text"> ensure uncompromised quality</span> while <span class="inline-text">fostering reliable partnerships</span> in the clothing production industry.
                </p>
            </div>
        </div>
        <img src="../assets/back21.png" class="rect-img">
        <!--<div class="block"><comp></comp></div>-->
        <section class="sec2">
            <vision></vision>
        </section>
        <section class="sec3">
            <div class="service-header2">
                <div class="service-line2"></div>
                <h2 class="service-title2">OUR EXPERTISE</h2>
                <div class="service-line2"></div>
            </div>
            <div class="company-box">
                <div class="images">
                    <img src="./../assets/exp-1.png" alt="image" class="block-left">
                    <div class="exp">
                    <img src="./../assets/exp-2.png" alt="image">
                    <img src="./../assets/exp-3.png" alt="image">
                    </div>
                    <img src="./../assets/exp-4.png" alt="image" class="block-right">
                </div>
                <div class="cb">
                    <p>
                        Selvy Tex exceptionally blends <span class="inline-text"> premium fabrics </span> like Polyester, Viscose, and Modal to create outstanding  garments,<br> offering clients more than just a product and providing <span class="inline-text"> strong partnerships</span> and <span class="inline-text"> guaranteed high  quality</span>. Our <br> meticulous production process, from cutting to packing, is overseen by a <span class="inline-text"> specialized Quality  Control Team</span>, ensuring <br> each stage meets the highest standards for export.
                    </p>
                </div>
                    <img src="./../assets/exp-foot.png" alt="image">
            </div>
        </section>
        <section class="sec3">
            <div class="service-header2">
                <div class="service-line2"></div>
                <h2 class="service-title2">OUR VALUES</h2>
                <div class="service-line2"></div>
            </div>
            <div class="contain">
                <div class="cont block">
                <div class="box-c">
                    <img src="./../assets/v-1.png" alt="image">
                    <img src="./../assets/v2.png" alt="image">
                    <img src="./../assets/v-3.png" alt="image">
                </div>
                <div class="box-t">
                    <div class="txt">
                        <h2>Unified Commitment </h2>
                    </div>
                    <div class="txt">
                        <h2>Ethical <br> Practices</h2>
                    </div>
                    <div class="txt">
                        <h2>Coherent Work Environment</h2>
                    </div>
                </div>
                </div>
                <div class="cont block">
                <div class="box-c1">
                    <img src="./../assets/v-4.png" alt="image">
                    <img src="./../assets/v-5.png" alt="image">
                </div>
                <div class="box-t1">
                    <div class="txt">
                        <h2>Foundational Principles</h2>
                    </div>
                    <div class="txt">
                        <h2>Employee Wellbeing </h2>
                    </div>
                </div>
                </div>
            </div>
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
                <img src="https://cdn.builder.io/api/v1/image/assets%2Faf0c4f4a34884a7c857808257a84dbe0%2Fa5682d076d5c4a38903293c828d70d7f"
                    class="footer-logo" />
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
import Vision from "./vision.vue";
export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
header {
    background-color: white;
}
.contain
{
    margin-top: 3%;
    display: flex;
    flex-direction: column;
}
.cont
{
    display: flex;
    flex-direction: column;
}
.box-c
{
    background-color: #F0BCA5;
    width: 75%;
    display: flex;
    border-radius: 50px 0px 50px 0px;
    flex-direction: row;
    justify-content:space-around;
    translate:0px 25px;
}
.box-c1
{
    background-color: #F0BCA5;
    width: 50%;
    display: flex;
    border-radius: 50px 0px 50px 0px;
    flex-direction: row;
    justify-content:space-around;
    translate:0px 25px;
}
.box-c img
{
    margin: 30px 0px;
}
.box-c1 img
{
    margin: 30px 0px;
}
.box-t
{
    display: flex;
    flex-direction: row;
    width: 95%;
    justify-content: center;
    gap: 8%;
    background-color: #F5F1EA;
    box-shadow: 0px 4px 5px #a9a8a8;
    height: 203px;
}
.box-t1
{
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
    gap: 9%;
    background-color: #F5F1EA;
    box-shadow: 0px 4px 5px #a9a8a8;
    height: 203px;
}
.txt
{
    text-align: center;
    width: 262px;
    align-self: center;
    height: 107px;
    border-radius:0px 50px 0px 50px;
    box-shadow: -5px 10px 10px rgba(0, 0, 0, 0.5);
    background-color: #FFFFFF;
}
.txt h2
{
    
    color: #E07040;
    margin-top: 5%;
    font-family: 'Magra',sans-serif;
    font-weight: bold;
    font-size: 32px;
}
.company-box
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.cb
{
    background-color: #F5F1EA;
    margin-top:5%;
    align-self: center;
    margin-bottom: 7%;
    width: 70%;
}

.cb p
{
    padding: 30px 120px;
    font-size: 15px;
    font-family: 'OpenSans',sans-serif;
    line-height: 27px;
}
.images
{
    margin-top: 7%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
}
.inline-text
{
    color:#E07040;
    font-weight: bolder;
}
.exp
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 3%;
    margin-right: 3%;
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
margin-left: 2%;
margin-top: 8px;
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
    transition: width 1s;
}
.fonts:hover::after
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

.sec1 {
    height: 57vh;
    background-image: url(../assets/back2.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.box {
    width: 100%;
    padding-top: 1em;
}

.overlap-group {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.box .section-heading {
    color: #e07040;
    font-family: "Magra-Bold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    left: 0;
    letter-spacing: 2px;
    text-align: center;
    top: 0;
    white-space: nowrap;
}

.box .rectangle {
    background-color: #e0704066;
    height: 12px;
    left: 669px;
    top: 20px;
    width: 543px;
}

.box .section {
    font-family: "Outfit", Helvetica;
    font-size: 17px;
    letter-spacing: 0;
    line-height: 25.5px;
    text-align: center;
    margin-top: 2.1em;
    margin-bottom: 2em;
}

.rect-img {
    margin-top: 2em;
    height: 5vh;
    width: 100%;
}

.rect-img2 {
    margin-top: 4em;
    width: 100%;
}

.sec2-img {
    width: 100%;
    margin-top: 7em;
}
.sec2
{
    align-self: center;
}
.sec3 {
    margin-top: 5em
}

.overlap-group1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.section-heading1 {
    color: #e07040;
    font-family: "Magra-Bold", Helvetica;
    font-size: 40px;
    font-weight: 700;
    left: 0;
    letter-spacing: 2px;
    line-height: 50px;
    text-align: center;
    top: 0;
    white-space: nowrap;
}

.rectangle1 {
    background-color: #e0704066;
    height: 12px;
    left: 669px;
    top: 20px;
    width: 37%;
    margin-right: 2em;
}

.sec3-1 {
    padding: 2em 15em;
}
.sec3-2 {
    padding: 2em 20.9em;
}
.sec4 {
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

a
{
    text-decoration: none;
    color: #333;
}
.footer-link:hover
{
  transform: translateX(5px);
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
  
  .gallery-link {
    display: inline-block;
    text-decoration: none;
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
    margin-top: 0.5em;
    margin-left: 2em;
    margin-right: 10px;
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
    margin-top: 0.4em;
}

.service-line1 {
    background-color: rgba(224, 112, 64, 0.4);
    align-self: stretch;
    width: 370px;
    max-width: 100%;
    height: 12px;
    flex-basis: 50%;
    margin: auto 0;
}

.service-title1 {
    align-self: stretch;
    flex-basis: 50%;
    font-weight: bold;
    font-family: "Magra",sans-serif;
    font-size: 40px;
}
.service-header1:hover .service-line1
{
    flex-basis: 50%;
}
.service-header2 {
    display: flex;
    justify-content:space-between ;
    align-items: center;
    gap: 40px 44px;
    color: #e07040;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0.5em;
}

.service-line2 {
    background-color: rgba(224, 112, 64, 0.4);
    align-self: stretch;
    width: 370px;
    max-width: 100%;
    height: 12px;
    flex-basis: 60%;
    margin: auto 0;
}

.service-title2 {
    align-self: stretch;
    flex-basis: 40%;
    font-weight: bold;
    font-family: "Magra",sans-serif;
    font-size: 40px;
}
.service-header2:hover .service-line2
{
    flex-basis: 60%;
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