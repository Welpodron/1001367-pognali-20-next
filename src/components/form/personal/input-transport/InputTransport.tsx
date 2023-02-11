import { InputTransportCheckbox } from "./InputTransportCheckbox";
import InputTransportStyles from "./InputTransportStyles";
import { ComponentPropsGenericType } from "@/components/generic/_component/Component";
import { FieldPropsGenericType } from "@/components/generic/forms/_field/Field";
import { TRANSPORTS } from "@/data/data";
import { clsx } from "clsx";

export const InputTransport = ({
  state,
  touched,
  className,
}: ComponentPropsGenericType & FieldPropsGenericType<string[]>) => {
  const [, setIsTouched] = touched;
  const { className: _className, styles } = InputTransportStyles;

  return (
    <>
      {styles}
      <div
        className={clsx(`${_className} field`, className)}
        onFocus={() => setIsTouched(true)}
      >
        <span className={`${_className} field__label`}>Транспорт</span>
        <ul className={`${_className} field__list`}>
          {TRANSPORTS.map(({ name, icon }, index) => (
            <InputTransportCheckbox key={index} {...{ state, icon, name }} />
          ))}
        </ul>
      </div>
    </>
  );
};
