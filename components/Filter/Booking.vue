<template>
  <section class="booking max-w-[1248px] w-[98%] mt-6 mx-auto">
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
      class="flex md:justify-between justify-center gap-5 items-center flex-wrap"
    >
      <div class="flex items-center flex-wrap gap-2 text-sm">
        <div
          @click="toggleBookingTabs(1)"
          :class="{
            'text-black bg-[#F7F8F9]': openBookingTab !== 1,
            'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 1,
          }"
          class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <p>One way</p>
        </div>
        <div
          @click="toggleBookingTabs(2)"
          :class="{
            'text-black bg-[#F7F8F9]': openBookingTab !== 2,
            'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 2,
          }"
          class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <p id="ToursTab">Round trip</p>
        </div>
        <div
          @click="toggleBookingTabs(3)"
          :class="{
            'text-black bg-[#F7F8F9]': openBookingTab !== 3,
            'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 3,
          }"
          class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <p id="HotelsTab">Multi-city</p>
        </div>
      </div>

      <div class="flex relative gap-5 items-center">
        <div class="relative" v-click-outside="clickOutPerson">
          <div
            @click="numberPersons = !numberPersons"
            class="flex cursor-pointer items-end gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <g clip-path="url(#gravityUiPersons0)">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M5.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-3.029 2.886c-.777.54-.971 1.063-.971 1.306c0 .446.362.808.808.808h6.384a.808.808 0 0 0 .808-.808c0-.244-.194-.767-.971-1.306C7.792 9.875 6.719 9.5 5.5 9.5c-1.218 0-2.292.375-3.029.886M0 11.692C0 9.846 2.475 8 5.5 8c1.18 0 2.278.281 3.177.734A5.671 5.671 0 0 1 11.5 8c2.475 0 4.5 1.538 4.5 3.077A1.923 1.923 0 0 1 14.077 13h-3.483c-.416.604-1.113 1-1.902 1H2.308A2.308 2.308 0 0 1 0 11.692m10.991-.192h3.086c.234 0 .423-.19.423-.423c0-.103-.096-.472-.688-.89c-.554-.393-1.375-.687-2.312-.687c-.517 0-.999.09-1.42.236c.526.534.854 1.146.911 1.764M12.5 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
                    clip-rule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="gravityUiPersons0">
                    <path fill="currentColor" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
            <span>1</span>
            <h6>Adult</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.1rem"
              height="1.1rem"
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
          <TransitionExpand :duration="500">
            <div
              v-if="numberPersons"
              class="flex flex-col rounded-lg z-50 bg-white shadow w-[15rem] absolute top-7 rtl:left-0"
            >
              <div class="flex items-center border-b p-2.5 justify-between">
                <span class="font-semibold">Adult</span>
                <div class="flex items-center gap-2">
                  <button
                    @click="() => filtered.adults >= 1 && filtered.adults--"
                    class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                      />
                    </svg>
                  </button>
                  <span>{{ filtered.adults }}</span>
                  <button
                    @click="filtered.adults++"
                    class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center border-b p-2.5 justify-between">
                <span class="font-semibold">Child</span>
                <div class="flex items-center gap-2">
                  <button
                    @click="() => filtered.children >= 1 && filtered.children--"
                    class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                      />
                    </svg>
                  </button>
                  <span>{{ filtered.children }}</span>
                  <button
                    @click="filtered.children++"
                    class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center border-b p-2.5 justify-between">
                <span class="font-semibold">Infant</span>
                <div class="flex items-center gap-2">
                  <button
                    @click="() => filtered.infants >= 1 && filtered.infants--"
                    class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500 opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
                      />
                    </svg>
                  </button>
                  <span>{{ filtered.infants }}</span>
                  <button
                    @click="filtered.infants++"
                    class="rounded-lg flex items-center justify-center p-2.5 text-white bg-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex items-center gap-2 p-2.5">
                <button
                  @click="confirmPassenger"
                  class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                >
                  Confirm
                </button>
                <button
                  @click="numberPersons = false"
                  class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionExpand>
        </div>

        <div class="relative" v-click-outside="clickOutairClass">
          <div
            @click="airClass = !airClass"
            class="flex cursor-pointer items-end gap-1"
          >
            <h6>Economy</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.1rem"
              height="1.1rem"
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
          <TransitionExpand :duration="500">
            <div
              v-if="airClass"
              class="flex flex-col rounded-lg z-50 bg-white shadow w-[15rem] absolute top-7 rtl:right-auto right-0 rtl:left-0"
            >
              <div class="flex border-b p-2.5">
                <span class="font-semibold">Adult</span>
              </div>
              <div class="flex border-b p-2.5">
                <span class="font-semibold">Premium Economy</span>
              </div>
              <div class="flex border-b p-2.5">
                <span class="font-semibold">Business class</span>
              </div>
              <div class="flex border-b p-2.5">
                <span class="font-semibold">First class</span>
              </div>
              <div class="flex items-center gap-2 p-2.5">
                <button
                  @click="airClass = false"
                  class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
                >
                  Confirm
                </button>
                <button
                  @click="airClass = false"
                  class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionExpand>
        </div>
      </div>
    </div>
    <div
      class="mt-5"
      v-bind:class="{
        hidden: openBookingTab !== 1,
        block: openBookingTab === 1,
      }"
    >
      <FilterOpenBookingOpenBookOne
        :open-modal="toogleModal"
        :execute="handleRoute"
      />
    </div>
    <div
      class="mt-5"
      v-bind:class="{
        hidden: openBookingTab !== 2,
        block: openBookingTab === 2,
      }"
    >
      <FilterOpenBookingOpenBookRoundTrip
        :open-modal="toogleModal"
        :execute="handleRoute"
      />
    </div>
    <div
      class="mt-5"
      v-bind:class="{
        hidden: openBookingTab !== 3,
        block: openBookingTab === 3,
      }"
    >
      <FilterOpenBookingOpenBookOne :open-modal="toogleModal" />
    </div>
  </section>
</template>

<script setup>
const { execute } = defineProps({
  execute: Function,
});
const route = useRoute();
const router = useRouter();
const { locale } = useI18n();
const modalActive = ref(false);
const toogleModal = () => {
  modalActive.value = !modalActive.value;
  document.querySelector("body").classList.add("overflow-hidden");
};
const openBookingTab = ref(1);
const toggleBookingTabs = (tabNumber) => {
  openBookingTab.value = tabNumber;
};

const numberPersons = ref(false);
const clickOutPerson = () => {
  if (numberPersons.value) {
    numberPersons.value = false;
  }
};

const airClass = ref(false);
const clickOutairClass = () => {
  if (airClass.value) {
    airClass.value = false;
  }
};

const filtered = reactive({
  adults: route.query.adults,
  children: route.query.children,
  infants: route.query.infants,
});

const handleRoute = () => {
  execute();
}; 

const confirmPassenger = () => {
  router.push({
    path: `/${locale.value}/Filter`,
    query: {
      origin: route.query.origin,
      destination: route.query.destination,
      departure_date_time: route.query.departure_date_time,
      return_date_time: route.query.return_date_time,
      adults: filtered.adults,
      children: filtered.children,
      infants: filtered.infants,
    },
  });
  numberPersons.value = false;
};
</script>
