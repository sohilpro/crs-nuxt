<template>
  <section class="mt-12">
    <div class="max-w-[1248px] w-full mx-auto px-5">
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-[32px] text-[#1D1B20]">
          {{ $t("tour.title") }}
        </h2>
        <NuxtLink to="/" class="flex items-center gap-2 text-[#1D1B20]">
          <p>{{ $t("tour.seeall") }}</p>
          <svg
            class="rtl:rotate-180 w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29 15.8798L13.17 11.9998L9.29 8.11979C8.9 7.72978 8.9 7.09978 9.29 6.70978C9.68 6.31978 10.31 6.31978 10.7 6.70978L15.29 11.2998C15.68 11.6898 15.68 12.3198 15.29 12.7098L10.7 17.2998C10.31 17.6898 9.68 17.6898 9.29 17.2998C8.91 16.9098 8.9 16.2698 9.29 15.8798Z"
              fill="#1D1B20"
            />
          </svg>
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6 mb-20"
      >
        <div>
          <NuxtLink to="/"
            ><img alt="img" class="rounded-xl w-full h-full" src="/img/1-(5).png"
          /></NuxtLink>
        </div>
        <div>
          <NuxtLink to="/" class="mb-5 block"
            ><img alt="img" class="rounded-xl w-full" src="/img/1-(13).png"
          /></NuxtLink>
          <NuxtLink to="/"
            ><img alt="img" class="rounded-xl w-full" src="/img/tour-1.png"
          /></NuxtLink>
        </div>
        <div>
          <NuxtLink to="/" class="mb-5 block"
            ><img alt="img" class="rounded-xl w-full" src="/img/tour-2.png"
          /></NuxtLink>
          <NuxtLink to="/"
            ><img alt="img" class="rounded-xl w-full" src="/img/tour-3.png"
          /></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
