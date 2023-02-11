import css from "styled-jsx/css";

export default css.resolve`
  .routes {
    @apply relative grid grid-cols-1 gap-5;
  }
  .routes__list {
    @apply space-y-5;
  }
  .routes__add {
    @apply flex items-center truncate rounded border-[1px] border-[#e1e4f1] bg-[#EDEFF6] px-2 py-3 text-left text-[14px] font-medium uppercase leading-none tracking-[1px] text-[#1D2E5B];
  }
  .routes__list-item {
    @apply relative;
  }
  @media (min-width: 768px) {
    .routes__list {
      @apply border-t-[1px] border-gray-dark-2 pt-10;
    }
    .routes__add {
      @apply mr-[calc(150px+25px)] p-5 text-[20px];
    }
    .routes::before {
      @apply absolute right-[calc(155px)] top-0 h-full w-[1px] bg-gray-dark-2 content-[''];
    }
  }
`;
