import PersonalStyles from "./PersonalStyles";
import { InputPhoto } from "./input-photo/InputPhoto";
import { InputTags } from "./input-tags/InputTags";
import { InputTransport } from "./input-transport/InputTransport";
import { useForm } from "@/hooks/use-form/use-form";
import { AppContext } from "@/pages/_app";
import { _deepEqual } from "@/utils/object/object";
import { useMemo } from "react";
import { useContext } from "react";

export const Personal = () => {
  const { defaultHeaderHeight } = useContext(AppContext);
  const { className, styles } = PersonalStyles;

  const initialValues = useMemo(
    () => ({
      photo: null,
      tags: "",
      transport: [],
    }),
    []
  );

  const form = useForm({
    initialValues,
    validate: {
      photo: ({ value }) => {
        if (!value) {
          return "Необходимо загрузить фотографию";
        }
        if (value.size > 1024 * 1024 * 5) {
          return "Фотография не должна превышать 5 МБ";
        }
        if (value.type !== "image/jpeg" && value.type !== "image/png") {
          return "Фотография должна быть в формате .jpeg или .png";
        }
        return null;
      },
    },
  });

  return (
    <>
      {styles}
      <section className={`${className} section personal`}>
        <header
          className={`${className} section__header`}
          style={{ paddingTop: defaultHeaderHeight + 30 }}
        >
          <h1 className={`${className} h1`}>Направления</h1>
        </header>
        <div className={`${className} wrapper`}>
          <form
            onSubmit={form.handleSubmit((values) => {
              // console.log(values);
            })}
            className={`${className} form`}
          >
            <div
              className={`${className} h-[100px] w-[100px] rounded-full bg-[#DFE3F0]`}
            ></div>
            <div
              className={`${className} h-[100px] w-[100px] rounded-full bg-[#DFE3F0]`}
            >
              {/* Тут будет изображение */}
            </div>
            <InputPhoto
              {...form.getFieldProps("photo")}
              className={`${className} personal__field-photo`}
            />
            <InputTags
              placeholder="#бургер #бар #футбол #концерт #крафт"
              {...form.getFieldProps("tags")}
              className={`${className} personal__field-tags`}
            />
            <InputTransport
              {...form.getFieldProps("transport")}
              className={`${className} personal__field-transport`}
            />
            {!_deepEqual(form.values, initialValues) && (
              <button className={`${className} form__submit`} type="submit">
                Обновить аккаунт
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};
