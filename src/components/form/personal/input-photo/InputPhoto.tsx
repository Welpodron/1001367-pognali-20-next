import InputPhotoStyles from "./InputPhotoStyles";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { clsx } from "clsx";

export const InputPhoto = ({
  state,
  errors: error,
  touched,
  className,
}: ComponentPropsGenericType & FieldPropsGenericType<File | null>) => {
  const [, setValue] = state;
  const [, setIsTouched] = touched;

  return (
    <>
      <style jsx>{InputPhotoStyles}</style>
      <div
        className={clsx(`field`, className)}
        onFocus={() => setIsTouched(true)}
      >
        <label className="field__label">
          <input
            onChange={(event) =>
              setValue(event.currentTarget.files?.[0] as File)
            }
            multiple={false}
            accept="image/jpeg,image/png"
            className="field__input"
            type="file"
          />
          <span className="field__label-text">Сменить фото</span>
        </label>
        {error && <p className="field__error">{error}</p>}
      </div>
    </>
  );
};
