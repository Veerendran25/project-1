<template>
  <section class="image-slider">
    <div class="slider-container">
      <button class="nav-button prev" aria-label="Previous image" @click="prevSlide">
        <img src="./../assets/CaretRight.png" alt="" class="nav-icon" />
      </button>
      <div class="image-grid">
        <transition-group name="fade">
          <img
            v-for="(image, index) in visibleImages"
            :key="image.id"
            :src="image.src"
            :alt="image.alt"
            class="slider-image"
            :class="{ active: index === currentIndex }"
          />
        </transition-group>
      </div>
      <button class="nav-button next" aria-label="Next image" @click="nextSlide">
        <img src="./../assets/CaretLeft.png" alt="" class="nav-icon" />
      </button>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useImageSlider } from '../useImageSlider';
import i1 from '@/assets/derbyrib.png';
import i2 from '@/assets/waffle.png';
import i3 from '@/assets/poplin.png';
import i4 from '@/assets/ripstop.png';
import i5 from '@/assets/satin.png';
import i6 from '@/assets/pique.png';
import i7 from '@/assets/velvet.png';
import i8 from '@/assets/oxford.png';
import i9 from '@/assets/mesh.png';
import i10 from '@/assets/canvas.png';

export default {
  name: 'ImageSlider',
  setup() {
    const images = [
      { id: 1, src: i1, alt: 'Slider image 1' },
      { id: 2, src: i2, alt: 'Slider image 2' },
      { id: 3, src: i3, alt: 'Slider image 3' },
      { id: 4, src: i4, alt: 'Slider image 4' },
      { id: 5, src: i5, alt: 'Slider image 5' },
      { id: 6, src: i6, alt: 'Slider image 6' },
      { id: 7, src: i7, alt: 'Slider image 7' },
      { id: 8, src: i8, alt: 'Slider image 8' },
      { id: 9, src: i9, alt: 'Slider image 9' },
      { id: 10, src: i10, alt: 'Slider image 10' },
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
}

.slider-container {
  border-radius: 10px;
  background-color: #F0BCA5;
  border: 10px solid #E07040;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 50px 0px 50px 0px;
  justify-content: space-between;
  padding: 59px 0px;
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
  flex-basis: 5%;
}

.pre .nav-icon {
  width: 55px;
  height: 55px;
  object-fit: contain;
}

.image-grid {
  display: flex;
  gap: 45px;
  justify-content: center;
  margin:auto;
  margin-top: 1%;
  flex-wrap:nowrap;
  flex-grow: 1;
  flex-basis: 50%;
  overflow: hidden; /* Prevents overflow of images */

}

.slider-image {
  width: 203px;
  height: 203px;
  object-fit: contain;
  max-width: 100%;
  transition: opacity 0.5s ease-in-out;
}



.next .nav-icon {
  width: 55px;
  height: 55px;
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