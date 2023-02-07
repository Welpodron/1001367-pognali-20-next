import { Collapse } from "@/components/generic/collapse/collapse";
import { TRANSPORTS } from "@/data/data";
import React, { useState, useCallback, useEffect } from "react";

export const Companions = () => {
  const [data, setData] = useState({});

  const sliderRef = React.useRef<HTMLDivElement>(null);
  const firstControlRef = React.useRef<HTMLSpanElement>(null);
  const firstControlInputRef = React.useRef<HTMLInputElement>(null);
  const [firstControlValue, setFirstControlValue] = useState<number>(0);
  const secondControlRef = React.useRef<HTMLSpanElement>(null);
  const secondControlInputRef = React.useRef<HTMLInputElement>(null);
  const [secondControlValue, setSecondControlValue] = useState<number>(0);

  const [distance, setDistance] = useState<number>(0);

  const [currentControl, setCurrentControl] = useState<HTMLSpanElement | null>(
    null
  );

  const handleControlTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!sliderRef || !sliderRef.current) {
        return;
      }

      if (!firstControlRef || !firstControlRef.current) {
        return;
      }

      if (!secondControlRef || !secondControlRef.current) {
        return;
      }

      const { x: sliderX, width: sliderWidth } =
        sliderRef.current.getBoundingClientRect();

      const currentValuePx =
        e.changedTouches[e.changedTouches.length - 1].pageX - sliderX;

      const target = e.currentTarget as HTMLSpanElement;

      const maxLevel = 100;
      const currentValueLvl = Math.ceil(
        maxLevel * (currentValuePx / sliderWidth)
      );
      const currentValuePercent = Math.ceil(
        100 * (currentValuePx / sliderWidth)
      );

      if (currentValuePx < 0) {
        return;
      }

      if (currentValuePx > sliderWidth) {
        return;
      }

      if (firstControlRef.current.contains(target)) {
        return setFirstControlValue(currentValueLvl);
      }

      if (secondControlRef.current.contains(target)) {
        return setSecondControlValue(currentValueLvl);
      }
    },
    [
      sliderRef,
      firstControlRef,
      secondControlRef,
      setFirstControlValue,
      setSecondControlValue,
    ]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Tab" || e.key === "Shift") {
        return;
      }

      if (!firstControlRef || !firstControlRef.current) {
        return;
      }

      if (!secondControlRef || !secondControlRef.current) {
        return;
      }

      const target = e.currentTarget as HTMLSpanElement;

      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();

        if (firstControlValue === 100 || secondControlValue === 100) {
          return;
        }

        if (target === firstControlRef.current) {
          return setFirstControlValue((currentLevel) => currentLevel + 1);
        }

        if (target === secondControlRef.current) {
          return setSecondControlValue((currentLevel) => currentLevel + 1);
        }
      }

      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();

        if (firstControlValue === 0 || secondControlValue === 0) {
          return;
        }

        if (target === firstControlRef.current) {
          return setFirstControlValue((currentLevel) => currentLevel - 1);
        }

        if (target === secondControlRef.current) {
          return setSecondControlValue((currentLevel) => currentLevel - 1);
        }
      }
    },
    [
      firstControlValue,
      secondControlValue,
      firstControlRef,
      secondControlRef,
      setFirstControlValue,
      setSecondControlValue,
    ]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!currentControl) {
        return;
      }

      if (!sliderRef || !sliderRef.current) {
        return;
      }

      if (!firstControlRef || !firstControlRef.current) {
        return;
      }

      if (!secondControlRef || !secondControlRef.current) {
        return;
      }

      e.preventDefault();

      const { x: sliderX, width: sliderWidth } =
        sliderRef.current.getBoundingClientRect();

      const currentValuePx = e.x - sliderX;

      const maxLevel = 100;
      const currentValueLvl = Math.ceil(
        maxLevel * (currentValuePx / sliderWidth)
      );
      const currentValuePercent = Math.ceil(
        100 * (currentValuePx / sliderWidth)
      );

      if (currentValuePx < 0) {
        return;
      }

      if (currentValuePx > sliderWidth) {
        return;
      }

      if (currentControl === firstControlRef.current) {
        return setFirstControlValue(currentValueLvl);
      }

      if (currentControl === secondControlRef.current) {
        return setSecondControlValue(currentValueLvl);
      }
    },
    [
      sliderRef,
      firstControlRef,
      secondControlRef,
      currentControl,
      setFirstControlValue,
      setSecondControlValue,
    ]
  );

  const handleMouseUp = useCallback(() => {
    setCurrentControl(null);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, setCurrentControl]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const target = e.currentTarget as HTMLSpanElement;

      if (!target) {
        return;
      }

      setCurrentControl(target);
    },
    [setCurrentControl]
  );

  useEffect(() => {
    if (!sliderRef || !sliderRef.current) {
      return;
    }

    if (!firstControlRef || !firstControlRef.current) {
      return;
    }

    if (!secondControlRef || !secondControlRef.current) {
      return;
    }

    if (!currentControl) {
      return;
    }

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [
    currentControl,
    handleMouseUp,
    handleMouseMove,
    sliderRef,
    firstControlRef,
    secondControlRef,
  ]);

  useEffect(() => {
    setDistance(
      Math.max(firstControlValue, secondControlValue) -
        Math.min(firstControlValue, secondControlValue)
    );
  }, [firstControlValue, secondControlValue, setDistance]);

  const handleChange = useCallback(
    (e: React.ChangeEvent) => {
      if (!firstControlInputRef || !firstControlInputRef.current) {
        return;
      }

      if (!secondControlInputRef || !secondControlInputRef.current) {
        return;
      }

      const target = e.currentTarget as HTMLInputElement;

      if (!target) {
        return;
      }

      const value = parseInt(target.value);

      if (target === firstControlInputRef.current) {
        if (value > 100) {
          return setFirstControlValue(100);
        }
        if (value < 0) {
          return setFirstControlValue(0);
        }
        return setFirstControlValue(value);
      }

      if (target === secondControlInputRef.current) {
        if (value > 100) {
          return setSecondControlValue(100);
        }
        if (value < 0) {
          return setSecondControlValue(0);
        }
        return setSecondControlValue(value);
      }
    },
    [
      firstControlInputRef,
      secondControlInputRef,
      setSecondControlValue,
      setFirstControlValue,
    ]
  );

  return (
    <form
      id="form-features--js"
      className="bg-[#FFD74B] rounded-2xl p-5 text-[#1D2E5B] space-y-5"
      action="https://echo.htmlacademy.ru"
      method="get"
    >
      <p className="font-bold text-[22px] leading-none">
        Подберите идеального попутчика
      </p>
      <div className="form-features__section form-features__section--checkboxes">
        <Collapse>
          <Collapse.Control
            type="button"
            className="uppercase font-bold text-[16px] leading-[18px]"
          >
            Хобби
          </Collapse.Control>
          <Collapse.Content as="fieldset">
            <ul className="form-features__list">
              {["Спортзал", "Кальян", "Диван"].map((hobby, index) => (
                <li key={index}>
                  <label className="inline-flex items-center">
                    <input
                      className="mr-2 shrink-0 rounded border-0 border-none w-[18px] h-[18px] appearance-none bg-white"
                      type="checkbox"
                      name="hobby"
                      value={hobby}
                    />
                    <span>{hobby}</span>
                  </label>
                </li>
              ))}
            </ul>
          </Collapse.Content>
        </Collapse>
      </div>
      <div className="form-features__section form-features__section--checkboxes">
        <Collapse>
          <Collapse.Control
            type="button"
            className="uppercase font-bold text-[16px] leading-[18px]"
          >
            Музыка
          </Collapse.Control>
          <Collapse.Content as="fieldset">
            <ul className="form-features__list">
              {["Тяжелый рок", "Русский рэп", "Евроденс"].map(
                (music, index) => (
                  <li key={index}>
                    <label className="inline-flex items-center">
                      <input
                        className="mr-2 shrink-0 rounded border-0 border-none w-[18px] h-[18px] appearance-none bg-white"
                        type="checkbox"
                        name="music"
                        value={music}
                      />
                      <span>{music}</span>
                    </label>
                  </li>
                )
              )}
            </ul>
          </Collapse.Content>
        </Collapse>
      </div>
      <div className="form-features__section form-features__section--checkboxes">
        <Collapse>
          <Collapse.Control
            type="button"
            className="uppercase font-bold text-[16px] leading-[18px]"
          >
            Еда
          </Collapse.Control>
          <Collapse.Content as="fieldset">
            <ul className="form-features__list">
              {["Мясоед", "Вегетарианец", "Веган"].map((food, index) => (
                <li key={index}>
                  <label className="inline-flex items-center">
                    <input
                      className="mr-2 shrink-0 rounded border-0 border-none w-[18px] h-[18px] appearance-none bg-white"
                      type="checkbox"
                      name="food"
                      value={food}
                    />
                    <span>{food}</span>
                  </label>
                </li>
              ))}
            </ul>
          </Collapse.Content>
        </Collapse>
      </div>
      <div className="form-features__section form-features__section--transport">
        <Collapse>
          <Collapse.Control
            type="button"
            className="uppercase font-bold text-[16px] leading-[18px]"
          >
            Транспорт
          </Collapse.Control>
          <Collapse.Content as="fieldset">
            <ul className="form-features__list form-features__list--transport-list catalog-vehicles">
              {TRANSPORTS.map((transport, index) => (
                <li key={index}>
                  <label aria-label={transport.name}>
                    <input
                      type="checkbox"
                      name="transport"
                      value={transport.name}
                    />
                    {transport.icon({
                      width: 25,
                      height: 25,
                      fill: "#1D2E5B",
                      className: `my-1 mx-2`,
                    })}
                  </label>
                </li>
              ))}
            </ul>
          </Collapse.Content>
        </Collapse>
      </div>
      <div className="form-features__section form-features__section--level">
        <Collapse>
          <Collapse.Control
            type="button"
            className="uppercase font-bold text-[16px] leading-[18px]"
          >
            Левел
          </Collapse.Control>
          <Collapse.Content className="space-y-5" as="fieldset">
            <div className="flex">
              <label className="grow" aria-label="Левел от/до">
                <input
                  ref={secondControlInputRef}
                  onChange={handleChange}
                  value={isNaN(secondControlValue) ? "" : secondControlValue}
                  type="number"
                  className="appearance-none bg-white border-none rounded-none p-2 w-full text-[#1D2E5B] font-medium text-center text-[14px] leading-[13px]"
                />
              </label>
              <label className="grow" aria-label="Левел от/до">
                <input
                  type="number"
                  inputMode="numeric"
                  ref={firstControlInputRef}
                  value={isNaN(firstControlValue) ? "" : firstControlValue}
                  onChange={handleChange}
                  className="appearance-none bg-white border-none rounded-none p-2 w-full text-[#1D2E5B] font-medium text-center text-[14px] leading-[13px]"
                />
              </label>
            </div>
            <div
              ref={sliderRef}
              className="bg-[#1D2E5B] bg-opacity-20 relative h-[3px] rounded-full"
            >
              <div
                className="bg-[#1D2E5B] h-full absolute top-0"
                style={{
                  left: `${
                    isNaN(Math.min(firstControlValue, secondControlValue))
                      ? 0
                      : Math.min(firstControlValue, secondControlValue)
                  }%`,
                  width: `${isNaN(distance) ? 0 : distance}%`,
                }}
              ></div>
              {/* Touch-none блокирует скроллинг страницы при touch событии */}
              <span
                className="touch-none w-[13px] h-[13px] bg-[#1D2E5B] rounded-full block absolute top-[1px] -translate-y-1/2 cursor-pointer"
                tabIndex={0}
                ref={firstControlRef}
                onKeyDown={handleKeyDown}
                onMouseDown={handleMouseDown}
                onTouchMove={handleControlTouchMove}
                style={{
                  left: `${isNaN(firstControlValue) ? 0 : firstControlValue}%`,
                }}
              ></span>
              <span
                className="touch-none w-[13px] h-[13px] bg-[#1D2E5B] rounded-full block absolute top-[1px] -translate-y-1/2 cursor-pointer"
                tabIndex={0}
                ref={secondControlRef}
                onKeyDown={handleKeyDown}
                onMouseDown={handleMouseDown}
                onTouchMove={handleControlTouchMove}
                style={{
                  left: `${
                    isNaN(secondControlValue) ? 0 : secondControlValue
                  }%`,
                }}
              ></span>
            </div>
          </Collapse.Content>
        </Collapse>
      </div>
      <button
        className="bg-white px-4 py-3 rounded-full w-full uppercase font-bold text-[17px] leading-[17px]"
        type="submit"
      >
        Показать
      </button>
    </form>
  );
};
