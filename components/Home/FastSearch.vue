<template>
  <section>
    <div class="max-w-[1248px] w-full mx-auto mt-10 px-5">
      <h2 class="text-[32px] font-bold text-[#1D1B20] mb-4" id="hotdeals">
        {{ $t("fastsearch.title") }}
      </h2>
      <div class="flex items-center gap-6">
        <p>{{ $t("fastsearch.titleOption") }}:</p>
        <!-- Swiper -->
        <ClientOnly>
          <Swiper
            :breakpoints="breakpoints"
            :modules="[SwiperAutoplay]"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
            }"
            :loop="true"
          >
            <SwiperSlide v-for="(item, index) in 11" :key="index">
              <div
                @click="toggleTabs(item)"
                :class="{
                  'text-black bg-transparent': openTab !== item,
                  'bg-[#E4F0FF] border-[#0A77FF] border text-[#0A77FF]':
                    openTab === 1,
                }"
                class="rounded-[112px] border border-[#DCDFE4] transition-all hover:bg-[#E4F0FF] hover:border-[#0A77FF] hover:text-[#0A77FF] w-[92px] h-12 cursor-pointer text-sm text-[#1D1B20] flex items-center justify-center"
              >
                {{ $t("fastsearch.card.option.hotel") }}
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
      <div
        class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[126px] gap-y-8 mt-10"
      >
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(9).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(16).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(16).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(9).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(9).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(9).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(9).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(9).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 4, block: openTab === 4 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(9).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(16).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 5, block: openTab === 5 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(16).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 6, block: openTab === 6 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(7).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 7, block: openTab === 7 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 7, block: openTab === 7 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 8, block: openTab === 8 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 8, block: openTab === 8 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 8, block: openTab === 8 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 9, block: openTab === 9 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 10, block: openTab === 10 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 10, block: openTab === 10 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-bind:class="{ hidden: openTab !== 11, block: openTab === 11 }"
          to="/"
          class="hover:shadow-xl h-[96px] group transition-all rounded-[16px] bg-white p-3 pr-10 flex items-center gap-[18px]"
        >
          <img alt="img" class="rounded-[12px] h-full" src="/img/1-(2).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20] mb-1">
              {{ $t("fastsearch.card.name") }}
            </h5>
            <div class="flex items-center text-[#0A77FF] gap-4">
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.flight") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.hotel") }}</NuxtLink
              >
              <NuxtLink class="transition-all hover:font-bold" to="/">
                {{ $t("fastsearch.card.option.tour") }}</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const breakpoints = ref({
  0: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1020: {
    slidesPerView: 10,
    spaceBetween: 20,
  },
});
const openWayTab = ref(1);
const openTab = ref(1);
const openDestinationsTab = ref(1);
const toggleWayTabs = (tabNumber) => {
  openWayTab.value = tabNumber;
};
const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
};
const toggleDestinationsTabs = (tabNumber) => {
  openDestinationsTab.value = tabNumber;
};
</script>
