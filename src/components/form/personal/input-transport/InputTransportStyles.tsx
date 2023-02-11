import css from "styled-jsx/css";

export default css.resolve`
  .field {
    @apply flex flex-col items-center;
  }
  .field__label {
    @apply relative inline-block max-w-[220px] truncate bg-gray-light-1 px-4 text-[18px] font-medium uppercase leading-none;
  }
  .field__list {
    @apply -mt-2 flex w-full flex-wrap items-center justify-center rounded-xl border-[1px] border-gray-dark-2 bg-transparent p-4;
  }
  .field__input {
    @apply sr-only;
  }
  .field__input:focus + .field__input-label {
    outline: 2px auto activeborder;
  }
  .field__input-label {
    @apply m-1 block cursor-pointer rounded-full bg-white p-2;
  }
  @media (min-width: 768px) {
    .field {
      @apply flex-col-reverse;
    }
    .field__list {
      @apply mt-0;
    }
    .field__label {
      @apply -mt-3 text-[20px];
    }
  }
`;
