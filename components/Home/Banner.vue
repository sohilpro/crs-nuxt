<template>
  <section
    class="banner bg-no-repeat bg-center flex justify-center items-center"
  >
    <div class="text-white px-5">
      <h1 class="md:text-[48px] text-[30px] text-center font-bold">
        {{ $t("Banner.title") }}
      </h1>
      <h5
        id="bannerSubTitle"
        class="text-center md:text-base text-sm max-w-[720px] w-full mx-auto leading-7 mt-2"
      >
        {{ $t("Banner.description") }}
      </h5>
      <div
        class="flex items-center justify-center gap-2 text-sm mt-14 flex-wrap"
      >
        <div
          class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M18.0501 8.63006L13.3801 6.62006L12.3401 6.18006C12.1801 6.10006 12.0401 5.89006 12.0401 5.71006V2.65006C12.0401 1.69006 11.3301 0.550059 10.4701 0.110059C10.1701 -0.0399414 9.81006 -0.0399414 9.51006 0.110059C8.66006 0.550059 7.95006 1.70006 7.95006 2.66006V5.72006C7.95006 5.90006 7.81006 6.11006 7.65006 6.19006L1.95006 8.64006C1.32006 8.90006 0.810059 9.69006 0.810059 10.3701V11.6901C0.810059 12.5401 1.45006 12.9601 2.24006 12.6201L7.25006 10.4601C7.64006 10.2901 7.96006 10.5001 7.96006 10.9301V12.0401V13.8401C7.96006 14.0701 7.83006 14.4001 7.67006 14.5601L5.35006 16.8901C5.11006 17.1301 5.00006 17.6001 5.11006 17.9401L5.56006 19.3001C5.74006 19.8901 6.41006 20.1701 6.96006 19.8901L9.34006 17.8901C9.70006 17.5801 10.2901 17.5801 10.6501 17.8901L13.0301 19.8901C13.5801 20.1601 14.2501 19.8901 14.4501 19.3001L14.9001 17.9401C15.0101 17.6101 14.9001 17.1301 14.6601 16.8901L12.3401 14.5601C12.1701 14.4001 12.0401 14.0701 12.0401 13.8401V10.9301C12.0401 10.5001 12.3501 10.3001 12.7501 10.4601L17.7601 12.6201C18.5501 12.9601 19.1901 12.5401 19.1901 11.6901V10.3701C19.1901 9.69006 18.6801 8.90006 18.0501 8.63006Z"
              fill="white"
            />
          </svg>
          <p>{{ $t("Banner.button.flight") }}</p>
        </div>
        <div
          class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M12.5 22.0003H4.07997C2.91997 22.0003 1.96997 21.0703 1.96997 19.9303V5.09035C1.96997 2.47035 3.91997 1.28035 6.30997 2.45035L10.75 4.63035C11.71 5.10035 12.5 6.35035 12.5 7.41035V22.0003Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M21.97 15.0599V18.8399C21.97 20.9999 20.97 21.9999 18.81 21.9999H12.5V10.4199L12.97 10.5199L17.47 11.5299L19.5 11.9799C20.82 12.2699 21.9 12.9499 21.96 14.8699C21.97 14.9299 21.97 14.9899 21.97 15.0599Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M5.5 9H8.97"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M5.5 13H8.97"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M17.47 11.53V14.75C17.47 15.99 16.46 17 15.22 17C13.98 17 12.97 15.99 12.97 14.75V10.52L17.47 11.53Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M21.96 14.8703C21.9 16.0503 20.92 17.0003 19.72 17.0003C18.48 17.0003 17.47 15.9903 17.47 14.7503V11.5303L19.5 11.9803C20.82 12.2703 21.9 12.9503 21.96 14.8703Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ $t("Banner.button.hotel") }}</p>
        </div>
        <div
          class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M8 13H12"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M8 17H16"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ $t("Banner.button.visa") }}</p>
        </div>
        <div
          class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M14 8V13"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M18 8V13"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M6 13V17"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ $t("Banner.button.tour") }}</p>
        </div>
        <div
          class="text-white group bg-[#2323233D] hover:bg-[#E4F0FF] hover:text-[#0A77FF] hover:border hover:border-[#0A77FF] flex items-center justify-center gap-2 w-[109px] h-10 rounded-[104px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M18.3334 4.99984V7.0165C18.3334 8.33317 17.5 9.1665 16.1834 9.1665H13.3334V3.3415C13.3334 2.4165 14.0917 1.6665 15.0167 1.6665C15.9251 1.67484 16.7584 2.0415 17.3584 2.6415C17.9584 3.24984 18.3334 4.08317 18.3334 4.99984Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              class="group-hover:fill-[#0A77FF]"
              d="M1.66663 5.83317V17.4998C1.66663 18.1915 2.44994 18.5832 2.99994 18.1665L4.42496 17.0998C4.75829 16.8498 5.22496 16.8832 5.52496 17.1832L6.90827 18.5748C7.23327 18.8998 7.76664 18.8998 8.09164 18.5748L9.49164 17.1748C9.7833 16.8832 10.25 16.8498 10.575 17.0998L12 18.1665C12.55 18.5748 13.3333 18.1832 13.3333 17.4998V3.33317C13.3333 2.4165 14.0833 1.6665 15 1.6665H5.83329H4.99996C2.49996 1.6665 1.66663 3.15817 1.66663 4.99984V5.83317Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>{{ $t("Banner.button.insurance") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
