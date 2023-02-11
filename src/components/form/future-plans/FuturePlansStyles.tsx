import css from "styled-jsx/css";

export default css`
  .section {
    @apply relative bg-gray-dark-2 before:absolute before:left-0 before:bottom-full before:z-[2] before:block before:h-[30px] before:w-full before:rounded-t-xl before:bg-inherit;
  }
  .section__header {
    @apply flex flex-wrap items-center justify-between;
  }
  .wrapper {
    @apply space-y-5 bg-[#D4D9EB] p-5 pt-0 pb-14;
  }
  .h2 {
    @apply pr-1 text-[24px] font-bold leading-none text-blue-light-1;
  }
  .future-plans__form {
    @apply mx-auto max-w-[1320px];
  }
  @media (min-width: 768px) {
    .wrapper {
      @apply p-14 pt-7 pb-14;
    }
    .h2 {
      @apply text-[36px];
    }
  }
`;
