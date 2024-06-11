<template>
  <section class="bg-[#F7F8F9] mb-20 pt-5 mx-2 lg:mx-0">
    <!-- Modal start -->
    <UtilsModal @close="toogleModal" :modalActive="modalActive">
      <div class="flex flex-col">
        <template v-for="(item, index) in 2" :key="index">
          <div
            class="flex justify-between border-b px-5 py-3 bg-white items-center"
          >
            <div class="flex flex-col">
              <p class="font-semibold text-lg">Tehran(IMK) to Torento</p>
              <div class="flex text-gray-500 items-center gap-5">
                <span>25h 20m</span>
                <span>Wed May 10</span>
              </div>
            </div>
            <div class="text-blue-600 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                  />
                  <path
                    fill="currentColor"
                    d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </template>

        <h4 class="m-4">Options</h4>
        <div
          v-for="(item, index) in 4"
          :key="index"
          class="hidden lg:flex border-b justify-between bg-white px-5 py-3 items-center"
        >
          <h6 class="text-purple-500 text-lg font-semibold">Airline Logo</h6>

          <div class="flex gap-5 items-center">
            <span class="flex gap-2 items-center"
              ><p class="text-gray-400 text-sm">USD</p>
              <span class="font-semibold">257.00</span></span
            >
            <button
              class="px-5 py-2 flex items-center rounded-lg gap-2 text-white bg-blue-600"
            >
              <p>view detail</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 12h16m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          v-for="(item, index) in 4"
          :key="index"
          class="flex px-5 py-3 border-b gap-2 lg:hidden flex-col"
        >
          <div class="flex justify-between items-center">
            <h6 class="text-purple-500 text-lg font-semibold">Airline Logo</h6>
            <span class="flex gap-2 items-center"
              ><p class="text-gray-400 text-sm">USD</p>
              <span class="font-semibold">257.00</span></span
            >
          </div>
          <button
            class="px-5 py-2 flex items-center justify-center rounded-lg gap-2 text-white bg-blue-600"
          >
            <p>view detail</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </UtilsModal>
    <!-- Modal end -->
    <div
      v-if="data"
      class="max-w-[1248px] mx-auto lg:grid lg:grid-cols-12 gap-y-4 gap-x-5"
    >
      <div class="col-span-3 hidden lg:inline-block">
        <UtilsFilters />
      </div>
      <div class="lg:col-span-6">
        <div
          class="flex md:justify-between justify-center gap-5 mb-4 items-center rounded-xl overflow-x-auto bg-white"
        >
          <div class="flex w-full items-center text-sm">
            <div
              @click="toggleFilterTabs(1)"
              :class="{
                '': openFilterTab !== 1,
                'border-b-2 border-[#0A77FF]': openFilterTab === 1,
              }"
              class="flex items-center cursor-pointer p-2 pr-11"
            >
              <div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M9.15327 2.33977L10.3266 4.68643C10.4866 5.0131 10.9133 5.32643 11.2733 5.38643L13.3999 5.73977C14.7599 5.96643 15.0799 6.9531 14.0999 7.92643L12.4466 9.57977C12.1666 9.85977 12.0133 10.3998 12.0999 10.7864L12.5733 12.8331C12.9466 14.4531 12.0866 15.0798 10.6533 14.2331L8.65994 13.0531C8.29994 12.8398 7.70661 12.8398 7.33994 13.0531L5.34661 14.2331C3.91994 15.0798 3.05327 14.4464 3.42661 12.8331L3.89994 10.7864C3.98661 10.3998 3.83327 9.85977 3.55327 9.57977L1.89994 7.92643C0.926606 6.9531 1.23994 5.96643 2.59994 5.73977L4.72661 5.38643C5.07994 5.32643 5.50661 5.0131 5.66661 4.68643L6.83994 2.33977C7.47994 1.06643 8.51994 1.06643 9.15327 2.33977Z"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="font-bold">Recomended</p>
                </div>
                <p class="mt-1">256 USD</p>
              </div>
            </div>
            <svg
              width="3"
              height="46"
              viewBox="0 0 3 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5835"
                y1="56"
                x2="1.5835"
                y2="-3.27835e-08"
                stroke="#F1F2F4"
                stroke-width="1.5"
              />
            </svg>
            <div
              @click="toggleFilterTabs(2)"
              :class="{
                '': openFilterTab !== 2,
                'border-b-2 border-[#0A77FF]': openFilterTab === 2,
              }"
              class="flex items-center cursor-pointer p-2 pr-[67px]"
            >
              <div>
                <div class="flex items-center gap-2">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.11475 9.55307C6.11475 10.4131 6.77475 11.1064 7.59475 11.1064H9.26808C9.98141 11.1064 10.5614 10.4997 10.5614 9.75307C10.5614 8.93973 10.2081 8.65307 9.68141 8.4664L6.99475 7.53307C6.46808 7.3464 6.11475 7.05973 6.11475 6.2464C6.11475 5.49973 6.69475 4.89307 7.40808 4.89307H9.08141C9.90141 4.89307 10.5614 5.5864 10.5614 6.4464"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.3335 4V12"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33366 14.6668C12.0156 14.6668 15.0003 11.6821 15.0003 8.00016C15.0003 4.31826 12.0156 1.3335 8.33366 1.3335C4.65176 1.3335 1.66699 4.31826 1.66699 8.00016C1.66699 11.6821 4.65176 14.6668 8.33366 14.6668Z"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="font-bold">Cheapest</p>
                </div>
                <p class="mt-1">256 USD</p>
              </div>
            </div>
            <svg
              width="3"
              height="46"
              viewBox="0 0 3 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5835"
                y1="56"
                x2="1.5835"
                y2="-3.27835e-08"
                stroke="#F1F2F4"
                stroke-width="1.5"
              />
            </svg>
            <div
              @click="toggleFilterTabs(3)"
              :class="{
                '': openFilterTab !== 3,
                'border-b-2 border-[#0A77FF]': openFilterTab === 3,
              }"
              class="flex items-center cursor-pointer p-2 pr-20"
            >
              <div>
                <div class="flex items-center gap-2">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.87996 8.85331H8.93995V13.6533C8.93995 14.36 9.81995 14.6933 10.2866 14.16L15.3333 8.42665C15.7733 7.92665 15.42 7.14665 14.7533 7.14665H12.6933V2.34665C12.6933 1.63998 11.8133 1.30665 11.3466 1.83998L6.29996 7.57331C5.86663 8.07331 6.21996 8.85331 6.87996 8.85331Z"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.33317 2.6665H1.6665"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.6665 13.3335H1.6665"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.6665 8H1.6665"
                      stroke="#1D1B20"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="font-bold">Fastest</p>
                </div>
                <p class="mt-1">12:25</p>
              </div>
            </div>
            <svg
              width="3"
              height="46"
              viewBox="0 0 3 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1.5835"
                y1="56"
                x2="1.5835"
                y2="-3.27835e-08"
                stroke="#F1F2F4"
                stroke-width="1.5"
              />
            </svg>
            <select class="bg-transparent border-0 p-4">
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <div
            class="mt-5"
            v-bind:class="{
              hidden: openFilterTab !== 1,
              block: openFilterTab === 1,
            }"
          >
            <div class="bg-white rounded-2xl flex items-center justify-center">
              <div class="pt-8 pb-6">
                <svg
                  class="block mx-auto"
                  width="111"
                  height="115"
                  viewBox="0 0 111 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3315 50.5145C12.3315 50.5145 31.717 49.7382 35.9062 17.8727C39.6263 -10.427 72.3153 2.45397 81.7644 13.7349C94.005 28.3484 87.4799 53.4866 103.315 56.6623C119.149 59.838 108.809 95.1461 84.7728 91.7665C54.8728 87.5624 62.1068 105.034 53.131 112.43C46.6893 117.737 20.2757 112.628 19.3954 93.3612C18.6545 77.1485 11.8157 77.1998 6.96825 75.3615C-0.0228581 72.7101 -4.42803 53.5084 12.3315 50.5145Z"
                    fill="#D4E7FF"
                  />
                  <path
                    d="M78.2312 85.9036L59.1855 67.084L55.4142 70.9006L74.4599 89.7202L78.2312 85.9036Z"
                    fill="#A0CBFF"
                  />
                  <path
                    d="M85.5065 90.9602L70.6889 76.3185C70.6064 76.237 70.4735 76.2378 70.3919 76.3203L64.7836 81.996C64.7021 82.0785 64.7029 82.2114 64.7854 82.2929L79.6029 96.9347C79.6854 97.0162 79.8184 97.0154 79.8999 96.9329L85.5083 91.2572C85.5898 91.1747 85.589 91.0417 85.5065 90.9602Z"
                    fill="#0A77FF"
                  />
                  <path
                    d="M42.3053 76.5486C55.4081 76.5486 66.0301 65.9267 66.0301 52.8239C66.0301 39.7211 55.4081 29.0991 42.3053 29.0991C29.2025 29.0991 18.5806 39.7211 18.5806 52.8239C18.5806 65.9267 29.2025 76.5486 42.3053 76.5486Z"
                    fill="#0A77FF"
                  />
                  <path
                    d="M42.3053 72.6774C53.2701 72.6774 62.1589 63.7887 62.1589 52.8238C62.1589 41.859 53.2701 32.9702 42.3053 32.9702C31.3404 32.9702 22.4517 41.859 22.4517 52.8238C22.4517 63.7887 31.3404 72.6774 42.3053 72.6774Z"
                    fill="#D4E5FF"
                  />
                  <path
                    d="M82.4147 31.3765C76.8497 29.5727 70.8356 32.6235 69.0245 38.2114C67.2207 43.7764 70.2715 49.7905 75.8594 51.6016C81.4474 53.4127 87.4457 50.332 89.2499 44.7667C91.0541 39.2014 87.98 33.1803 82.4147 31.3765ZM80.7355 36.5572C81.3584 36.7592 81.9073 37.1415 82.3126 37.6558C82.7179 38.1702 82.9613 38.7933 83.012 39.4461C83.0626 40.099 82.9183 40.7521 82.5972 41.3228C82.2761 41.8935 81.7927 42.356 81.2084 42.6516C80.6241 42.9471 79.9652 43.0625 79.3152 42.9831C78.6652 42.9037 78.0535 42.633 77.5576 42.2054C77.0617 41.7778 76.7039 41.2126 76.5297 40.5814C76.3555 39.9501 76.3726 39.2814 76.579 38.66C77.1363 36.9406 79.0159 36 80.7355 36.5572ZM76.534 49.5203C74.6851 48.924 73.101 47.7036 72.053 46.0679C74.0141 44.9536 76.0647 44.6432 77.9199 45.2445C79.775 45.8458 81.2835 47.2847 82.1882 49.3529C80.3799 50.0628 78.3811 50.122 76.534 49.5203Z"
                    fill="#0A77FF"
                  />
                  <path
                    d="M36.0955 82.0881C35.1289 82.5815 34.3303 83.3505 33.8007 84.2977C33.2711 85.245 33.0343 86.328 33.1203 87.4099C33.2062 88.4917 33.611 89.5238 34.2835 90.3756C34.956 91.2274 35.866 91.8606 36.8984 92.1952C37.9307 92.5298 39.0392 92.5508 40.0835 92.2555C41.1278 91.9601 42.061 91.3617 42.7652 90.536C43.4695 89.7102 43.913 88.6942 44.0398 87.6164C44.1665 86.5385 43.9709 85.4473 43.4774 84.4807C42.8147 83.1856 41.6652 82.2064 40.2813 81.7579C38.8973 81.3093 37.392 81.4281 36.0955 82.0881ZM37.3736 84.5919C37.6747 84.4382 38.0146 84.3774 38.3502 84.4171C38.6859 84.4569 39.0022 84.5955 39.259 84.8153C39.5158 85.0351 39.7015 85.3262 39.7926 85.6517C39.8837 85.9772 39.8761 86.3225 39.7707 86.6436C39.6653 86.9648 39.4669 87.2474 39.2006 87.4557C38.9343 87.6639 38.6122 87.7884 38.2751 87.8133C37.938 87.8382 37.6011 87.7624 37.3072 87.5956C37.0132 87.4287 36.7754 87.1783 36.624 86.8761C36.4232 86.4733 36.3894 86.0076 36.5297 85.5799C36.67 85.1523 36.9732 84.7972 37.3736 84.5917V84.5919ZM40.5714 90.8569C39.679 91.3141 38.6554 91.4468 37.6759 91.2323C37.9849 90.1098 38.6201 89.248 39.5169 88.7904C40.4136 88.3327 41.4892 88.3074 42.5742 88.732C42.1733 89.6511 41.4652 90.4021 40.5714 90.8566V90.8569Z"
                    fill="#0A77FF"
                  />
                </svg>
                <h5 class="font-bold text-lg text-center mt-3">
                  No results :(
                </h5>
                <p class="text-sm text-center mt-1 text-[#605D64]">
                  Sorry, there are no results for your search.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-2xl mt-4 min-h-[94px]"></div>
          </div>
          <div
            class="mt-5"
            v-bind:class="{
              hidden: openFilterTab !== 2,
              block: openFilterTab === 2,
            }"
          >
            <!-- sdfsd -->
            <FilterOpenBookingFilterTicket />
            <!-- sdfsd -->
            <div
              class="bg-white shadow rounded-2xl mb-4 min-h-[94px] font-semibold p-4"
            >
              AD
            </div>

            <!-- Ticket start -->

            <UtilsTicket :data="data" v-if="data" />

            <!-- Ticket end -->
          </div>
          <div
            class="mt-5"
            v-bind:class="{
              hidden: openFilterTab !== 3,
              block: openFilterTab === 3,
            }"
          >
            3
          </div>
        </div>
      </div>
      <div class="hidden lg:inline-block lg:col-span-3">
        <div
          v-for="(item, index) in 4"
          :key="index"
          class="bg-white shadow rounded-2xl min-h-[300px] mb-4 p-4"
        >
          AD
        </div>
      </div>
    </div>

    <main
      v-else
      class="flex justify-center items-center mb-20 text-gray-500 flex-col gap-2"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5rem"
          height="5rem"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m9.881 9.887l-7.099 4.437a.6.6 0 0 0-.282.508v.9a.6.6 0 0 0 .746.582l6.508-1.628a.6.6 0 0 1 .746.582v2.96a.6.6 0 0 1-.205.451l-2.16 1.89c-.458.402-.097 1.151.502 1.042l3.256-.591a.6.6 0 0 1 .214 0l3.256.591c.599.11.96-.64.502-1.041l-2.16-1.89a.6.6 0 0 1-.205-.452v-2.96a.6.6 0 0 1 .745-.582l.458.115M10.5 7.5v-3A1.5 1.5 0 0 1 12 3v0a1.5 1.5 0 0 1 1.5 1.5v4.667a.6.6 0 0 0 .282.51l7.436 4.647a.6.6 0 0 1 .282.508v.9a.6.6 0 0 1-.745.582l-2.006-.502M3 3l18 18"
          />
        </svg>
      </div>
      <span class="font-semibold text-2xl">No flights found</span>
    </main>
  </section>
</template>

<script setup>
const { data } = defineProps({
  data: {
    type: [Object],
    default: null,
  },
});

const openFilterTab = ref(2);
const toggleFilterTabs = (tabNumber) => {
  openFilterTab.value = tabNumber;
};

const modalActive = ref(false);
const toogleModal = () => {
  modalActive.value = !modalActive.value;
  document.querySelector("body").classList.add("overflow-hidden");
};
</script>
