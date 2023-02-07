import { Debug } from "@/components/generic/Debug/Debug";
import { Field, FieldContext } from "@/components/generic/forms/Field/Field";
import { useForm } from "@/hooks/use-form/use-form";
import { useMergedRefs } from "@/hooks/use-merged-refs/use-merged-refs";
import { useContext, useRef, useState } from "react";

const Input = () => {
  const { state, ref, touched, errors } = useContext(FieldContext);

  const [value, setValue] = state;
  const [isTouched, setIsTouched] = touched;

  const _ref = useRef<HTMLInputElement>(null);

  const mergedRef = useMergedRefs(_ref, ref);

  return (
    <div>
      <Debug errors={errors} state={state} touched={touched} />
      <input
        ref={mergedRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-2 bg-red-300"
      />
      <button type="button" onClick={() => setIsTouched(false)}>
        Untouch
      </button>
    </div>
  );
};

export default function Test() {
  const form = useForm({
    initialValues: {
      a: {
        b: {
          c: 123,
        },
        d: ["", 2, { example: 123 }],
      },
    },
  });

  //   form.getFieldProps("a.b.c") -> { state: [value, setValue] }

  return (
    <div>
      <button
        onClick={() => form.setFieldTouched("a.b.c", false)}
        type="button"
      >
        Untouch a.b.c
      </button>
      <button
        onClick={() => form.setFieldTouched("a.d.2.example", false)}
        type="button"
      >
        Untouch a.d.2.example
      </button>
      <button type="button" onClick={() => form.setFieldsTouched([])}>
        Untouch all fields
      </button>
      <button
        type="button"
        onClick={() => form.setFieldError("a.d.2.example", ["1233"])}
      >
        Trigger a.d.2.example error
      </button>
      <Debug
        formErrors={form._errors}
        formTouchedFields={form._touched}
        formValues={form.values}
      />
      <div>
        <Field {...form.getFieldProps("a.b.c")}>
          <div>
            <p>123</p>
            <Input />
          </div>
        </Field>
      </div>
      <div>
        <Field {...form.getFieldProps("a.d.2.example")}>
          <p>321</p>
          <Input />
        </Field>
      </div>
    </div>
  );
}
