import css from "styled-jsx/css";

export default css.resolve`
  .stepper__list-item {
    @apply space-y-5 rounded-xl bg-white p-5;
  }
  .stepper__step-title {
    @apply text-[20px] font-bold leading-none text-blue-light-1;
  }
  .stepper__step-description {
    @apply text-[16px] leading-[22px] text-[#444444];
  }
  .stepper__step-content {
    @apply grid grid-cols-1 gap-5;
  }
  .stepper__step-nav-list {
    @apply grid grid-cols-1 gap-3 text-blue-light-1;
  }
  .stepper__step-nav-list-item {
    @apply text-center;
  }
  .stepper__step-nav-link {
    @apply inline-flex items-center truncate bg-white text-[17px] font-bold uppercase leading-none;
  }
  .stepper__step-nav-link--next {
    @apply w-full rounded-full bg-[#FFD74B] px-4 py-3;
  }
  .stepper__controls {
    @apply flex flex-wrap items-center;
  }
  .stepper__control {
    @apply m-2 block h-[5px] w-[5px] rounded-full;
  }
  @media (min-width: 768px) {
    .stepper__step-nav-list-item {
      @apply text-left;
    }
    .stepper__step-title {
      @apply text-[36px];
    }
    .stepper__step-description {
      @apply text-[20px] leading-[24px];
    }
    .stepper__list-item {
      @apply p-10;
    }
    .stepper__step-content {
      @apply gap-10;
    }
    .stepper__step-nav-list {
      @apply grid-cols-2 items-center;
    }
    .stepper__step-nav-link {
      @apply max-w-[290px] text-[24px] normal-case;
    }
    .stepper__step-nav-link--next {
      @apply rounded-xl p-5 py-7 text-left;
    }
    .stepper__step-nav-link--prev {
      @apply ml-auto text-right;
    }
  }
  @media (min-width: 1440px) {
    .stepper__list-item {
      @apply p-24;
    }
  }
`;
