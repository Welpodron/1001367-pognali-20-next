import css from "styled-jsx/css";

export default css`
  .section {
    @apply relative bg-gray-dark-1 before:absolute before:left-0 before:bottom-full before:z-[2] before:block before:h-[30px] before:w-full before:rounded-t-xl before:bg-inherit;
  }
  .wrapper {
    @apply space-y-5 p-5 pt-0 pb-14;
  }
  .h2 {
    @apply text-[24px] font-bold leading-none text-blue-light-1;
  }
  .current-plans {
    @apply text-blue-light-1;
  }
  .current-plans__list {
    @apply space-y-5;
    counter-reset: current-plans;
  }
  .current-plans__list-item {
    @apply space-y-3 rounded-xl bg-white p-5;
    counter-increment: current-plans;
  }
  .current-plans__route {
    @apply flex items-center text-[16px] font-bold leading-none;
  }
  .current-plans__route:before {
    content: counter(current-plans) ". ";
  }
  .current-plans__content {
    @apply text-[14px] font-medium uppercase leading-none tracking-[1px];
  }
  .current-plans__info {
    @apply mb-5;
  }
  .current-plans__edit {
    @apply uppercase text-black text-opacity-40;
  }
  @media (min-width: 768px) {
    .wrapper {
      @apply p-14 pt-7 pb-14;
    }
    .h2 {
      @apply text-[36px];
    }
    .current-plans__route {
      @apply p-5 py-10 text-[24px];
    }
    .current-plans__route:before {
      @apply hidden;
    }
    .current-plans__route:after {
      content: counter(current-plans) ".";
      @apply ml-auto;
    }
    .current-plans__content {
      @apply grid grid-cols-3 items-center border-t-[1px] border-gray-dark-2 p-5 text-[20px];
    }
    .current-plans__info {
      @apply col-span-2 mb-0 grid grid-cols-2 items-center;
    }
    .current-plans__duration {
      @apply justify-self-center;
    }
    .current-plans__list-item {
      @apply space-y-0 p-0;
    }
    .current-plans__edit {
      @apply justify-self-end;
    }
    .current-plans__list-item {
      @apply px-0;
    }
  }
  @media (min-width: 1440px) {
    .current-plans__list-item {
      @apply grid grid-cols-2 gap-5;
    }
    .current-plans__content {
      @apply border-none;
    }
    .current-plans__duration {
      @apply justify-self-start;
    }
    .current-plans__route:before {
      @apply mr-5 block;
    }
    .current-plans__route:after {
      @apply hidden;
    }
  }
`;
