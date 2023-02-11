import css from "styled-jsx/css";

export default css`
  .field {
    @apply text-[16px] font-medium uppercase leading-none;
  }
  .field__input-container {
    @apply flex rounded-md border-[1px] bg-white text-center;
  }
  .field__input-control {
    @apply shrink-0 bg-transparent p-4;
  }
  .field__input {
    @apply min-w-0 shrink grow appearance-none border-none bg-transparent text-center font-medium;
  }
  .field__error {
    @apply rounded-b-md bg-[#FFEFEF] p-2 px-3 text-[#FF0000];
  }
  .field__label {
    @apply mb-2 flex items-center;
  }
  .field__label-text {
  }
  .field__label-measure {
    @apply ml-auto shrink-0 text-right text-[#1D2E5B] opacity-30;
  }
  @media (min-width: 768px) {
    .field {
      @apply text-[20px] leading-[18px];
    }
    .field__input-control {
      @apply p-6;
    }
    .field__label {
      @apply mb-5;
    }
  }
`;
