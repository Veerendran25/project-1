<template>
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
</template>
<script>
export default {
    name:'foot',
};
</script>
<style scoped>

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
  }.footer-bc
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

.footer-link {
    margin-top: 13px;
    font-family: "Outfit-Regular", Helvetica;
    font-size: 17px;
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
.footer-link {
    margin-top: 13px;
    font-family: "Outfit", Helvetica;
    font-size: 15px;
    font-weight: 600;
}


</style>