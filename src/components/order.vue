<template>
  <div>
      <div class="contact-container">
        <!-- Left Side: Contact Information -->
        <div class="contact-info">
          <div class="box">
          <h2 class="title">Contact us!</h2>
          </div>
          <div class="info">
            <div class="values">
              <h1 class="v-title"><img src="../assets/o-1.png" class="img">Address</h1>
              <p class="v-desc">8/962, PN Rd, Karupparayan Nagar,<br>
                Tiruppur, India. 641603</p>
            </div>
            <div class="values">
              <h1 class="v-title"><img src="../assets/o-2.png" class="img">Phone Number</h1>
              <p class="v-desc">+91  82485 46440</p>
            </div>
            <div class="values">
              <h1 class="v-title"><img src="../assets/o-3.png" class="img">Email</h1>
              <p class="v-desc">contact@selvytex.com</p>
            </div>
          </div>
          <div class="social-media">
            <h3 class="v-title">Follow us</h3>
            <div class="social-img">
              <a href=""><img src="../assets/insta.png" alt="Instagram" class="brands"></a>
              <a href=""><img src="../assets/LinkedinLogo.png" alt="linked" class="brands"></a>
              <a href=""><img src="../assets/FacebookLogo.png" alt="facebook" class="brands"></a>
              <a href=""><img src="../assets/ArrowLineDown.png" alt="download" class="brands"></a>
            </div>
          </div>
        </div>
    
        <!-- Right Side: Contact Form -->
        <section class="contact-form">
          <div class="form-container">
            <h2 class="form-title">Send a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="name-fields">
                <div class="input-group name-field">
                  <label for="firstName">First Name</label>
                  <input type="text" id="firstName" v-model="firstName" class="input-field-name"  required>
                </div>
                <div class="input-group name-field">
                  <label for="lastName">Last Name</label>
                  <input type="text" id="lastName" v-model="lastName" class="input-field-name"  required>
                </div>
              </div>
              <div class="input-group">
                <label for="email">Email</label>
                <div class="inline-image">
                  <img src="./../assets/mail.png" alt="email">
                <input type="email" id="email" v-model="email" class="input-field" placeholder="Enter Your Email" required>
                </div>
              </div>
              <div class="input-group">
                <label for="phone">Phone</label>
                <div class="inline-image">
                  <img src="./../assets/ph.png" alt="phone">
                <div class="phone-input">
                  <input type="tel" id="phone" v-model="phone" class="input-field" placeholder="Enter Phone Number" required>
                  </div>
                </div>
              </div>
              <div class="input-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="message" class="input-field message-area" placeholder="Type Message..." required></textarea>
              </div>
              <button type="submit" class="submit-button">Submit <span class="arrow">➔</span></button>
            </form>
          </div>
        </section>
      </div>
    
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.box
{
  background-color: #F5F1EA;
  border-radius: 16px;
  width: 300px;
  margin-left: 10%;
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
.brands
{
  margin-right: 10px;
  transition: transform 1s ease-in-out;
}
.brands:hover
{
  transform: translateY(-20px);
}
.img
{
  width: 25px;
  height: 25px;
  margin-right: 20px;
  transition: transform 1s ease-in-out;
}
.img:hover
{
  transform: translateY(-10px);
}
.v-title
{
  font-family: 'Outfit',sans-serif;
  font-size: 24px;
  font-weight: 500;
  color:#E07040;
}
.v-desc
{
  margin-bottom: 50px;
  font-family: 'Outfit',sans-serif;
  font-size: 20px;
  margin-left: 50px;
  font-weight: 400;
  line-height: 32px;
}

.contact-container {
  display: flex;
  padding-top: 50px;
  padding-bottom: 60px;
  /*justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  */
  flex-direction:row ;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  width: 90%;
  /*max-width: 1200px;*/
  margin: 0 auto;
  margin-top: 2em;
  box-sizing: border-box;
  /*flex-wrap: wrap;*/
}

.contact-info {
  margin-left: 5%;
  margin-right: 40px;
  flex-basis: 35%;
  padding: 0em 1em;
  /*min-width: 250px;*/
  box-sizing: border-box;
}

.contact-info h2 {
  color: #e07040;
  margin-top: 35px;
  font-family: "Magra", sans-serif;
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}

.info {
  margin-top: 30%;
  font-size: 16px;
  margin-left: 1%;
  line-height: 1.5;
}

.social-media {
  margin-top: 20%;
  background-color: #F5F1EA;
  display: flex;
  width: 90%;
  border-radius: 16px;
}
.social-media h3
{
  margin-left: 12%;
  padding: 20px 10px;

}

.social-img {
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
}

.social-media h3 {
  color: #e07040;
  font-family: "Magra-Bold", Helvetica;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-form {
  width: 100%;
  flex-basis: 70%;
  /*max-width: 698px;*/
  margin: 0 auto;
  /*display: flex;
  justify-content: center;
  box-sizing: border-box;*/
  padding: 20px;
}

.form-container {
  background-color: #E07040;
  border-radius: 20px;
  padding-right: 20px;
  width: 92%;
  margin-right: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.form-title {
  color: #fff;
  font-family:'Magra', sans-serif;
  font-weight: bold;
  font-size: 48px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: none;
  margin-top: none;
  margin-left: 30%;
}

.name-fields {
  display: flex;
  margin-right: 1px;
  gap: 2px;
  width: 100%;
  border-collapse: separate;
  overflow: hidden;
  perspective: 1px;
  border-radius: 15px;
}

.name-field {
  flex: 1;
  border-collapse: separate;
  overflow: hidden;
  perspective: 1px;
  border-radius: 20px !important;
}

.inline-image
{
  display: flex;
  flex-direction: row;
  background-color:#ffffffff;
  width: 90%;
  border-radius: 20px !important;
}
.inline-image img
{
  width: 26px;
  height: 20px;
  margin-top: 18px;
  margin-left: 15px;
}
.input-group {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 20px;
  margin-left: 2em;
  margin-right: 30px;
  padding-top: 10px;
  border-collapse: separate;
  overflow: hidden;
  perspective: 1px;
  margin-left: 40px;
  border-radius: 20px !important;
}

.input-group label {
  color: #fff;
  font-size: 15px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  font-family: "Poppins", Helvetica;
}
.input-field-name::placeholder
{
  color: rgba(0, 0, 0, 0.5);
  font-family: "poppins",sans-serif;
  font-size: 14px;
}
.input-field::placeholder
{
  color: rgba(0, 0, 0, 0.5);
  font-family: 'poppins',sans-serif;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: lighter;
}
.input-field-name{
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 20px !important;
  background-color: #fff;
  font-size: 17px;
  border-collapse: separate;
  overflow: hidden;
  perspective: 1px;
  color: rgb(0, 0, 0);
  font-weight: 400;
}
.input-field {
  width: 90%;
  padding: 15px;
  border: none;
  border-radius: 20px !important;
  background-color: #fff;
  font-size: 17px;
  border-collapse: separate;
  overflow: hidden;
  perspective: 1px;
  color: rgb(0, 0, 0);
  font-weight: 400;
}

.phone-input {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px !important;
  border-collapse: separate;
  overflow: hidden;
  perspective: 1px;
  width: 90%;
}



.country-code {
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  margin-right: 5px;
}

.message-area {
  width: 90%;
  height: 107px;
  resize: vertical;
}

.submit-button {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  font-family: 'poppins',sans-serif;
  font-size: 16px;
  font-weight: 520;
  padding: 7px 30px;
  transition: background-color 0.3s ease;
  width: 36%;
  align-self: center;
  margin-top: 10px;
  margin-left: 35%;
  margin-bottom: 30px;
}

.submit-button:hover {
  background-color: #f0f0f0;
}

@media (max-width: 991px) {
  .contact-container {
    flex-direction: column;
    padding: 20px;
  }

  .contact-info, .contact-form {
    width: 100%;
    margin-bottom: 20px;
  }

  .form-container {
    padding: 20px;
  }

  .name-fields {
    flex-direction: column;
  }
}
input:focus {
    outline: none; /* Removes the default focus outline */
    box-shadow: none; /* Removes any custom focus shadow */
}
textarea:focus {
    outline: none; /* Removes the default focus outline */
    box-shadow: none; /* Removes any custom focus shadow */
}
.title
{
  position: relative;
  margin-bottom: 8%;
  padding: 20px 5px;
}

.title:hover::after
{
    width: 90%;
    cursor: pointer;
}
.submit-button
{
  transition: transform 0.3s ease;
}
.submit-button:hover
{
  transform: translateX(5px);
}


</style>