import React from "react";

export type PolymorphicComponentPropsGenericType = {
  as?: any;
};

type _NativeProps<ElementType extends React.ElementType> =
  React.ComponentPropsWithoutRef<ElementType>;

type _OverwrittenProps<NativeProps = {}, ProvidedProps = {}> = ProvidedProps &
  Omit<NativeProps, keyof ProvidedProps>;

type _PolymorphicComponentRef<As extends React.ElementType> = {
  ref?: React.ComponentPropsWithRef<As>["ref"];
};

type _PolymorphicComponentProp<As extends React.ElementType> = {
  as?: As;
};

type _PolymorphicComponentProps<As, Props = {}> = As extends React.ElementType
  ? _OverwrittenProps<_NativeProps<As>, Props & _PolymorphicComponentProp<As>> &
      _PolymorphicComponentRef<As>
  : never;

export const polymorphize = <As extends React.ElementType, Props>(
  component: any
) => {
  type PolymorphicComponentProps<PolymorphicComponentElementType> =
    _PolymorphicComponentProps<PolymorphicComponentElementType, Props>;

  type PolymorphicComponent = <PolymorphicComponentElementType = As>(
    props: PolymorphicComponentProps<PolymorphicComponentElementType>
  ) => React.ReactElement;

  return component as PolymorphicComponent;
};
