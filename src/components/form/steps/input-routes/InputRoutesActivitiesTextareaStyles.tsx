import css from "styled-jsx/css";

export default css.resolve`
  .field {
    @apply relative block;
  }
  .field__label {
    @apply relative mb-2 flex items-center text-[18px] font-medium leading-none text-[#1D2E5B];
  }
  .field__label-text {
    @apply truncate pr-2 leading-none;
  }
  .field__input {
    @apply block min-h-[150px] w-full rounded-md border-[1px] p-3;
  }
  .field__input-flag {
    @apply relative ml-auto grid h-[24px] w-[35px] shrink-0 place-content-center place-items-center overflow-hidden rounded;
  }
  .field__error {
    @apply block rounded-b-md border-[1px] border-t-0 border-[#FF0000] bg-[#FFEFEF] p-2 px-3 text-[#FF0000];
  }
  @media (min-width: 768px) {
    .field__label-text {
      @apply text-[30px] font-bold;
    }
    .field__label {
      @apply mb-8;
    }
    .field__input {
      @apply p-4 text-[20px];
    }
    .field__input-flag {
      @apply h-[50px] w-[70px];
    }
    .field__error {
      @apply p-4 text-[20px];
    }
  }
`;
