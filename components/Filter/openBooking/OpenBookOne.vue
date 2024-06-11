<template>
  <div class="flex px-5 flex-col md:flex-row relative items-center gap-2">
    <div class="flex flex-col md:flex-row w-full md:px-0 items-center gap-2">
      <div
        class="rounded-[16px] w-full md:w-auto relative border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer"
        v-click-outside="clickOutFirstOrigin"
      >
        <label class="text-sm text-[#938F96]">Origin</label>
        <input
          type="text"
          v-model="inputSearchOrigin"
          class="w-full font-bold focus:outline-none"
          @focus="firstOrigin = true"
          @input="checkOrigin"
        />
        <div
          class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4"
        >
          <TransitionExpand :duration="500">
            <div
              v-if="firstOrigin"
              :class="{
                '!h-max': itemsOrigin.length <= 5 && itemsOrigin.length !== 0,
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
        class="rounded-[16px] w-full md:w-auto relative border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer"
        v-click-outside="clickOutFirstDestination"
      >
        <p class="text-sm text-[#938F96]">Destination</p>
        <input
          type="text"
          v-model="inputSearchDestination"
          class="w-full font-bold focus:outline-none"
          @focus="firstDestination = true"
          @input="checkDest"
        />
        <div
          class="absolute bottom-0 left-0 top-16 z-50 h-max w-full bg-white shadow-xl rounded-lg px-4"
        >
          <TransitionExpand :duration="500">
            <div
              v-if="firstDestination"
              :class="{
                '!h-max': itemsDest.length <= 5 && itemsDest.length !== 0,
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
        class="rounded-[16px] w-full md:w-auto relative border border-[#DCDFE4] px-6 py-[10px] flex-grow cursor-pointer"
      >
        <div @click="firstDate = !firstDate">
          <p class="text-sm text-[#938F96]">Departure Date</p>
          <p class="font-bold">
            <!-- {{ new Date(range).getDate() }}/
            {{ months[new Date(range).getMonth()] }}/{{
              new Date(range).getFullYear()
            }}// -->
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
                <h6 class="text-xl font-bold">Departure date</h6>
                <div class="flex items-center gap-3">
                  <span class="text-blue-500 font-semibold cursor-pointer"
                    >Go today</span
                  >
                  <div class="flex items-center gap-2">
                    <div class="checkbox-wrapper-34">
                      <input
                        v-model="returnDate"
                        class="tgl tgl-ios"
                        id="toggle-34"
                        @click="changeToday"
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
                  @update:modelValue="handleRouteQueryDate"
                  :columns="columns"
                  :locale="loc"
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
    </div>
    <button
      @click="handleRouteQuery"
      class="rounded-[16px] w-full md:w-auto mx-auto flex gap-2 items-center justify-center text-white bg-[#0A77FF] py-5 px-10 cursor-pointer"
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
      <p>Search</p>
    </button>
  </div>
</template>

<script setup>
import { useScreens } from "vue-screen-utils";
import { format } from "@formkit/tempo";

const { execute } = defineProps({
  // openModal: Boolean,
  execute: Function,
}); 

const { data } = await useFetch("/api/search/city", {
  headers: useRequestHeaders(["cookie"]),
});

const router = useRouter();
const route = useRoute();
const returnDate = ref(false);

const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});
const columns = mapCurrent(1);
const expanded = mapCurrent({ lg: true }, true);
const loc = ref("en");
const range = ref(route.query.departure_date_time);

const changeToday = () => {
  if (!returnDate.value) {
    range.value = Date.now();
  }
};

const cancelAndResetCalender = () => {
  firstDate.value = false;
  range.value = route.query.departure_date_time;
};

const forSearchDest = ref({ departure_code: route.query.destination });
const firstDestination = ref(false);
const clickOutFirstDestination = () => {
  if (firstDestination.value) {
    firstDestination.value = false;
  }
};

const forSearchOrigin = ref({ departure_code: route.query.origin });
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
const org = data.value.portals.find(
  (i) => i.departure_code == route.query.origin
);
const dest = data.value.portals.find(
  (i) => i.departure_code == route.query.destination
);

const checkSearchOrigin = ref(1);
const checkSearchDest = ref(1);
const inputSearchOrigin = ref(
  `${org.country.country_en}, ${org.departure_city_en} (${org.departure_code})`
);
const inputSearchDestination = ref(
  `${dest.country.country_en}, ${dest.departure_city_en} (${dest.departure_code})`
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
  router.push({
    path: "Filter",
    query: {
      origin: forSearchOrigin.value.departure_code,
      destination: forSearchDest.value.departure_code,
      departure_date_time: new Date(range.value).toISOString(),
      return_date_time: "",
      adults: route.query.adults,
      children: route.query.children,
      infants: route.query.infants,
    },
  });
};
const dataSelectDest = (i) => {
  inputSearchDestination.value = `${i.country.country_en}, ${i.departure_city_en} (${i.departure_code})`;
  forSearchDest.value = i;
  clickOutFirstDestination();
  checkSearchDest.value = 1;
  router.push({
    path: "Filter",
    query: {
      origin: forSearchOrigin.value.departure_code,
      destination: forSearchDest.value.departure_code,
      departure_date_time: new Date(range.value).toISOString(),
      return_date_time: "",
      adults: route.query.adults,
      children: route.query.children,
      infants: route.query.infants,
    },
  });
};

const handleRouteQuery = () => {
  router.push({
    path: "Filter",
    query: {
      origin: forSearchOrigin.value.departure_code,
      destination: forSearchDest.value.departure_code,
      departure_date_time: new Date(range.value).toISOString(),
      return_date_time: "",
      adults: route.query.adults,
      children: route.query.children,
      infants: route.query.infants,
    },
  });
  execute();
};
const handleRouteQueryDate = () => {
  router.push({
    path: "Filter",
    query: {
      origin: forSearchOrigin.value.departure_code
        ? forSearchOrigin.value.departure_code
        : route.query.origin,
      destination: forSearchDest.value.departure_code
        ? forSearchDest.value.departure_code
        : route.query.destination,
      departure_date_time: new Date(range.value).toISOString(),
      return_date_time: "",
      adults: route.query.adults,
      children: route.query.children,
      infants: route.query.infants,
    },
  });
};
</script>

<style scoped>
:deep(.vc-bordered) {
  @apply !border-none;
}
</style>
