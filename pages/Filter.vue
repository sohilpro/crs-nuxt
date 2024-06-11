<template>
  <main>
    <!-- loader -->
    <UtilsLoading v-if="isFetching" />
    <!-- booking -->
    <FilterBooking :execute="execute" />

    <!-- date -->
    <FilterDate :execute="execute" />

    <!-- other -->
    <FilterOther :data="data" v-if="isFinished" />
  </main>
</template>

<script setup>
import { useFetch } from "@vueuse/core";
definePageMeta({
  middleware: "check",
});

const route = useRoute();
const cookies = useCookie("access_token");

const { data, isFetching, isFinished, execute } = useFetch(
  "http://65.108.44.215:4001/v1/flight/search/100",
  {
    async beforeFetch({ url, options, cancel }) {
      if (!cookies.value) cancel();

      options.method = "POST";
      options.body = JSON.stringify({
        origin: route.query.origin,
        destination: route.query.destination,
        departure_date_time: route.query.departure_date_time,
        return_date_time: route.query.return_date_time,
        adults: parseInt(route.query.adults),
        children: parseInt(route.query.children),
        infants: parseInt(route.query.infants),
      });
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${cookies.value}`,
        "Content-Type": "application/json", // specify content type
      };

      return {
        options,
      };
    },
  },
  { refetch: true }
).json();

</script>
