import css from "styled-jsx/css";

export default css`
  .field {
  }
  .field__label {
  }
  .field__label-text {
    @apply block w-full cursor-pointer rounded-full bg-gray-dark-1 p-3 text-center text-[20px] font-medium uppercase leading-[18px];
  }
  .field__input {
    @apply sr-only;
  }
  .field__input:focus + .field__label-text {
    outline: 2px auto activeborder;
  }
  .field__error {
    @apply rounded-b-md bg-[#FFEFEF] p-2 px-3 text-[#FF0000];
  }
  @media (min-width: 768px) {
    .field__label-text {
      @apply rounded p-4;
    }
  }
`;
