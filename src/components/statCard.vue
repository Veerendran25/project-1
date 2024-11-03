<template>
    <article class="stat-card">
      <img :src="icon" :alt="title" class="stat-icon" />
      <h3 class="stat-number">
        <span class="number-highlight">{{ number }}</span>
        <span class="number-title">{{ title }}</span>
      </h3>
      <p class="stat-description" v-html="description"></p>
    </article>
  </template>
  
  <script>
  export default {
    name: 'StatCard',
    props: {
      icon: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .stat-card {
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px;
    flex: 1;
    margin-bottom: 5%;
    transition: transform 1s ease-in-out;
  }
  
  .stat-card:hover
  {
    transform: translateY(-20px);
  }
  .stat-icon {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
  
  .stat-number {
    color: rgba(210, 93, 56, 1);
    font-size: 17px;
    margin-top: 25px;
  }
  
  .number-highlight {
    font-family: 'Spectral SC', -apple-system, Roboto, Helvetica, sans-serif;
    font-weight: 500;
  }
  
  .number-title {
    font-family: 'Magra', -apple-system, Roboto, Helvetica, sans-serif;
  }
  
  .stat-description {
    color: rgba(0, 0, 0, 1);
    font-size: 13px;
    line-height: 18px;
    font-family: 'Outfit', sans-serif;
    margin-top: 10px;
    font-weight: 600;
  }
  @keyframes appearFromTop {
    from {
        opacity: 0.8;
        transform: translateY(-500px); /* Adjust drop distance */
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
}

.stat-card {
    opacity: 0; /* Ensures elements are hidden initially */
    animation: appearFromTop 2s ease-in-out forwards;
    animation-timeline: view();
}

/* Stagger the animation delay for each card */
.stat-card:nth-child(1) {
  animation-range-start: contain 1%;
  animation-range-end: contain 5%;
}
.stat-card:nth-child(2) {
  animation-range-start: contain 10%;
  animation-range-end: contain 20%;
}
.stat-card:nth-child(3) {
  animation-range-start: contain 20%;
  animation-range-end: contain 30%;
}
.stat-card:nth-child(4) {
  animation-range-start: contain 30%;
  animation-range-end: contain 50%;
}
  @media (max-width: 991px) {
    .stat-card {
      margin-top: 40px;
    }
  }
  </style>