import css from "styled-jsx/css";

export default css.resolve`
  .field {
    @apply relative;
  }
  .field::after {
    @apply absolute top-[22px] right-[calc(52px)] z-[2] h-[8px] w-[8px] -translate-y-1/2 translate-x-1/2 rounded-full border-[1px] border-gray-dark-2 bg-white content-[''];
  }
  .field[data-active="true"]::after {
    @apply border-blue-light-1 bg-blue-light-1;
  }
  .field__delete {
    @apply absolute top-0 right-0 grid h-[21px] w-[21px] translate-x-1/2 -translate-y-1/2 place-content-center place-items-center rounded-full bg-[#EDEFF6];
  }
  .field__select-list {
    @apply grid max-h-[210px] grid-cols-1 gap-2 overflow-y-auto py-4 px-2 text-[#444444];
  }
  .field__container {
    @apply flex;
  }
  .field__input {
    @apply flex grow items-center truncate rounded border-[1px] px-2 py-3 pr-3 text-left text-[14px] font-medium uppercase leading-none tracking-[1px];
  }
  .field__input-icon {
    @apply ml-auto shrink-0;
  }
  .field__error {
    @apply rounded-b-md bg-[#FFEFEF] p-2 px-3 text-[#FF0000];
  }
  .field__input-text {
    @apply truncate pr-2;
  }
  .field__input-flag {
    @apply relative grid h-[24px] w-[35px] place-content-center place-items-center overflow-hidden rounded;
  }
  .field__input-flag-container {
    @apply rounded border-[1px] border-l-0 p-2;
  }
  .field__filter-container {
    @apply relative;
  }
  .field__filter-list {
    @apply grid grid-cols-5;
  }
  .field__filter-list-item {
    @apply border-[1px] border-[#CBCED9];
  }
  .field__filter-list-option {
    @apply h-full w-full p-4 text-center text-[14px] font-medium uppercase leading-none;
  }
  .field__select-list-option {
    @apply text-left;
  }
  @media (min-width: 768px) {
    .field__delete-icon {
      @apply h-[20px] w-[20px];
    }
    .field::after {
      @apply top-1/2 right-[calc(155px)] h-[14px] w-[14px];
    }
    .field {
      @apply flex items-center;
    }
    .field__container {
      @apply shrink grow;
    }
    .field__input {
      @apply grow p-5 text-[20px];
    }
    .field__input-flag-container {
      @apply grid min-w-[150px] shrink-0 place-content-center place-items-center border-none p-0;
    }
    .field__input-flag {
      @apply h-[50px] w-[70px];
    }
    .field__delete {
      @apply relative h-[25px] w-[25px] shrink-0 translate-x-0 -translate-y-0 rounded-none bg-transparent;
    }
    .field__filter-container {
      @apply flex h-[350px];
    }
    .field__filter-list {
      @apply shrink-0 p-6;
    }
    .field__select-list {
      @apply max-h-full grow auto-rows-min items-start border-l-[1px] border-[#CBCED9] p-6 text-[20px];
    }
    .field__filter-list-option {
      @apply px-5 text-[20px];
    }
  }
`;
