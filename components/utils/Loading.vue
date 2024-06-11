<template>
  <div class="flex flex-col relative">
    <div class="fixed flex flex-col justify-center w-full items-center text-gray-500 z-[99999999999]">
    <svg xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem" viewBox="0 0 24 24"><circle cx="12" cy="12" r="0" fill="currentColor"><animate id="svgSpinnersPulseMultiple0" fill="freeze" attributeName="r" begin="0;svgSpinnersPulseMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulseMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate id="svgSpinnersPulseMultiple1" fill="freeze" attributeName="r" begin="svgSpinnersPulseMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulseMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate id="svgSpinnersPulseMultiple2" fill="freeze" attributeName="r" begin="svgSpinnersPulseMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulseMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/></circle></svg>

    <span class="flex text-xl items-end gap-1">
        Searching Ticket<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><circle cx="4" cy="12" r="0" fill="currentColor"><animate fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove0" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove1" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove0.end" dur="0.001s" values="20;4"/></circle><circle cx="4" cy="12" r="3" fill="currentColor"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove2" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove3" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove2.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/></circle><circle cx="12" cy="12" r="3" fill="currentColor"><animate fill="freeze" attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/><animate id="svgSpinners3DotsMove4" fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove5" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove4.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/></circle><circle cx="20" cy="12" r="3" fill="currentColor"><animate id="svgSpinners3DotsMove6" fill="freeze" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0"/><animate id="svgSpinners3DotsMove7" fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove6.end" dur="0.001s" values="20;4"/><animate fill="freeze" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12"/><animate fill="freeze" attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20"/></circle></svg>
    </span>
</div>
      <div
        class="page-slider page-slider-content bg-white flex justify-center z-[99999] items-center h-full w-full fixed top-0 left-0"
      >
        <div class="page-slider-content-image">
          <div class="page-slider-content-image-cityscape"></div>
          <div class="page-slider-content-image-cloud1"></div>
          <div class="page-slider-content-image-cloud2"></div>
          <div class="page-slider-content-image-airplane"></div>
          <div class="page-slider-content-image-cloud3"></div>
        </div>
      </div>
  </div>
</template>

<style scoped>
.page-slider-content {
  position: fixed;
}

.page-slider-content .page-slider-content-image {
  /* height: 279px; */
  position: relative;
  width: 100%;
}

.page-slider-content .page-slider-content-image-cityscape {
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-name: cityscape;
  animation-timing-function: linear;
  -ms-animation-timing-function: linear;
  -ms-animation-duration: 20s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-name: cityscape;
  -o-animation-timing-function: linear;
  -o-animation-duration: 20s;
  -o-animation-iteration-count: infinite;
  -o-animation-name: cityscape;
  -moz-animation-duration: 20s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-name: cityscape;
  -moz-animation-timing-function: linear;
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: cityscape;
  -webkit-animation-timing-function: linear;
  background-image: url("/bg-image.jpg");
  background-size: 100% 279px;
  background-position: 0 0;
  background-repeat: repeat-x;
  height: 316px;
  position: absolute;
  top: 0;
  width: 100%;
}

.page-slider-content .page-slider-content-image-cloud1 {
  -webkit-animation-duration: 14s;
  -webkit-animation-name: airplane;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: lamposts;
  animation-timing-function: linear;
  animation-duration: 14s;
  animation-name: airplane;
  animation-iteration-count: infinite;
  animation-name: lamposts;
  animation-timing-function: linear;
  background-image: url("/cloud-31.png");
  background-position: 0 0;
  background-repeat: repeat-x;
  height: 216px;
  position: absolute;
  top: 40px;
  width: 100%;
}

.page-slider-content .page-slider-content-image-cloud2 {
  -webkit-animation-duration: 14s;
  -webkit-animation-name: airplane;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: lamposts;
  -webkit-animation-timing-function: linear;
  animation-duration: 14s;
  animation-name: airplane;
  animation-iteration-count: infinite;
  animation-name: lamposts;
  animation-timing-function: linear;
  background-image: url("/cloud-23.png");
  background-position: 0 0;
  background-repeat: repeat-x;
  height: 216px;
  position: absolute;
  top: 160px;
  width: 100%;
}

.page-slider-content .page-slider-content-image-airplane {
  -webkit-animation-duration: 0.8s;
  -webkit-animation-name: airplane;
  -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-duration: 0.8s;
  animation-name: airplane;
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-image: url("/flight.png");
  background-repeat: no-repeat;
  height: 148px;
  left: 50%;
  margin-left: -154px;
  position: absolute;
  top: 180px;
  width: 308px;
}

.page-slider-content .page-slider-content-image-cloud3 {
  -webkit-animation-duration: 14s;
  -webkit-animation-name: airplane;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: lamposts;
  -webkit-animation-timing-function: linear;
  animation-duration: 14s;
  animation-name: airplane;
  animation-iteration-count: infinite;
  animation-name: lamposts;
  animation-timing-function: linear;
  background-image: url("/cloud-12.png");
  background-position: 0 0;
  background-repeat: repeat-x;
  height: 216px;
  position: absolute;
  top: 60px;
  width: 100%;
}

@-moz-keyframes cityscape {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1930px 0;
  }
}

@-webkit-keyframes cityscape {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1930px 0;
  }
}

@-o-keyframes cityscape {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1930px 0;
  }
}

@-ms-keyframes cityscape {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1930px 0;
  }
}

@keyframes cityscape {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1930px 0;
  }
}

@-moz-keyframes lamposts {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1903px 0;
  }
}

@-webkit-keyframes lamposts {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1903px 0;
  }
}

@-o-keyframes lamposts {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1903px 0;
  }
}

@-ms-keyframes lamposts {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1903px 0;
  }
}

@keyframes lamposts {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -1903px 0;
  }
}

@-moz-keyframes airplane {
  0% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -moz-transform: translateY(4px);
    transform: translateY(4px);
  }

  100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
}

@-webkit-keyframes airplane {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@-o-keyframes airplane {
  0% {
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -o-transform: translateY(4px);
    transform: translateY(4px);
  }

  100% {
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}

@-ms-keyframes airplane {
  0% {
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  50% {
    -ms-transform: translateY(4px);
    transform: translateY(4px);
  }

  100% {
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes airplane {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(4px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
