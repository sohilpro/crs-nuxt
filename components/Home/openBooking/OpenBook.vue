<template>
  <div class="flex relative items-center gap-2 flex-col lg:flex-row">
    <div
      :class="{ 'py-5': !inputSearchOrigin.length }"
      class="rounded-[16px] w-full lg:w-auto relative border border-[#DCDFE4] px-6 py-2.5 flex-grow cursor-pointer"
      v-click-outside="clickOutFirstOrigin"
    >
      <label
        v-if="inputSearchOrigin.length"
        for="origin"
        class="text-sm text-[#938F96]"
        >Origin</label
      >
      <input
        id="origin"
        type="text"
        v-model="inputSearchOrigin"
        class="w-full font-bold focus:outline-none placeholder:text-black"
        @focus="firstOrigin = true"
        @input="checkOrigin"
        placeholder="Origin"
      />
      <div
        class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4"
      >
        <TransitionExpand :duration="500">
          <div
            v-if="firstOrigin"
            :class="{
              '!h-max': itemsOrigin.length <= 5 && itemsOrigin.length !== 0,
              '!hidden': itemsOrigin.length === 0,
            }"
            class="flex py-2 border-b h-72 overflow-auto flex-col"
          >
            <template
              v-for="(item, index) in data.portals.slice(0, 20)"
              :key="index"
            >
              <main
                v-if="checkSearchOrigin == 1"
                class="w-full"
                @click="dataSelectOrigin(item)"
              >
                <h6 class="font-bold">
                  {{ item.country.country_en }}
                </h6>
                <p class="text-gray-600">
                  {{ item.country.country_en }},
                  {{ item.departure_city_en }} ({{ item.departure_code }})
                </p>
              </main>
            </template>
            <template v-for="(item, index) in itemsOrigin" :key="index">
              <main
                v-if="checkSearchOrigin == 2"
                @click="dataSelectOrigin(item)"
                class="w-full"
              >
                <h6 class="font-bold">
                  {{ item.country.country_en }}
                </h6>
                <p class="text-gray-600">
                  {{ item.country.country_en }},
                  {{ item.departure_city_en }} ({{ item.departure_code }})
                </p>
              </main>
            </template>
          </div>
        </TransitionExpand>
      </div>
    </div>
    <div
      class="rounded-[16px] w-full lg:w-auto relative border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer"
      :class="{ '!py-5': !inputSearchDestination.length }"
      v-click-outside="clickOutFirstDestination"
    >
      <label
        v-if="inputSearchDestination.length"
        for="destination"
        class="text-sm text-[#938F96]"
        >Destination</label
      >
      <input
        type="text"
        id="destination"
        v-model="inputSearchDestination"
        class="w-full font-bold focus:outline-none placeholder:text-black"
        @focus="firstDestination = true"
        @input="checkDest"
        placeholder="Destination"
      />
      <div
        class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4"
      >
        <TransitionExpand :duration="500">
          <div
            v-if="firstDestination"
            :class="{
              '!h-max': itemsDest.length <= 5 && itemsDest.length !== 0,
              '!hidden':  itemsDest.length === 0,
            }"
            class="flex py-2 border-b h-72 overflow-auto flex-col"
          >
            <template
              v-for="(item, index) in data.portals.slice(0, 20)"
              :key="index"
            >
              <main
                v-if="checkSearchDest == 1"
                class="w-full"
                @click="dataSelectDest(item)"
              >
                <h6 class="font-bold">
                  {{ item.country.country_en }}
                </h6>
                <p class="text-gray-600">
                  {{ item.country.country_en }},
                  {{ item.departure_city_en }} ({{ item.departure_code }})
                </p>
              </main>
            </template>
            <template v-for="(item, index) in itemsDest" :key="index">
              <main
                v-if="checkSearchDest == 2"
                class="w-full"
                @click="dataSelectDest(item)"
              >
                <h6 class="font-bold">
                  {{ item.country.country_en }}
                </h6>
                <p class="text-gray-600">
                  {{ item.country.country_en }},
                  {{ item.departure_city_en }} ({{ item.departure_code }})
                </p>
              </main>
            </template>
          </div>
        </TransitionExpand>
      </div>
    </div>
    <div
      v-click-outside="clickOutFirstDate"
      class="rounded-[16px] w-full lg:w-auto whitespace-nowrap border relative border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer"
    >
      <div @click="firstDate = !firstDate">
        <p class="text-sm text-[#938F96]">
          {{ $t("Booking.Boxs.departure-date.title") }}
        </p>
        <p class="font-bold">
          {{
            format({
              date: range,
              format: "DD/MMM/YYYY",
              tz: "UTC",
            })
          }}
        </p>
      </div>
      <div
        class="absolute right-0 w-full lg:w-max lg:bottom-0 lg:top-16 z-50 h-max bg-white shadow-xl rounded-lg px-4"
      >
        <TransitionExpand :duration="500">
          <div v-if="firstDate" class="flex flex-col">
            <div
              class="flex flex-col gap-3 lg:flex-row justify-between border-b py-3 items-center"
            >
              <h6 class="text-xl font-bold">
                {{ $t("Booking.Boxs.departure-date.title") }}
              </h6>
              <div class="flex items-center gap-3">
                <span class="text-blue-500 font-semibold cursor-pointer"
                  >Go today</span
                >
                <div class="flex items-center gap-2">
                  <div class="checkbox-wrapper-34">
                    <input
                      v-model="returnDate"
                      class="tgl tgl-ios"
                      @click="changeToday"
                      id="toggle-34"
                      type="checkbox"
                    />
                    <label class="tgl-btn" for="toggle-34"></label>
                  </div>
                  <p class="text-gray-600">Return date</p>
                </div>
              </div>
            </div>
            <div class="m-2 border-b">
              <VDatePicker
                v-model="range"
                timezone="utc"
                :locale="loc"
                :columns="columns"
                :expanded="expanded"
              />
            </div>
            <div
              class="flex flex-col lg:flex-row justify-between mb-2 items-center"
            >
              <div
                class="flex items-center bg-gray-100 gap-5 px-1 py-1 rounded-lg"
              >
                <button
                  :class="{ '!text-blue-500 !p-2 bg-white': loc == 'en' }"
                  @click="loc = 'en'"
                  class="text-gray-700 pl-2 rounded-lg"
                >
                  Gregorian
                </button>
                <button
                  @click="loc = 'fa'"
                  :class="{ '!text-blue-500 bg-white': loc == 'fa' }"
                  class="p-2 text-gray-700 rounded-lg"
                >
                  solar calender
                </button>
              </div>

              <div class="flex items-center gap-2 p-2.5">
                <button
                  @click="firstDate = !firstDate"
                  class="rounded-lg w-full flex items-center justify-center px-5 py-2 text-white bg-blue-500"
                >
                  Confirm
                </button>
                <button
                  @click="cancelAndResetCalender"
                  class="rounded-lg w-full flex items-center justify-center px-5 py-2 text-blue-500 border-2 border-blue-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </TransitionExpand>
      </div>
    </div>
    <div
      v-click-outside="clickOutPassengerAir"
      class="rounded-[16px] w-full lg:w-auto relative border flex-grow whitespace-nowrap border-[#DCDFE4] px-6 py-[10px] cursor-pointer"
    >
      <div @click="PassengerAir = !PassengerAir">
        <template
          v-if="!(filtered.adults || filtered.children || filtered.infants)"
        >
          <p class="font-bold py-2">Passengers</p>
        </template>
        <template v-else>
          <p class="text-sm text-[#938F96]">Passengers</p>
          <p class="font-bold">
            <span v-if="filtered.adults">Adult {{ filtered.adults }}</span>
            <span v-if="filtered.children">
              - Child {{ filtered.children }}</span
            >
            <span v-if="filtered.infants">
              - infants {{ filtered.infants }}</span
            >
          </p>
        </template>
      </div>
      <div
        class="absolute bottom-0 left-0 top-16 z-50 h-max w-full lg:w-72 bg-white shadow-xl rounded-lg px-4"
      >
        <TransitionExpand :duration="500">
          <div
            v-if="PassengerAir"
            class="flex flex-col rounded-lg z-50 bg-white shadow w-full absolute right-0 top-0"
          >
            <div class="flex items-center border-b p-2.5 justify-between">
              <span class="font-semibold">Adult</span>
              <div class="flex items-center gap-2">
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

                <span>{{ filtered.adults }}</span>
                <button
                  @click="() => filtered.adults > 0 && filtered.adults--"
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
              </div>
            </div>
            <div class="flex items-center border-b p-2.5 justify-between">
              <span class="font-semibold">Child</span>
              <div class="flex items-center gap-2">
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
                <span>{{ filtered.children }}</span>

                <button
                  @click="() => filtered.children > 0 && filtered.children--"
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
              </div>
            </div>
            <div class="flex items-center border-b p-2.5 justify-between">
              <span class="font-semibold">infants</span>
              <div class="flex items-center gap-2">
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
                <span>{{ filtered.infants }}</span>
                <button
                  @click="() => filtered.infants > 0 && filtered.infants--"
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
              </div>
            </div>
            <div class="flex items-center gap-2 p-2.5">
              <button
                @click="PassengerAir = false"
                class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-white bg-blue-500"
              >
                Confirm
              </button>
              <button
                @click="PassengerAir = false"
                class="rounded-lg w-full flex items-center justify-center px-2.5 py-2 text-blue-500 border-2 border-blue-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </TransitionExpand>
      </div>
    </div>
    <button
      @click="handleSearchFlight"
      class="rounded-[16px] w-full lg:w-auto mx-auto flex gap-2 items-center justify-center text-white bg-[#0A77FF] py-5 px-10 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>{{ $t("Booking.search") }}</p>
    </button>
  </div>
</template>

<script setup>
import { useScreens } from "vue-screen-utils";
import { format } from "@formkit/tempo";

const { data } = await useFetch("/api/search/city", {
  headers: useRequestHeaders(["cookie"]),
});

const { locale } = useI18n();
const props = defineProps(["openModal"]);
const router = useRouter();
const returnDate = ref(false);
const loc = ref("en");
// calender
// const months = ref([
//   "Jan",
//   "Feb",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ]);
const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});
const columns = mapCurrent(1);
const expanded = mapCurrent({ lg: true }, true);
const range = ref(new Date(Date.now()));

const changeToday = () => {
  if (!returnDate.value) {
    range.value = Date.now();
  }
};
const cancelAndResetCalender = () => {
  firstDate.value = false;
  range.value = new Date(Date.now());
};

const forSearchDest = ref(data.value.portals[1]);
const firstDestination = ref(false);
const clickOutFirstDestination = () => {
  if (firstDestination.value) {
    firstDestination.value = false;
  }
};

const forSearchOrigin = ref(data.value.portals[0]);
const firstOrigin = ref(false);
const clickOutFirstOrigin = () => {
  if (firstOrigin.value) {
    firstOrigin.value = false;
  }
};

const firstDate = ref(false);
const clickOutFirstDate = () => {
  if (firstDate.value) {
    firstDate.value = false;
  }
};

// search
const checkSearchOrigin = ref(1);
const checkSearchDest = ref(1);
const inputSearchOrigin = ref("");
// `${data.value.portals[0].country.country_en} ,${data.value.portals[0].departure_city_en} (${data.value.portals[0].departure_code})`
const inputSearchDestination = ref(
  ""
  // `${data.value.portals[1].country.country_en} ,${data.value.portals[1].departure_city_en} (${data.value.portals[1].departure_code})`
);
const itemsOrigin = computed(() => {
  return data.value.portals.filter((i) => {
    return (
      i.departure_city_en
        .toLowerCase()
        .includes(inputSearchOrigin.value.toLowerCase()) ||
      i.departure_code
        .toLowerCase()
        .includes(inputSearchOrigin.value.toLowerCase())
    );
  });
});
const itemsDest = computed(() => {
  return data.value.portals.filter((i) => {
    return (
      i.departure_city_en
        .toLowerCase()
        .includes(inputSearchDestination.value.toLowerCase()) ||
      i.departure_code
        .toLowerCase()
        .includes(inputSearchDestination.value.toLowerCase())
    );
  });
});

const checkOrigin = () => {
  if (inputSearchOrigin.value.trim().length === 0) {
    checkSearchOrigin.value = 1;
  } else {
    checkSearchOrigin.value = 2;
  }
};
const checkDest = () => {
  if (inputSearchDestination.value.trim().length === 0) {
    checkSearchDest.value = 1;
  } else {
    checkSearchDest.value = 2;
  }
};

const dataSelectOrigin = (i) => {
  inputSearchOrigin.value = `${i.country.country_en}, ${i.departure_city_en} (${i.departure_code})`;
  forSearchOrigin.value = i;
  clickOutFirstOrigin();
  checkSearchOrigin.value = 1;
};
const dataSelectDest = (i) => {
  inputSearchDestination.value = `${i.country.country_en}, ${i.departure_city_en} (${i.departure_code})`;
  forSearchDest.value = i;
  clickOutFirstDestination();
  checkSearchDest.value = 1;
};
const PassengerAir = ref(false);
const clickOutPassengerAir = () => {
  if (PassengerAir.value) {
    PassengerAir.value = false;
  }
};

const filtered = reactive({
  adults: 0,
  children: 0,
  infants: 0,
});

const handleSearchFlight = () => {
  router.push({
    path: `/${locale.value}/Filter`,
    query: {
      origin: forSearchOrigin.value.departure_code,
      destination: forSearchDest.value.departure_code,
      departure_date_time: new Date(range.value).toISOString(),
      return_date_time: "",
      ...filtered,
    },
  });
};
</script>

<style scoped>
:deep(.vc-bordered) {
  @apply !border-none;
}
</style>
