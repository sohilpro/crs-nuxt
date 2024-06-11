<template>
  <section class="border-t mt-5 py-4">
    <div class="py-2 max-w-[1248px] mx-auto">
      <!-- :modules="[SwiperAutoplay]"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }" -->
      <ClientOnly>
        <Swiper :breakpoints="breakpoints" :loop="true">
          <SwiperSlide v-for="(item, index) in date" :key="index">
            <div class="swiper-slide">
              <label
                class="select flex-col rounded-lg text-center border border-transparent transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[129px] h-14 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center"
                :class="{
                  '!text-[#0A77FF] !border-[#0A77FF] !bg-[#E4F0FF]':
                    format({
                      date: correctISO(
                        `${item.date}/${new Date().getFullYear()}`
                      ),
                      format: 'MMM D, YYYY',
                      tz: 'UTC',
                    }) ===
                    format({ date: openTab, format: 'MMM D, YYYY', tz: 'UTC' }),
                }"
              >
                <input
                  type="radio"
                  v-model="openTab"
                  :value="
                    correctISO(`${item.date}/${new Date().getFullYear()}`)
                  "
                  @click="
                    changeDate(
                      correctISO(`${item.date}/${new Date().getFullYear()}`)
                    )
                  "
                  :checked="
                    format({
                      date: correctISO(
                        `${item.date}/${new Date().getFullYear()}`
                      ),
                      format: 'MMM D, YYYY',
                      tz: 'UTC',
                    }) ===
                    format({ date: openTab, format: 'MMM D, YYYY', tz: 'UTC' })
                  "
                  class="hidden"
                />
                <span class="text">{{ item.date }}</span>
                <span class="font-semibold">{{ item.day }}</span>
              </label>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { addDay, format } from "@formkit/tempo";
const { execute } = defineProps({
  execute: Function,
});
const breakpoints = ref({
  0: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1020: {
    slidesPerView: 10,
    spaceBetween: 10,
  },
});
const router = useRouter();
const route = useRoute();
const openTab = ref(route.query.departure_date_time);

const { locale } = useI18n();
const date = ref([]);

for (let i = 0; i < 20; i++) {
  const tt = format({
    date: addDay(new Date().toISOString(), i),
    format: "dddd",
    tz: "UTC",
  });
  const dd = format({
    date: addDay(new Date().toISOString(), i),
    format: "MM/DD",
    tz: "UTC",
  });
  date.value.push({
    day: tt,
    date: dd,
  });
}

const correctISO = (time) => {
  const [month, day, year] = time.split("/").map(Number);
  const date = new Date(year, month - 1, day + 1);

  date.toLocaleDateString("en-US", { timeZone: "UTC" });

  return date.toISOString();
};

const changeDate = async (date) => {
  openTab.value = date;
  router.push({
    path: `/${locale.value}/Filter`,
    query: {
      origin: route.query.origin,
      destination: route.query.destination,
      departure_date_time: date,
      return_date_time: route.query.return_date_time,
      adults: route.query.adults,
      children: route.query.children,
      infants: route.query.infants,
    },
  });
  await refreshNuxtData()
  execute();
};
</script>
