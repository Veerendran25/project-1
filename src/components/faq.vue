<template>
    <div class="faq-section">
        <div class="left ">
            <h1 class="faq-title ">FREQUENTLY ASKED</h1>
            <h2 class="ques ">[QUESTION]</h2>
            <div class="buttons ">
              <button class="btn" :class="{ selected: selectedSection === 'production' }" @click="toggleSection('production')">PRODUCTION</button>
              <button class="btn" :class="{ selected: selectedSection === 'productRange' }" @click="toggleSection('productRange')">PRODUCT RANGE</button>
              <button class="btn" :class="{ selected: selectedSection === 'logistics' }" @click="toggleSection('logistics')">LOGISTICS</button>
            </div>
            <div class="details">
              <div class="accordion" :class="{ closed: selectedSection !== 'production' }" id="accordionProduction">
              <!-- Accordion Item 1 -->
          <div class="accordion-item" style="border:none;">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionOneOpen }"
                @click="toggleAccordion(1)"
                style="border-bottom: #E07040 solid;"
              >
              WHAT ARE YOUR MINIMUM ORDER QUANTITIES (MOQS)?
              </button>
            </h2>
            <div v-if="isAccordionOneOpen" class="accordion-collapse">
              <div class="accordion-body">
                Our minimum order quantities are 50 pieces for stock colors and fabrics, while custom Pantone colors require a minimum of 100 pieces.
              </div>
            </div>
          </div>

          <!-- Accordion Item 2 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionTwoOpen }"
                @click="toggleAccordion(2)"
              >
              WHAT IS YOUR SAMPLE LEAD TIME?
              </button>
            </h2>
            <div v-if="isAccordionTwoOpen" class="accordion-collapse">
              <div class="accordion-body">
                We provide prototype samples within 10 to 15 days, allowing for quick development and evaluation of your designs before full production.
              </div>
            </div>
          </div>

          <!-- Accordion Item 3 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionThreeOpen }"
                @click="toggleAccordion(3)"
              >
              WHAT IS YOUR PRODUCTION LEAD TIME?
              </button>
            </h2>
            <div v-if="isAccordionThreeOpen" class="accordion-collapse">
              <div class="accordion-body">
                Our production lead time ranges from 45 to 60 days, depending on the complexity of the order and any custom requirements.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionFourOpen }"
                @click="toggleAccordion(4)"
              >
              WHAT INFORMATION DO WE NEED TO SUPPLY TO USE YOU AS OUR CLOTHING MANUFACTURER?
              </button>
            </h2>
            <div v-if="isAccordionFourOpen" class="accordion-collapse">
              <div class="accordion-body">
                You will need to provide your design specifications, fabric preferences, color choices (Pantone if applicable), order quantities, and any specific treatments or customizations you require for your garments.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionFiveOpen }"
                @click="toggleAccordion(5)"
              >
              DO YOU OFFER ANY SPECIFIC CERTIFICATIONS OR AUDITS?
              </button>
            </h2>
            <div v-if="isAccordionFiveOpen" class="accordion-collapse">
              <div class="accordion-body">
                Yes, we work with suppliers that hold certifications like BCI, OEKO-TEX, and GOTS. Additionally, we offer third-party quality audits through recognized global inspection experts like QIMA.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionSixOpen }"
                @click="toggleAccordion(6)"
              >
              WHERE IS OUR MANUFACTURING FACILITY LOCATED?
              </button>
            </h2>
            <div v-if="isAccordionSixOpen" class="accordion-collapse">
              <div class="accordion-body">
                Our factory is located in Tirupur, Tamil Nadu, South India, a major textile hub responsible for 90% of India’s cotton knitwear exports.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionSevenOpen }"
                @click="toggleAccordion(7)"
              >
              CAN WE COME AND VISIT THE FACTORY?
              </button>
            </h2>
            <div v-if="isAccordionSevenOpen" class="accordion-collapse">
              <div class="accordion-body">
                Yes, we welcome factory visits. You are more than welcome to schedule a visit and see our operations in person.
              </div>
            </div>
          </div>
        </div>
        <!--product range-->
        <div class="accordion" :class="{ closed: selectedSection !== 'productRange' }" id="accordionProductRange">
          <!-- Accordion Item 1 -->
          <div class="accordion-item" style="border:none;">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionOneOpen }"
                @click="toggleAccordion(1)"
                style="border-bottom: #E07040 solid;"
              >
              WHAT DO WE MANUFACTURE?
            </button>
            </h2>
            <div v-if="isAccordionOneOpen" class="accordion-collapse">
              <div class="accordion-body">
                Selvy Tex specializes in full-service custom clothing manufacturing, producing high-quality garments with a focus on impeccable craftsmanship. Our production includes a range of processes such as cutting, printing, sewing, and treatments, all tailored to meet the specific needs of our clients.
              </div>
            </div>
          </div>

          <!-- Accordion Item 2 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionTwoOpen }"
                @click="toggleAccordion(2)"
              >
              WHAT TYPES OF FABRICS DO YOU WORK WITH?
              </button>
            </h2>
            <div v-if="isAccordionTwoOpen" class="accordion-collapse">
              <div class="accordion-body">
                We work with a wide variety of fabrics, including polyester, woven materials, viscose, modal, wool, velvet, and cotton. Our expertise extends to blending these materials to create premium, high-quality garments. We also offer organic and sustainable fabric options, collaborating with suppliers that hold certifications like BCI, OEKO-TEX, and GOTS.
              </div>
            </div>
          </div>

          <!-- Accordion Item 3 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionThreeOpen }"
                @click="toggleAccordion(3)"
              >
              DO YOU SUPPORT WITH THE DESIGN AND DEVELOPMENT?
              </button>
            </h2>
            <div v-if="isAccordionThreeOpen" class="accordion-collapse">
              <div class="accordion-body">
                Yes, Selvy Tex offers full support in design and development. We provide personalized service and attention to detail, helping clients bring their unique visions to life. Our capabilities include prototyping, sampling, and a range of advanced printing and treatment techniques, ensuring that each order meets the client’s specific design requirements.              </div>
            </div>
          </div>
        </div>
        <!--Logistics-->
        <div class="accordion" :class="{ closed: selectedSection !== 'logistics' }" id="accordionLogistics">
          <!-- Accordion Item 1 -->
          <div class="accordion-item" style="border:none;">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionOneOpen }"
                @click="toggleAccordion(1)"
                style="border-bottom: #E07040 solid;"
              >
              HOW DO YOU SHIP YOUR GARMENTS?
            </button>
            </h2>
            <div v-if="isAccordionOneOpen" class="accordion-collapse">
              <div class="accordion-body">
                At Selvy Tex, we offer flexible shipping options to accommodate our clients’ needs. We can ship garments via air or sea, depending on your preferences and urgency. For air shipments, delivery typically takes between 3 to 7 days, while sea shipments generally range from 20 to 35 days. Our logistics team ensures that all garments are packed securely to prevent damage during transit and are shipped through reputable carriers to guarantee timely and safe delivery.
              </div>
            </div>
          </div>

          <!-- Accordion Item 2 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                :class="{ collapsed: !isAccordionTwoOpen }"
                @click="toggleAccordion(2)"
              >
              WHAT ARE YOUR SHIPPING COSTS?
              </button>
            </h2>
            <div v-if="isAccordionTwoOpen" class="accordion-collapse">
              <div class="accordion-body">
                Shipping costs vary based on several factors, including the shipping method (air or sea), the total weight and volume of the shipment, and the destination. For an accurate estimate of shipping costs, we recommend discussing your specific order details with our team. We strive to provide competitive shipping rates while ensuring the quality and safety of your garments during transport. Please feel free to reach out for a detailed quote based on your order size and shipping preferences.              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="right block-right">
      <img src="../assets/corduroy-green-1024x1024.jpeg.png" alt="Side image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAccordionOneOpen: false,
      isAccordionTwoOpen: false,
      isAccordionThreeOpen: false,
      isAccordionFourOpen: false,
      isAccordionFiveOpen: false,
      isAccordionSixOpen: false,
      isAccordionSevenOpen: false,
      selectedSection: 'production',
    };
  },
  methods: {
    toggleAccordion(accordionNumber) {
      switch (accordionNumber) {
        case 1:
          this.isAccordionOneOpen = !this.isAccordionOneOpen;
          this.isAccordionTwoOpen = false;
          this.isAccordionThreeOpen = false;
          this.isAccordionFourOpen= false;
          this.isAccordionFiveOpen= false;
          this.isAccordionSixOpen= false;
          this.isAccordionSevenOpen= false;
          break;
        case 2:
          this.isAccordionOneOpen = false;
          this.isAccordionTwoOpen = !this.isAccordionTwoOpen;
          this.isAccordionThreeOpen = false;
          this.isAccordionFourOpen= false;
          this.isAccordionFiveOpen= false;
          this.isAccordionSixOpen= false;
          this.isAccordionSevenOpen= false;
          break;
        case 3:
          this.isAccordionOneOpen = false;
          this.isAccordionTwoOpen = false;
          this.isAccordionThreeOpen = !this.isAccordionThreeOpen;
          this.isAccordionFourOpen= false;
          this.isAccordionFiveOpen= false;
          this.isAccordionSixOpen= false;
          this.isAccordionSevenOpen= false;
          break;
        case 4:
          this.isAccordionOneOpen = false;
          this.isAccordionTwoOpen = false;
          this.isAccordionThreeOpen = false;
          this.isAccordionFourOpen= !this.isAccordionFourOpen;
          this.isAccordionFiveOpen= false;
          this.isAccordionSixOpen= false;
          this.isAccordionSevenOpen= false;
          break;
        case 5:
          this.isAccordionOneOpen = false;
          this.isAccordionTwoOpen = false;
          this.isAccordionThreeOpen = false;
          this.isAccordionFourOpen= false;
          this.isAccordionFiveOpen= !this.isAccordionFiveOpen;
          this.isAccordionSixOpen= false;
          this.isAccordionSevenOpen= false;
          break;
        case 6:
          this.isAccordionOneOpen = false;
          this.isAccordionTwoOpen = false;
          this.isAccordionThreeOpen = false;
          this.isAccordionFourOpen= false;
          this.isAccordionFiveOpen= false;
          this.isAccordionSixOpen= !this.isAccordionSixOpen;
          this.isAccordionSevenOpen= false;
          break;
        case 7:
          this.isAccordionOneOpen = false;
          this.isAccordionTwoOpen = false;
          this.isAccordionThreeOpen = false;
          this.isAccordionFourOpen= false;
          this.isAccordionFiveOpen= false;
          this.isAccordionSixOpen= false;
          this.isAccordionSevenOpen= !this.isAccordionSevenOpen;
          break;
      }
    },
    toggleSection(section) {
      // Set the selected section based on button click
      this.selectedSection = section;
      // Reset accordion states when switching sections
      this.isAccordionOneOpen = false;
      this.isAccordionTwoOpen = false;
      this.isAccordionThreeOpen = false;
      this.isAccordionFourOpen= false;
      this.isAccordionFiveOpen= false;
      this.isAccordionSixOpen= false;
      this.isAccordionSevenOpen= false;
    }
  }
};
</script>


<style scoped>

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
.closed
{
  display:none;
}
.accordion-body
{
    font-family: "Outfit",sans-serif;
    font-weight: 400;
    margin-top: 20px ;
    line-height: 25px;
    margin-left: 10px;
    font-size: 18px;
}
.accordion-item
{
    border: none;
    margin-bottom: 30px;
}
.accordion-button
{
    font-family: "Outfit",sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    border-bottom: #E07040 solid;
}

.accordion-button:not(.collapsed) {
    background-color: transparent; /* Remove background color */
    color: inherit; /* Inherit text color */
}

.accordion-button:focus {
    box-shadow: none; /* Remove the focus outline or shadow */
}
.details
{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 100px;
    margin-left: 1%;
    width: 80%;
}
.btn:hover{
    background-color: #FFF2F2;
    color: #E07040;
}
.btn:active {
    background-color: #E07040; /* Same as the original background color */
    color: #FFF2F2; /* Same as the original text color */
    outline: none; /* Remove the outline if present */
}
.btn
{
    border: none;
    padding: 15px 25px;
    border-radius: 20px ;
    background-color: #E07040;
    color: #FFF2F2;
    margin-top: 40px;
    font-size: 20px;
    margin-left: 15px;
    margin-right :30px ;
    font-family: "Outfit",sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
}
.selected
{
    background-color: #F5F1EA;
    color:#E07040;
}
h2
{
    font-size: 30px;
    font-weight: bold;
    font-family: "Magra",sans-serif;
    color:#666666 ;
    letter-spacing: 4px;
    margin-top: 40px;
    margin-left: 15px;

}
h1
{
    font-size: 50px;
    color:#D25D38;
    font-weight: bold;
    letter-spacing: 3px;
    font-family: "Magra", sans-serif;
}
.faq-section
{
    margin-top: 10%;
    margin-right: 0;
    display: flex;
    flex-direction: row;
    margin-bottom: 18%;
}
.left
{
    flex-basis: 90%;
    margin-left: 9%;
}
.right
{
    padding: 0;
    right: 0;
}
</style>
