<template>
  <svg
    width="100%"
    height="150px"
    viewBox="0 0 800 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Animated Circles -->
    <circle
      v-for="circle in circles"
      :key="circle.id"
      :cx="circle.cx"
      :cy="circle.cy"
      :r="circle.radius"
      :fill="circle.color"
    />
  </svg>
</template>

<script>
export default {
  name: "AdvancedSvgAnimation",
  data() {
    return {
      circles: [
        {
          id: 1,
          cx: Math.random() * 100,
          cy: Math.random() * 175,
          radius: Math.random() * 10,
          color: "#895c38",
        },
        {
          id: 2,
          cx: Math.random() * 100,
          cy: Math.random() * 175,
          radius: Math.random() * 10,
          color: "#895c38",
        },
        {
          id: 3,
          cx: Math.random() * 100,
          cy: Math.random() * 175,
          radius: Math.random() * 10,
          color: "#895c38",
        },

        // Add more circles or other shapes with initial properties
      ],
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      this.circles.forEach((circle) => {
        setInterval(() => {
          const maxRadius = 20; // 最大半径
          const minRadius = 10; // 最小半径
          circle.radius = minRadius + Math.random() * (maxRadius - minRadius); // 随机半径
          circle.cx = circle.radius + Math.random() * (800 - 2 * circle.radius); // 随机 x 坐标
          circle.cy = circle.radius + Math.random() * (350 - 2 * circle.radius); // 随机 y 坐标
          circle.color = `#976c22`;
        }, Math.random() * 3000);
      });
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
