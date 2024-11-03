<template>
    <section class="image-section block">
    <div class="image-container">
        <img loading="lazy"
        src="./../assets/maprect.png"
        alt="Decorative image" class="main-image" />
    </div>
    </section>
</template>
<script>
export default {
    name:'ma',
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
.image-section {
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  margin-top: 10em;
}

.image-container {
  background-color:#F5F1EA;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 70px 146px;
}

.main-image {
  aspect-ratio: 3.5;
  object-fit: contain;
  padding: 0;
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
</style>