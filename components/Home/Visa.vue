<template>
  <section class="mt-10">
    <div class="max-w-[1248px] w-full mx-auto px-5">
      <div class="flex items-center justify-between mb-4">
        <h2 class="font-bold text-[32px] text-[#1D1B20]">
          {{ $t("visa.title") }}
        </h2>
        <select
          class="border border-[#DCDFE4] rounded-xl text-sm text-[#1D1B20] w-[133px] h-12 px-6 bg-transparent"
        >
          <option>{{ $t("visa.timeOption.30d") }}</option>
          <option>{{ $t("visa.timeOption.25d") }}</option>
        </select>
      </div>
      <div class="grid sm:grid-cols-2 gap-x-5 gap-y-6">
        <NuxtLink
          to="/"
          class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6"
        >
          <img alt="img" class="w-32 h-32 rounded-[12px]" src="/img/1-(19).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20]">
              {{ $t("visa.titleOption") }}
            </h5>
            <p class="text-[#938F96] mt-1 mb-2">{{ $t("visa.time") }}</p>
            <div
              class="flex items-center justify-between text-[#1D1B20] text-lg font-bold"
            >
              <p>354 {{ $t("visa.price") }}</p>
              <svg
                class="opacity-0 group-hover:opacity-100 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/"
          class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6"
        >
          <img alt="img" class="w-32 h-32 rounded-[12px]" src="/img/1-(8).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20]">
              {{ $t("visa.titleOption") }}
            </h5>
            <p class="text-[#938F96] mt-1 mb-2">{{ $t("visa.time") }}</p>
            <div
              class="flex items-center justify-between text-[#1D1B20] text-lg font-bold"
            >
              <p>354 {{ $t("visa.price") }}</p>
              <svg
                class="opacity-0 group-hover:opacity-100 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/"
          class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6"
        >
          <img alt="img" class="w-32 h-32 rounded-[12px]" src="/img/1-(8).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20]">
              {{ $t("visa.titleOption") }}
            </h5>
            <p class="text-[#938F96] mt-1 mb-2">{{ $t("visa.time") }}</p>
            <div
              class="flex items-center justify-between text-[#1D1B20] text-lg font-bold"
            >
              <p>354 {{ $t("visa.price") }}</p>
              <svg
                class="opacity-0 group-hover:opacity-100 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/"
          class="hover:shadow-xl group transition-all border border-[#DCDFE4] rounded-[16px] bg-white p-3 flex items-center gap-6"
        >
          <img alt="img" class="w-32 h-32 rounded-[12px]" src="/img/1-(3).png" />
          <div class="flex-grow">
            <h5 class="text-lg font-bold text-[#1D1B20]">
              {{ $t("visa.titleOption") }}
            </h5>
            <p class="text-[#938F96] mt-1 mb-2">{{ $t("visa.time") }}</p>
            <div
              class="flex items-center justify-between text-[#1D1B20] text-lg font-bold"
            >
              <p>354 {{ $t("visa.price") }}</p>
              <svg
                class="opacity-0 group-hover:opacity-100 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.86001 0.960043L14.89 3.96004C20.96 5.99004 20.96 9.30004 14.89 11.32L12.21 12.21L11.32 14.89C9.3 20.96 5.98 20.96 3.96 14.89L0.950006 5.87004C-0.389994 1.82004 1.81001 -0.389957 5.86001 0.960043ZM5.54001 6.34004L9.34 10.16C9.49 10.31 9.68001 10.38 9.87 10.38C10.06 10.38 10.25 10.31 10.4 10.16C10.69 9.87004 10.69 9.39004 10.4 9.10004L6.60001 5.28004C6.31001 4.99004 5.83001 4.99004 5.54001 5.28004C5.25001 5.57004 5.25001 6.05004 5.54001 6.34004Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
