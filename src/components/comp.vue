<template>
  <section class="image-slider">
    <div class="slider-container">
      <button class="nav-button prev" aria-label="Previous image" @click="prevSlide">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3181379835e9b3b2bbbd323ed1435bb8ace1f0bde2e7a8567c5c87520acf8336?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a"
          alt="" class="nav-icon" />
      </button>
      <div class="image-grid">
        <transition-group name="fade">
          <img v-for="(image, index) in visibleImages" :key="image.id" :src="image.src" :alt="image.alt"
            class="slider-image" :class="{ active: index === currentIndex }" />
        </transition-group>
      </div>
      <button class="nav-button next" aria-label="Next image" @click="nextSlide">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d18d44c6e20963427cee5d44d41a33986528ac791c2c5f643202faf3b8d9d946?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a"
          alt="" class="nav-icon" />
      </button>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useImageSlider } from '../useImageSlider';

export default {
  name: 'ImageSlider',
  setup() {
    const images = [
      { id: 1, src: 'https://cdn.builder.io/api/v1/image/assets%2F5acb37f697474270ad553272da64e56a%2Fd5c9ffad76a848989bd259b8a6ce7427', alt: 'Slider image 1' },
      { id: 2, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/14b4cd049d9003c42721bfc87d81ad467a155534da24a23de5c1eeb19d28f2a5?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 2' },
      { id: 3, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/371c943c2ddc8b052ce911f1154aead4d6b09008c8c77808970b85cdfb501a29?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 3' },
      { id: 4, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0e8214b1e92945e89f67d1f1e6703b2032c170a4eac1918bfd8a25be45a40297?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 4' },
      { id: 5, src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee55948fbbb458a3255118b82c0d61854c5faf92923405fdecc4056ea31bd56f?placeholderIfAbsent=true&apiKey=5acb37f697474270ad553272da64e56a', alt: 'Slider image 5' },
    ];

    const { currentIndex, nextSlide, prevSlide } = useImageSlider(images.length);

    const visibleImages = computed(() => {
      const start = currentIndex.value;
      const end = (start + 5) % images.length;
      if (start < end) {
        return images.slice(start, end);
      } else {
        return [...images.slice(start), ...images.slice(0, end)];
      }
    });

    return {
      visibleImages,
      currentIndex,
      nextSlide,
      prevSlide,
    };
  },
};
</script>

<style scoped>
.image-slider {
  display: flex;
  flex-direction: column;
  margin-top: 6em;
}

.slider-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden; /* This hides the overflow */
}

@media (max-width: 991px) {
  .slider-container {
    padding: 0 20px;
  }
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}


.prev
{
  margin-left: 20px;
  z-index: 2;
}
.next
{
  margin-right: 20px;
  z-index: 2;
}
.image-grid {
  display: flex;
  gap: 10px;
}
.slider-image {
  transform: translateX(-90px); /* Moves the first image partially offscreen */
}
.slider-image {
  width: 330px;
  height: 269px;
  max-width: 100%;
  transition: opacity 0.5s ease-in-out;
}



.next .nav-icon {
  width: 32px;
  height: 32px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>