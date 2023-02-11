import css from "styled-jsx/css";

export default css.resolve`
  .section {
    @apply bg-gray-light-1 text-blue-light-1;
  }
  .section__header {
    @apply relative bg-blue-dark-1 p-5 pb-0 before:absolute before:left-5 before:top-[calc(100%+27px)] before:z-[3] before:block before:h-[5px]  before:w-[calc(50%+50px)] before:max-w-[350px] before:rounded-full before:bg-[#FF8D30] after:absolute after:top-full after:left-0 after:z-[2] after:block after:h-[30px] after:w-full after:rounded-b-xl after:bg-inherit;
  }
  .wrapper {
    @apply p-5 pb-14 pt-[calc(30px+30px)];
  }
  .h1 {
    @apply text-[36px] font-bold leading-none text-white;
  }
  .form {
    @apply grid grid-cols-2 gap-5;
  }
  .form__submit {
    @apply rounded-full bg-gray-dark-1 p-2 font-medium uppercase;
  }
  .personal__field-photo {
    @apply col-span-full;
  }
  .personal__field-tags {
    @apply col-span-full;
  }
  .personal__field-transport {
    @apply col-span-full;
  }
  .form__submit {
    @apply col-span-full p-3 text-[20px] font-medium uppercase leading-[18px];
  }
  @media (min-width: 768px) {
    .h1 {
      @apply text-[60px];
    }
    .wrapper {
      @apply p-14;
    }
    .section__header {
      @apply px-14 before:left-14;
    }
    .form {
      @apply grid-cols-[100px_minmax(0,_1fr)_100px] gap-10;
    }
    .personal__field-transport {
      @apply col-span-1 col-start-2 row-start-1;
    }
    .form__submit {
      @apply rounded p-4;
    }
  }
`;
