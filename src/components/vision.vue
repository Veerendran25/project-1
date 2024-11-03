<template>
  <section class="mission-vision">
    <div class="content-wrapper">
      <div class="card-container">
        <article class="mission-card block-left">
          <iframe src="https://lottie.host/embed/73d0b98c-8ae2-4927-9a22-2c620b271aa2/jC8rCcHAgX.json" style="width: 200px;height: 200px;border: none;"></iframe>
          <h2 class="card-title">OUR MISSION</h2>
          <p class="card-description">
            Our mission at SelvyTex is to set new standards in <br> custom clothing manufacturing. By focusing on <br> <span class="highlight"> personalized service</span> and <span class="highlight">client satisfaction</span>, we <br> create lasting relationships while fostering a safe, <br><span class="highlight"> supportive environment for our employees</span>,<br> ensuring every stitch reflects our commitment to <br><span class="highlight"> quality</span> and<span class="highlight"> trust</span>.
          </p>
        </article>
        <article class="vision-card block-right">
          <iframe src="https://lottie.host/embed/0dcdf4d2-fb63-4dc7-807c-ab2d1b330964/BunVuOy7BC.json" style="width: 200px;height: 200px;border: none;"></iframe>
          <h2 class="card-title">OUR VISION</h2>
          <p class="card-description">
            SelvyTex aspires to be a <span class="highlight"> global leader in textile <br> manufacturing</span>, delivering exceptional quality, <br> building trusted client partnerships, and <br> prioritizing employee well-being. Through <br> innovation, we aim to impact both fashion and the <br> planet positively, fostering a future where <br><span class="highlight"> excellence, integrity, and compassion thrive</span>.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission-vision {
  padding-top: 89px;
  margin-top: 8em;
}

.content-wrapper {
  background-color: rgba(224, 112, 64, 0.47);
  display: flex;
  justify-content: center;
  padding: 0 12em 97px;
}

.card-container {
  z-index: 10;
  margin-top: -89px;
  width: 95%;
  justify-content: center;
  display: flex;
  gap: 20%;
}

.mission-card,
.vision-card {
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 14px 14px 14px rgba(0, 0, 0, 0.25);
  border-top: 10px solid #e07040;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  width: 50%;
  padding: 30px 40px 15px;
  transition: transform 0.5s ease-in-out 0.1s;
}
.mission-card:hover
{
  transform: translateY(-20px);
}
.vision-card:hover
{
  transform: translateY(-20px);
}

.card-image {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 150px;
  max-width: 100%;
}

.card-title {
  color: #e07040;
  letter-spacing: 2px;
  margin-top: 25px;
  font: 600 40px/1 'Magra', sans-serif;
}

.card-description {
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  align-self: stretch;
  margin-top: 25px;
  font: 600 15px/27px 'Outfit', sans-serif;
}

.highlight {
  font-weight: 700;
  font-size: 16px;
  color: #e07040;
}

@media (max-width: 991px) {
  .content-wrapper {
    max-width: 100%;
    padding: 0 20px;
  }

  .card-container {
    max-width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }

  .mission-card,
  .vision-card {
    max-width: 100%;
    width: 100%;
    padding: 45px 20px 85px;
  }

  .card-title {
    margin-top: 40px;
  }
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