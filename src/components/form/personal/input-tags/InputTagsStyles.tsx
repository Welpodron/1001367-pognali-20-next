import css from "styled-jsx/css";

export default css`
  .field {
    @apply flex flex-col items-center;
  }
  .field__label {
    @apply relative inline-block max-w-[220px] truncate bg-gray-light-1 px-4 text-[18px] font-medium uppercase leading-none;
  }
  .field__input {
    @apply -mt-2 min-h-[80px] w-full rounded-xl border-[1px] border-gray-dark-2 bg-transparent p-4;
  }
  @media (min-width: 768px) {
    .field {
      @apply flex-col-reverse;
    }
    .field__input {
      @apply mt-0;
    }
    .field__label {
      @apply -mt-3 text-[20px];
    }
  }
`;
