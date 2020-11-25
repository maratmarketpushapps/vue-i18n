<template>
  <div class="looks">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <svg
      class="computer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 424.2 424.2"
    >
      <g>
        <path
          class="st0"
          d="M37.9,412H24.4c-6.6,0-12.1-5.4-12.1-12.1V24.1c0-6.6,5.4-12.1,12.1-12.1h375.9c6.6,0,12.1,5.4,12.1,12.1V400
	    c0,6.6-5.4,12.1-12.1,12.1H44"
        />
        <line class="st0" x1="16.7" y1="86" x2="408" y2="86" />
        <circle class="st0" cx="51.5" cy="51.2" r="8.7" />
        <circle class="st0" cx="86.3" cy="51.2" r="8.7" />
        <circle class="st0" cx="121.1" cy="51.2" r="8.7" />
        <path
          class="st0"
          d="M86.3,164.2l11.9,5c2.2,0.9,3.9,2.8,4.6,5.1L137,293.2c1,3.4,4.1,5.8,7.6,5.8h153.1c3.7,0,6.8-2.5,7.7-6
	    l26.2-105.6c1.2-5-2.6-9.9-7.7-9.9"
        />
        <polyline
          class="st1"
          points="323.9,177.5 153.2,177.5 163.2,215.9 281.9,215.9 272.9,252.9 173.9,252.9 "
        />
        <line class="st1" x1="254.2" y1="147.4" x2="254.2" y2="177.5" />
        <line class="st1" x1="209.1" y1="147.4" x2="209.1" y2="177.5" />
        <line class="st1" x1="253.6" y1="253.1" x2="253.6" y2="283.2" />
        <line class="st1" x1="208.5" y1="253.1" x2="208.5" y2="283.2" />
        <circle class="st1" cx="160.2" cy="333.8" r="13" />
        <circle class="st1" cx="281.9" cy="333.8" r="13" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "loaderAnim",
};
</script>

<style scoped>
.looks {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 30%;
}

.computer {
  margin: 0 auto;
  width: 10%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  stroke-dasharray: 2134;
  animation: draw-me 3s ease infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
}

@keyframes draw-me {
  0% {
    stroke-dashoffset: -2134;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 2134;
  }
}

.st0 {
  fill: none;
  stroke: #273238;
  stroke-width: 9;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st1 {
  fill: none;
  stroke: #ffb742;
  stroke-width: 9;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st3 {
  fill: none;
  stroke: #ffb742;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
</style>
