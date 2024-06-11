<template>
  <section class="mt-10">
    <div class="max-w-[1248px] w-full mx-auto px-4">
      <div
        class="rounded-[24px] overflow-hidden flex flex-col-reverse md:flex-row items-stretch"
      >
        <div class="text-white basis-1/2 bg-[#0A77FF] px-5 py-6 md:py-0">
          <div class="flex items-center h-full">
            <div>
              <h1 class="font-bold text-[32px]">
                {{ $t("nowBook.title") }}
              </h1>
              <p>
                {{ $t("nowBook.description") }}
              </p>
              <NuxtLink
                to="/"
                class="w-[143px] h-12 mt-6 rounded-lg bg-white text-sm text-[#0A77FF] flex items-center justify-center"
              >
                {{ $t("nowBook.btn") }}</NuxtLink
              >
            </div>
          </div>
        </div>
        <div>
          <img
            alt="img"
            src="/img/Frame 48097251.png"
            class="h-full basis-1/2"
          />
        </div>
      </div>
    </div>
  </section>
</template>
