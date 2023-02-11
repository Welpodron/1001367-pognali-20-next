import css from "styled-jsx/css";

export default css`
  .field {
  }
  .field__input {
    @apply sr-only;
  }
  .field__input:focus + .field__input-checkbox {
    outline: 2px auto activeborder;
  }
  .field__input-checkbox {
    @apply mr-4 grid h-[26px] w-[26px] shrink-0 place-content-center place-items-center rounded-md border-[1px] border-[#CBCED9];
  }
  .field__label {
    @apply flex cursor-pointer items-center text-[16px] font-medium uppercase leading-none text-[#1D2E5B];
  }
`;
