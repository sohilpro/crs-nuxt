<template>
  <section
    class="booking p-6 max-w-[1248px] w-[98%] -mt-2 md:-mt-20 bg-white mx-auto rounded-[16px] shadow"
  >
    <div
      class="flex md:justify-between justify-center gap-5 items-center flex-wrap px-5"
    >
      <div class="flex items-center gap-2 text-sm">
        <div
          @click="toggleBookingTabs(1)"
          :class="{
            'text-black bg-[#F7F8F9]': openBookingTab !== 1,
            'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 1,
          }"
          class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <p>{{ $t("Booking.oneway") }}</p>
        </div>
        <div
          @click="toggleBookingTabs(2)"
          :class="{
            'text-black bg-[#F7F8F9]': openBookingTab !== 2,
            'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 2,
          }"
          class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <p id="ToursTab">{{ $t("Booking.roundtrip") }}</p>
        </div>
        <div
          @click="toggleBookingTabs(3)"
          :class="{
            'text-black bg-[#F7F8F9]': openBookingTab !== 3,
            'bg-[#E4F0FF] text-[#0A77FF]': openBookingTab === 3,
          }"
          class="tripType flex items-center justify-center w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <p id="HotelsTab">{{ $t("Booking.multicity") }}</p>
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
      <HomeOpenBookingOpenBook />
    </div>
    <div
      class="mt-5"
      :class="{ hidden: openBookingTab !== 2, block: openBookingTab === 2 }"
    >
      <HomeOpenBookingOpenBookRoundTrip />
    </div>
    <div
      class="mt-5"
      v-bind:class="{
        hidden: openBookingTab !== 3,
        block: openBookingTab === 3,
      }"
    >
      <HomeOpenBookingOpenBook />
    </div>
  </section>
</template>

<script setup>
const openBookingTab = ref(1);
const toggleBookingTabs = (tabNumber) => {
  openBookingTab.value = tabNumber;
};
</script>
