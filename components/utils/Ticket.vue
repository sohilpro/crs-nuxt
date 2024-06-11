<template>
  <!-- Modal start -->
  <UtilsModal
    @close="toogleModal"
    title="Information Passengers"
    :modalActive="modalActive"
  >
    <div class="flex">
      <div class="basis-3/4 bg-white px-5">
        <div class="flex flex-col">
          <div
            v-if="acceptChilder"
            @click="acceptChilder = !acceptChilder"
            class="bg-blue-100 rounded cursor-pointer p-2 text-blue-500 flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 16 16"
            >
              <path
                fill="#5353f9"
                d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708"
              />
            </svg>
            <span>
              I confirm that the passengers are infants between 2 days and 10
              months old, children between 2 and 12 years old and adults over 12
              years old.
            </span>
          </div>
          <div
            v-else
            @click="acceptChilder = !acceptChilder"
            class="bg-gray-100 cursor-pointer rounded p-2 text-gray-500 flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"
                color="currentColor"
              />
            </svg>
            <span>
              I confirm that the passengers are infants between 2 days and 10
              months old, children between 2 and 12 years old and adults over 12
              years old.
            </span>
          </div>
          <div class="flex justify-end">
            <div
              class="flex w-max border border-blue-500 rounded mt-5 text-blue-500 divide-x"
            >
              <button @click="pushChildren" class="flex gap-0.5 px-2 py-0.5">
                child
              </button>
              <button @click="pushInfants" class="flex gap-0.5 px-2 py-0.5">
                infant
              </button>
              <button @click="pushAdults" class="flex gap-0.5 px-2 py-0.5">
                <span> adult </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
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

          <div class="overflow-auto h-96">
            <div v-if="adults.length !== 0">
              <div
                v-for="(item, index) in adults"
                :key="index"
                class="flex border-b pb-5 mt-5 gap-5 flex-col"
              >
                <div class="flex justify-between items-center">
                  <h4 class="text-lg font-bold">Adults</h4>

                  <svg
                    class="cursor-pointer hover:text-gray-500"
                    @click="adults.splice(index, 1)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                </div>

                <div class="grid grid-cols-4 gap-3">
                  <div class="relative">
                    <input
                      type="text"
                      :id="`name-${index}`"
                      v-model="item.name"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`name-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >name</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`last_name-${index}`"
                      v-model="item.last_name"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`last_name-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >last name</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`gender-${index}`"
                      v-model="item.gender"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`gender-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >gender</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`birth_date-${index}`"
                      v-model="item.birth_date"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`birth_date-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Date of birth</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`number_passport-${index}`"
                      v-model="item.number_passport"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`number_passport-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >passport number</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`national-${index}`"
                      v-model="item.national"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`national-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Nationality</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`deprecate_passport-${index}`"
                      v-model="item.deprecate_passport"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`deprecate_passport-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Expiration of passport</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`country-${index}`"
                      v-model="item.country"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`country-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >PIS</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div v-if="children.length !== 0">
              <div
                v-for="(item, index) in children"
                :key="index"
                class="flex border-b pb-5 mt-5 gap-5 flex-col"
              >
                <div class="flex justify-between items-center">
                  <h4 class="text-lg font-bold">Children</h4>

                  <svg
                    class="cursor-pointer hover:text-gray-500"
                    @click="children.splice(index, 1)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                </div>
                <div class="grid grid-cols-4 gap-3">
                  <div class="relative">
                    <input
                      type="text"
                      :id="`name-${index}`"
                      v-model="item.name"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`name-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >name</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`last_name-${index}`"
                      v-model="item.last_name"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`last_name-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >last name</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`gender-${index}`"
                      v-model="item.gender"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`gender-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >gender</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`birth_date-${index}`"
                      v-model="item.birth_date"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`birth_date-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Date of birth</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`number_passport-${index}`"
                      v-model="item.number_passport"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`number_passport-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >passport number</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`national-${index}`"
                      v-model="item.national"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`national-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Nationality</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`deprecate_passport-${index}`"
                      v-model="item.deprecate_passport"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`deprecate_passport-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Expiration of passport</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`country-${index}`"
                      v-model="item.country"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`country-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >PIS</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div v-if="infants.length !== 0">
              <div
                v-for="(item, index) in infants"
                :key="index"
                class="flex border-b pb-5 mt-5 gap-5 flex-col"
              >
                <div class="flex justify-between items-center">
                  <h4 class="text-lg font-bold">Infants</h4>

                  <svg
                    class="cursor-pointer hover:text-gray-500"
                    @click="infants.splice(index, 1)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                    />
                  </svg>
                </div>
                <div class="grid grid-cols-4 gap-3">
                  <div class="relative">
                    <input
                      type="text"
                      :id="`name-${index}`"
                      v-model="item.name"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`name-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >name</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`last_name-${index}`"
                      v-model="item.last_name"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`last_name-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >last name</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`gender-${index}`"
                      v-model="item.gender"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`gender-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >gender</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`birth_date-${index}`"
                      v-model="item.birth_date"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`birth_date-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Date of birth</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`number_passport-${index}`"
                      v-model="item.number_passport"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`number_passport-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >passport number</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`national-${index}`"
                      v-model="item.national"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`national-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Nationality</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`deprecate_passport-${index}`"
                      v-model="item.deprecate_passport"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`deprecate_passport-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >Expiration of passport</label
                    >
                  </div>
                  <div class="relative">
                    <input
                      type="text"
                      :id="`country-${index}`"
                      v-model="item.country"
                      class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      :for="`country-${index}`"
                      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >PIS</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-5 flex-col pb-5">
            <h4 class="text-lg font-bold">Contact information</h4>

            <div class="grid grid-cols-4 gap-3">
              <div class="relative">
                <input
                  type="text"
                  id="phone"
                  class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="phone"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >phone number</label
                >
              </div>
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  class="block px-3 pb-3.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-2xl border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="email"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email (optional)
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-1/4 bg-gray-100 min-h-fit px-5 py-3 rounded-2xl">
        <div class="flex flex-col !h-full justify-between">
          <div class="flex gap-3 flex-col">
            <div class="flex justify-between">
              <span> adult: </span>

              <span> 1.200 USD </span>
            </div>
            <div class="flex justify-between">
              <span> adult: </span>

              <span> 1.200 USD </span>
            </div>
            <div class="flex justify-between">
              <span> adult: </span>

              <span> 1.200 USD </span>
            </div>
            <div
              class="flex border-t pt-2 text-blue-500 text-xl justify-between"
            >
              <span> total: </span>

              <span> 3.600 USD </span>
            </div>
          </div>

          <button
            @click="handleDataForTicket"
            class="py-3 px-10 bg-blue-500 text-white rounded-xl"
          >
            book a ticket
          </button>
        </div>
      </div>
    </div>
  </UtilsModal>
  <!-- Modal end -->

  <main class="flex flex-col gap-5">
    <!-- <UtilsLoader v-if="loading"/> -->
    <div
      class="rounded-[16px] bg-white p-3"
      v-for="(item, index) in props.data.flights"
      :key="item.flight_id"
    >
      <div class="flex items-center gap-8 border-b pb-4">
        <div class="flex flex-col items-center justify-center">
          <div class="flex items-center justify-center">
            <img
              :src="imgs[index]"
              class="w-10 object-contain h-10 rounded-full"
              alt=""
            />
          </div>
          <p class="text-xs text-[#938F96]">
            {{ item.outbound_group.Origin }} ,
            {{ item.outbound_group.destination }}
          </p>
        </div>
        <div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold">
                {{
                  format({
                    date: item.outbound_group.departure_date_time,
                    format: "HH:mm A",
                    tz: "UTC",
                  })
                }}
              </span>
            </div>
            <p class="text-[#7D8590] flex gap-2">
              <span>{{ item.outbound_operating_airlines[0].code }}</span>
              <span>{{
                format({
                  date: item.outbound_group.departure_date_time,
                  format: "D/MMM/YYYY",
                  tz: "UTC",
                })
              }}</span>
            </p>
          </div>
        </div>
        <div>
          <svg
            class="block mx-auto rtl:rotate-180"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6417 16.7085L13.3167 12.8168L13.6833 11.9501C13.75 11.8168 13.925 11.7001 14.075 11.7001H16.625C17.425 11.7001 18.375 11.1085 18.7417 10.3918C18.8667 10.1418 18.8667 9.8418 18.7417 9.5918C18.375 8.88346 17.4167 8.2918 16.6167 8.2918H14.0667C13.9167 8.2918 13.7417 8.17513 13.675 8.0418L11.6333 3.2918C11.4167 2.7668 10.7583 2.3418 10.1917 2.3418H9.09167C8.38333 2.3418 8.03333 2.87513 8.31667 3.53346L10.1167 7.70846C10.2583 8.03346 10.0833 8.30013 9.725 8.30013H8.8H7.3C7.10833 8.30013 6.83333 8.1918 6.7 8.05846L4.75833 6.12513C4.55833 5.92513 4.16667 5.83346 3.88333 5.92513L2.75 6.30013C2.25833 6.45013 2.025 7.00846 2.25833 7.4668L3.925 9.45013C4.18333 9.75013 4.18333 10.2418 3.925 10.5418L2.25833 12.5251C2.03333 12.9835 2.25833 13.5418 2.75 13.7085L3.88333 14.0835C4.15833 14.1751 4.55833 14.0835 4.75833 13.8835L6.7 11.9501C6.83333 11.8085 7.10833 11.7001 7.3 11.7001H9.725C10.0833 11.7001 10.25 11.9585 10.1167 12.2918L8.31667 16.4668C8.03333 17.1251 8.38333 17.6585 9.09167 17.6585H10.1917C10.7583 17.6585 11.4167 17.2335 11.6417 16.7085Z"
              fill="#605D64"
            />
          </svg>
          <p class="text-center text-xs text-[#605D64]">One stop</p>
          <p class="text-center text-xs text-[#605D64]">
            {{ item.outbound_group.destination }}
          </p>
        </div>
        <div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-bold">
                {{
                  format({
                    date: item.outbound_group.arrival_date_time,
                    format: "HH:mm A",
                    tz: "UTC",
                  })
                }}
              </span>
            </div>
            <p class="text-[#7D8590] flex gap-2">
              <span> {{ item.outbound_operating_airlines[0].code }}</span>
              <span>{{
                format({
                  date: item.outbound_group.arrival_date_time,
                  format: "D/MMM/YYYY",
                  tz: "UTC",
                })
              }}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        class="mt-3 flex flex-col gap-2 lg:gap-0 lg:flex-row items-center justify-between"
      >
        <div
          class="flex justify-between w-full lg:w-auto lg:justify-start items-center gap-4"
        >
          <button
            @click="toogleModal(item)"
            class="h-10 w-[120px] cursor-pointer rounded-lg flex items-center justify-center text-sm text-white bg-[#0A77FF]"
          >
            View Flight
          </button>
          <div class="flex items-center gap-2">
            <p class="font-bold text-[#0A77FF]">
              {{ item.price_detail.total_fare.payable }}
            </p>
            <p class="text-[#7D8590]">USD</p>
          </div>
        </div>
        <div
          class="flex items-center justify-between w-full lg:w-auto gap-2 cursor-pointer font-semibold"
        >
          <p class="text-sm text-[#0A77FF]">
            {{ item.seats_remaining }} sites remined
          </p>
          <div class="flex items-center gap-2">
            <p class="text-sm text-[#605D64]">
              {{ item.outbound_group.flight_segments[0].baggage_kg }}Kg
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 20V7C18 6.4477 17.5523 6 17 6H5C4.44771 6 4 6.4477 4 7V19C4 19.5523 4.44771 20 5 20H18Z"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 6V20"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 6V19"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 6V3C14 2.44771 13.5523 2 13 2H9C8.4477 2 8 2.44771 8 3V6"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 20V22"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M16 20V22"
                stroke="#605D64"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <div
              @click="toggleOpenTicket(index)"
              :class="{ 'rotate-180': isOpen[index] }"
              class="transition-all duration-500"
            >
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.12 0.290059L6 4.17006L9.88 0.290059C10.27 -0.0999414 10.9 -0.0999414 11.29 0.290059C11.68 0.680059 11.68 1.31006 11.29 1.70006L6.7 6.29006C6.31 6.68006 5.68 6.68006 5.29 6.29006L0.700001 1.70006C0.310001 1.31006 0.310001 0.680059 0.700001 0.290059C1.09 -0.0899414 1.73 -0.0999414 2.12 0.290059Z"
                  fill="#0A77FF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <TransitionExpand :duration="500">
        <div v-if="isOpen[index]" class="flex mt-5 gap-5 flex-col">
          <div class="flex flex-col">
            <h4 class="font-bold text-lg">
              {{ item.outbound_group.flight_segments[0].departure_airport }} ({{
                item.outbound_group.flight_segments[0].departure_airport
              }}) to
              {{ item.outbound_group.flight_segments[0].arrival_airport }} ({{
                item.outbound_group.flight_segments[0].arrival_airport
              }})
            </h4>
            <div class="flex text-gray-500 gap-2 items-center">
              <span>
                {{
                  format({
                    date: item.outbound_group.departure_date_time,
                    format: "HH",
                    tz: "UTC",
                  })
                }}h
                {{
                  format({
                    date: item.outbound_group.departure_date_time,
                    format: "mm",
                    tz: "UTC",
                  })
                }}m</span
              >
              <span>
                {{
                  format({
                    date: item.outbound_group.departure_date_time,
                    format: "ddd MMM D YYYY",
                    tz: "UTC",
                  })
                }}</span
              >
              <!-- <span>Wed, May 10</span> -->
            </div>
          </div>
          <div class="flex px-7 py-5 rounded-xl bg-gray-100 gap-5 flex-col">
            <div class="flex items-center gap-2.5">
              <div class="flex-col items-center justify-center gap-3 flex">
                <span
                  class="stops__point_before flex relative justify-center flex-col items-center"
                ></span>
                <svg
                  class="rotate-180 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.05"
                    d="M20.5 10.537C20.5 6.514 22.833 4.503 24 4c1.167.503 3.5 2.514 3.5 6.537v7.543L43 31v4l-16-8v9l5 8l-8-3l-8 3l5-8v-9L5 35v-4l15.5-12.92z"
                  />
                </svg>
                <span
                  class="stops__point_after flex flex-col relative items-center"
                ></span>
              </div>
              <div class="flex-col gap-3 flex">
                <div class="flex gap-2.5 items-center">
                  <span class="font-bold">{{
                    format({
                      date: item.outbound_group.departure_date_time,
                      format: "HH:mm",
                      tz: "UTC",
                    })
                  }}</span>
                  <p>
                    {{
                      item.outbound_group.flight_segments[0].departure_airport
                    }}, ({{
                      item.outbound_group.flight_segments[0].departure_airport
                    }})
                  </p>
                </div>
                <p class="text-gray-500">
                  {{
                    Math.floor(
                      item.outbound_group.journey_duration_in_minute / 60
                    )
                  }}h and
                  {{
                    Math.floor(
                      item.outbound_group.journey_duration_in_minute % 60
                    )
                  }}m flight duration
                </p>
                <div class="flex gap-2.5 items-center">
                  <span class="font-bold">{{
                    format({
                      date: item.outbound_group.arrival_date_time,
                      format: "HH:mm",
                      tz: "UTC",
                    })
                  }}</span>
                  <p>
                    {{
                      item.outbound_group.flight_segments[0].arrival_airport
                    }}, ({{
                      item.outbound_group.flight_segments[0].arrival_airport
                    }})
                  </p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <img
                :src="imgs[index]"
                class="rounded-full object-contain w-10 h-10"
                alt=""
              />
              <span>{{ item.outbound_operating_airlines[0].code }}</span>
            </div>
            <main class="text-blue-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.7rem"
                height="1.7rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3.385 19.385v-1h17.23v1zm1.615-3V7h4.615q0-.98.702-1.683q.702-.702 1.683-.702q.98 0 1.683.702q.702.702.702 1.683H19v9.385zm11.692-1H18V8h-1.308zM10.5 7h3q0-.65-.425-1.075T12 5.5q-.65 0-1.075.425T10.5 7m-3.192 8.385V8H6v7.385zM8.192 8v7.385h7.616V8zm-.884 7.385h.884zm9.384 0h-.884zm-9.384 0H6zm.884 0h7.616zm8.5 0H18z"
                />
              </svg>
              <span
                >2Bags ({{
                  item.outbound_group.flight_segments[0].baggage_kg
                }}
                kg)</span
              >
            </main>
          </div>
        </div>
      </TransitionExpand>
    </div>
  </main>
</template>

<script setup>
import { format } from "@formkit/tempo";

const acceptChilder = ref(false);
const route = useRoute();
const props = defineProps(["data"]);
const { locale } = useI18n();
const isOpen = ref([]);
const toggleOpenTicket = (index) => {
  isOpen.value[index] = !isOpen.value[index];
};
const { tickets } = useTickets();

const imgUrls = [];

try {
  for (const flight of props.data.flights) {
    for (const airline of flight.outbound_operating_airlines) {
      const { data } = await useFetch("/api/logo/check", {
        headers: useRequestHeaders(["cookies"]),
        query: { logo: airline.code },
      });
      imgUrls.push(URL.createObjectURL(data.value));
    }
  }
} catch (error) {
  console.log(error);
}

const imgs = imgUrls.map((url) => url);

const adultsCount = ref(parseInt(route.query.adults) || 0);

const adults = ref([]);

for (let i = 0; i < adultsCount.value; i++) {
  adults.value.push({
    name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    number_passport: "",
    national: "",
    deprecate_passport: "",
    country: "",
  });
}
const pushAdults = () => {
  adults.value.push({
    name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    number_passport: "",
    national: "",
    deprecate_passport: "",
    country: "",
  });
};

const childrenCount = ref(parseInt(route.query.children) || 0);

const children = ref([]);

for (let i = 0; i < childrenCount.value; i++) {
  children.value.push({
    name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    number_passport: "",
    national: "",
    deprecate_passport: "",
    country: "",
  });
}
const pushChildren = () => {
  children.value.push({
    name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    number_passport: "",
    national: "",
    deprecate_passport: "",
    country: "",
  });
};

const infantsCount = ref(parseInt(route.query.infants) || 0);

const infants = ref([]);

for (let i = 0; i < infantsCount.value; i++) {
  infants.value.push({
    name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    number_passport: "",
    national: "",
    deprecate_passport: "",
    country: "",
  });
}
const pushInfants = () => {
  infants.value.push({
    name: "",
    last_name: "",
    gender: "",
    birth_date: "",
    number_passport: "",
    national: "",
    deprecate_passport: "",
    country: "",
  });
};

const detailsTicket = ref(null);
const handleDataForTicket = () => {
  tickets.value = [
    { detail: [...adults.value, ...children.value, ...infants.value] },
    {
      ticket: detailsTicket.value,
    },
  ];
  document.body.classList.remove("overflow-hidden");
  navigateTo(`/${locale.value}/ticket`);
};

const modalActive = ref(false);
const toogleModal = (item) => {
  modalActive.value = !modalActive.value;
  document.body.classList.add("overflow-hidden");
  detailsTicket.value = item;
};
</script>
