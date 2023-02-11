import css from "styled-jsx/css";

export default css.resolve`
  .calendar {
    @apply grid w-full grid-cols-1 gap-1 text-center;
  }
  .calendar__head {
    @apply grid grid-cols-1 gap-1;
  }
  .calendar__head-controls {
    @apply mb-2 flex items-center border-t-[1px] border-b-[1px] border-[#CBCED9] py-3;
  }
  .calendar__head-control {
    @apply shrink-0 p-2 px-3;
  }
  .calendar__head-month {
    @apply grow text-center text-[20px] font-bold capitalize leading-none text-[#1D2E5B];
  }
  .calendar__head-weekdays {
    @apply grid grid-cols-7 gap-1 text-[14px]  capitalize text-[#444444];
  }
  .calendar__head-weekday {
    @apply font-normal;
  }
  .calendar__head-weekday--weekend {
    @apply text-[#FF5C23];
  }
  .calendar__body {
    @apply mr-[-4px] grid auto-rows-fr text-[14px] leading-[18px];
  }
  .calendar__week {
    @apply grid auto-cols-fr grid-cols-7;
  }
  .calendar__week:not(:first-child) {
    @apply mt-[-3px];
  }
  .calendar__day-cell {
    @apply ml-[-3px] block;
  }
  .calendar__day {
    @apply relative h-full w-full cursor-default border-[1px] border-[#D6D9E6] bg-white p-1 text-[#444444] opacity-30;
  }
  .calendar__day[data-allowed="true"] {
    @apply cursor-pointer bg-[#EDEFF6] font-medium text-[#1D2E5B] opacity-100;
  }
  .calendar__day[data-in-range="true"] {
    @apply border-[#1D2E5B] bg-[#1D2E5B] text-white opacity-100;
  }
  .calendar__day[data-selected="true"] {
    @apply z-[2] border-[2px] border-[#FF5C23] opacity-100;
  }
  @media (min-width: 768px) {
    .calendar__head-weekdays {
      @apply text-[18px];
    }
    .calendar__head-month {
      @apply text-[36px];
    }
    .calendar__head-control {
      @apply p-4;
    }
    .calendar__body {
      @apply text-[20px] leading-none;
    }
    .calendar__day {
      @apply py-6 px-4;
    }
  }
  @media (min-width: 1440px) {
    .calendar {
      @apply text-left;
    }
    .calendar__head-weekday {
      @apply p-4;
    }
    .calendar__day {
      @apply pt-4 pb-10 text-left;
    }
  }
`;
