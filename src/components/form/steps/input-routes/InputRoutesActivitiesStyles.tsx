import css from "styled-jsx/css";

export default css.resolve`
  .activities {
  }
  .activities__list {
    @apply grid grid-cols-1 gap-5 px-2;
  }
  .activities__list-item {
    @apply relative;
  }
  .activities__list-item:not(:only-child)::after {
    @apply absolute top-2 left-[-14px] block h-[6px] w-[6px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#1D2E5B] content-[""];
  }
  .activities__list-item:not(:last-child)::before {
    @apply absolute top-3 left-[-15px] block h-[calc(100%+20px)] w-[2px] bg-[#1D2E5B] content-[""];
  }
  @media (min-width: 768px) {
    .activities__list {
      @apply border-t-[1px] border-gray-dark-2 pl-0 pr-10 pt-10;
    }
    .activities__list-item:not(:last-child)::before {
      @apply top-6 left-[calc(100%+25px)] h-[calc(100%+20px)];
    }
    .activities__list-item:not(:only-child)::after {
      @apply left-[calc(100%+19px)] h-[14px] w-[14px] translate-x-0;
    }
  }
`;
