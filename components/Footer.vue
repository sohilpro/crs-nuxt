<template>
  <footer class="bg-[#1D1B20]">
    <div class="max-w-[1248px] w-full mx-auto px-5 py-1">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-20">
        <div>
          <NuxtLink :to="`/${locale}`"
            ><img alt="logo" src="/img/White 1.png"
          /></NuxtLink>
          <NuxtLink :to="`/${locale}`" class="flex items-center gap-4 mt-10 mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 22L21 21"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-white text-lg">CrsTrip.com</p>
          </NuxtLink>
          <NuxtLink :to="`/${locale}`" class="flex items-center gap-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-white text-lg">CrsTrip.com@gmail.com</p>
          </NuxtLink>
          <NuxtLink :to="`/${locale}`" class="flex items-center gap-4 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 9C22 5.13 18.87 2 15 2"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-white text-lg">+964 780 814 3063</p>
          </NuxtLink>
          <div class="mt-10 flex items-center gap-2">
            <NuxtLink
              :to="`/${locale}`"
              class="w-14 h-14 flex items-center justify-center rounded-2xl bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M12 35.1112L13.7219 28.7086C12.3332 26.2144 11.892 23.304 12.4793 20.5113C13.0665 17.7186 14.6429 15.231 16.919 13.505C19.1951 11.7789 22.0184 10.9302 24.8708 11.1146C27.7231 11.299 30.4131 12.5041 32.4473 14.5088C34.4815 16.5135 35.7233 19.1833 35.9449 22.0283C36.1665 24.8732 35.353 27.7026 33.6537 29.9971C31.9544 32.2916 29.4832 33.8974 26.6937 34.5197C23.9042 35.1421 20.9835 34.7393 18.4675 33.3853L12 35.1112ZM18.7793 30.9894L19.1793 31.2263C21.0017 32.3047 23.1303 32.751 25.2333 32.4955C27.3363 32.2401 29.2955 31.2974 30.8058 29.8142C32.3161 28.331 33.2925 26.3907 33.5828 24.2957C33.8732 22.2007 33.4613 20.0686 32.4112 18.2317C31.3611 16.3948 29.7319 14.9563 27.7774 14.1404C25.8229 13.3245 23.6529 13.1769 21.6056 13.7207C19.5584 14.2645 17.7488 15.4692 16.4589 17.147C15.169 18.8247 14.4713 20.8813 14.4744 22.9963C14.4727 24.75 14.9585 26.4697 15.8778 27.9641L16.1286 28.3769L15.1659 31.9505L18.7793 30.9894Z"
                  fill="#2C160B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.4865 24.6414C28.252 24.4526 27.9775 24.3197 27.6838 24.2529C27.3901 24.186 27.0849 24.187 26.7917 24.2556C26.351 24.4384 26.0663 25.1287 25.7815 25.4739C25.7215 25.5566 25.6333 25.6147 25.5334 25.6371C25.4336 25.6595 25.329 25.6448 25.2392 25.5957C23.6259 24.9649 22.2737 23.8081 21.4021 22.3132C21.3278 22.2199 21.2926 22.1015 21.304 21.9828C21.3153 21.8641 21.3724 21.7545 21.4631 21.677C21.7807 21.3631 22.0139 20.9744 22.1411 20.5467C22.1693 20.075 22.061 19.6051 21.8292 19.1931C21.65 18.6155 21.3089 18.1012 20.8462 17.7109C20.6076 17.6038 20.343 17.5678 20.0844 17.6075C19.8257 17.6471 19.5841 17.7606 19.3886 17.9343C19.0493 18.2265 18.78 18.5911 18.6005 19.001C18.421 19.411 18.3359 19.8559 18.3514 20.3031C18.3525 20.5542 18.3843 20.8042 18.4463 21.0476C18.6037 21.6323 18.8458 22.1909 19.1649 22.7058C19.3952 23.1001 19.6463 23.482 19.9174 23.8496C20.7984 25.057 21.9059 26.0821 23.1783 26.8681C23.8168 27.2675 24.4992 27.5923 25.2121 27.836C25.9526 28.1711 26.7702 28.2997 27.5781 28.2082C28.0384 28.1386 28.4745 27.9572 28.848 27.6799C29.2216 27.4025 29.5211 27.0378 29.7203 26.6177C29.8374 26.3639 29.8729 26.0802 29.822 25.8055C29.7 25.2438 28.9475 24.9121 28.4865 24.6414Z"
                  fill="#2C160B"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              :to="`/${locale}`"
              class="w-14 h-14 flex items-center justify-center rounded-2xl bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
              >
                <path
                  d="M1.35369 8.15009C1.35369 8.15009 11.1191 4.03704 14.506 2.58874C15.8043 2.00947 20.2072 0.15563 20.2072 0.15563C20.2072 0.15563 22.2393 -0.655352 22.07 1.31426C22.0135 2.12532 21.5619 4.96388 21.1104 8.03423C20.433 12.3791 19.6992 17.1293 19.6992 17.1293C19.6992 17.1293 19.5863 18.4618 18.6267 18.6935C17.6671 18.9252 16.0865 17.8825 15.8043 17.6507C15.5784 17.477 11.5707 14.8701 10.1031 13.5956C9.70792 13.248 9.25636 12.5529 10.1595 11.7418C12.1916 9.8301 14.6188 7.45496 16.0865 5.94877C16.7639 5.25356 17.4412 3.63151 14.6188 5.60112C10.6111 8.43976 6.65977 11.1046 6.65977 11.1046C6.65977 11.1046 5.75658 11.6839 4.06317 11.1625C2.36969 10.6412 0.394016 9.94595 0.394016 9.94595C0.394016 9.94595 -0.960648 9.077 1.35369 8.15009Z"
                  fill="#2C160B"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              :to="`/${locale}`"
              class="w-14 h-14 flex items-center justify-center rounded-2xl bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M8.00556 12.0614C8.00556 9.85043 9.79694 8.05757 12.0073 8.05757C14.2177 8.05757 16.01 9.85043 16.01 12.0614C16.01 14.2725 14.2177 16.0653 12.0073 16.0653C9.79694 16.0653 8.00556 14.2725 8.00556 12.0614ZM5.84177 12.0614C5.84177 15.4677 8.60208 18.2288 12.0073 18.2288C15.4126 18.2288 18.1729 15.4677 18.1729 12.0614C18.1729 8.65522 15.4126 5.89412 12.0073 5.89412C8.60208 5.89412 5.84177 8.65522 5.84177 12.0614ZM16.9761 5.64958C16.976 5.93464 17.0604 6.21333 17.2186 6.45041C17.3768 6.68749 17.6018 6.87231 17.865 6.9815C18.1283 7.0907 18.418 7.11935 18.6975 7.06385C18.977 7.00835 19.2338 6.87119 19.4354 6.6697C19.637 6.46821 19.7743 6.21146 19.83 5.9319C19.8857 5.65234 19.8573 5.36254 19.7484 5.09913C19.6394 4.83573 19.4548 4.61056 19.2179 4.45209C18.9811 4.29363 18.7025 4.20899 18.4175 4.20887H18.417C18.035 4.20905 17.6687 4.36088 17.3985 4.63101C17.1284 4.90114 16.9764 5.26748 16.9761 5.64958ZM7.15641 21.8378C5.98576 21.7845 5.34947 21.5895 4.92663 21.4247C4.36604 21.2064 3.96605 20.9464 3.54551 20.5263C3.12497 20.1062 2.86466 19.7065 2.64737 19.1457C2.48254 18.7229 2.28754 18.0863 2.23433 16.9153C2.17612 15.6493 2.16449 15.269 2.16449 12.0615C2.16449 8.85412 2.17708 8.47487 2.23433 7.20779C2.28764 6.0368 2.48408 5.40139 2.64737 4.97737C2.86562 4.41661 3.12555 4.01651 3.54551 3.59585C3.96548 3.17519 4.36508 2.9148 4.92663 2.69745C5.34928 2.53257 5.98576 2.33752 7.15641 2.28429C8.42207 2.22606 8.80227 2.21443 12.0073 2.21443C15.2124 2.21443 15.593 2.22702 16.8597 2.28429C18.0303 2.33761 18.6656 2.53411 19.0895 2.69745C19.6501 2.9148 20.05 3.17577 20.4706 3.59585C20.8911 4.01594 21.1505 4.41661 21.3687 4.97737C21.5335 5.40014 21.7285 6.0368 21.7818 7.20779C21.84 8.47487 21.8516 8.85412 21.8516 12.0615C21.8516 15.269 21.84 15.6482 21.7818 16.9153C21.7284 18.0863 21.5325 18.7228 21.3687 19.1457C21.1505 19.7065 20.8905 20.1066 20.4706 20.5263C20.0506 20.946 19.6501 21.2064 19.0895 21.4247C18.6668 21.5896 18.0303 21.7846 16.8597 21.8378C15.594 21.8961 15.2138 21.9077 12.0073 21.9077C8.80082 21.9077 8.42168 21.8961 7.15641 21.8378ZM7.05699 0.123518C5.77876 0.181746 4.9053 0.384486 4.14251 0.681389C3.35253 0.987998 2.68378 1.39934 2.01551 2.06675C1.34723 2.73416 0.937068 3.40416 0.630548 4.19437C0.33373 4.95786 0.131049 5.83108 0.0728377 7.10969C0.0136662 8.39032 0.00012207 8.79974 0.00012207 12.0614C0.00012207 15.3232 0.0136662 15.7326 0.0728377 17.0132C0.131049 18.2919 0.33373 19.165 0.630548 19.9285C0.937068 20.7183 1.34733 21.389 2.01551 22.0562C2.68368 22.7233 3.35253 23.134 4.14251 23.4415C4.90674 23.7384 5.77876 23.9412 7.05699 23.9994C8.33792 24.0576 8.74655 24.0721 12.0073 24.0721C15.2681 24.0721 15.6774 24.0586 16.9577 23.9994C18.236 23.9412 19.1089 23.7384 19.8721 23.4415C20.6616 23.134 21.3309 22.7236 21.9991 22.0562C22.6674 21.3887 23.0767 20.7183 23.3841 19.9285C23.6809 19.165 23.8846 18.2918 23.9418 17.0132C24 15.7316 24.0136 15.3232 24.0136 12.0614C24.0136 8.79974 24 8.39032 23.9418 7.10969C23.8836 5.83099 23.6809 4.95738 23.3841 4.19437C23.0767 3.40464 22.6664 2.73521 21.9991 2.06675C21.3319 1.39828 20.6616 0.987998 19.8731 0.681389C19.1089 0.384486 18.2359 0.180785 16.9586 0.123518C15.6784 0.0652901 15.2691 0.0507812 12.0083 0.0507812C8.74751 0.0507812 8.33792 0.0643293 7.05699 0.123518Z"
                  fill="#2C160B"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
        <div>
          <h4 class="text-white text-2xl font-bold">
            {{ $t("footer.ourservice.title") }}
          </h4>
          <ul class="mt-10 text-lg w-[146px]">
            <li class="mb-6">
              <NuxtLink
                :to="`/${locale}`"
                class="flex items-center justify-between text-white"
              >
                <p>{{ $t("footer.ourservice.flight") }}</p>
                <svg
                  class="rtl:rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink
                :to="`/${locale}`"
                class="flex items-center justify-between text-white"
              >
                <p>{{ $t("footer.ourservice.hotel") }}</p>
                <svg
                  class="rtl:rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink
                :to="`/${locale}`"
                class="flex items-center justify-between text-white"
              >
                <p>{{ $t("footer.ourservice.tour") }}</p>
                <svg
                  class="rtl:rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink
                :to="`/${locale}`"
                class="flex items-center justify-between text-white"
              >
                <p>{{ $t("footer.ourservice.visa") }}</p>
                <svg
                  class="rtl:rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="`/${locale}`"
                class="flex items-center justify-between text-white"
              >
                <p>{{ $t("footer.ourservice.insurance") }}</p>
                <svg
                  class="rtl:rotate-180"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-white text-2xl font-bold">
            {{ $t("footer.fast-service.title") }}
          </h4>
          <ul class="mt-10 text-lg">
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op1") }}</p>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op2") }}</p>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op3") }}</p>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op4") }}</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op5") }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-transparent text-2xl font-bold hidden md:block">-</h4>
          <ul class="mt-10 text-lg">
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op6") }}</p>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op7") }}</p>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op8") }}</p>
              </NuxtLink>
            </li>
            <li class="mb-6">
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op9") }}</p>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="`/${locale}`" class="text-white">
                <p>{{ $t("footer.fast-service.op10") }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-white py-6 px-5">
      <div class="max-w-[1248px] w-full mx-auto">
        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 9.99C10.52 9.74 10.72 9.53 10.97 9.37C11.21 9.22 11.51 9.15 11.88 9.14C12.11 9.15 12.32 9.19 12.51 9.27C12.71 9.36 12.89 9.48 13.03 9.63C13.17 9.78 13.28 9.96 13.37 10.16C13.46 10.36 13.5 10.58 13.51 10.8H15.3C15.28 10.33 15.19 9.9 15.02 9.51C14.85 9.12 14.62 8.78 14.32 8.5C14.02 8.22 13.66 8 13.24 7.84C12.82 7.68 12.36 7.61 11.85 7.61C11.2 7.61 10.63 7.72 10.15 7.95C9.67 8.18 9.27 8.48 8.95 8.87C8.63 9.26 8.39 9.71 8.24 10.23C8.09 10.75 8 11.29 8 11.87V12.14C8 12.72 8.08 13.26 8.23 13.78C8.38 14.3 8.62 14.75 8.94 15.13C9.26 15.51 9.66 15.82 10.14 16.04C10.62 16.26 11.19 16.38 11.84 16.38C12.31 16.38 12.75 16.3 13.16 16.15C13.57 16 13.93 15.79 14.24 15.52C14.55 15.25 14.8 14.94 14.98 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.49C13.48 13.64 13.43 13.83 13.34 14.01C13.25 14.19 13.13 14.34 12.98 14.47C12.83 14.6 12.66 14.7 12.46 14.77C12.27 14.84 12.07 14.86 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.48 10.52 14.27 10.38 14.02C10.24 13.77 10.13 13.47 10.08 13.14C10.03 12.81 10 12.47 10 12.14V11.87C10 11.52 10.03 11.19 10.08 10.86ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="#1D1B20"
            />
          </svg>
          <p class="text-sm text-center text-[#1D1B20]">
            {{ $t("footer.copyright") }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { locale } = useI18n();
</script>
