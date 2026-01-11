"use client";

import React, { useRef, useState } from "react";
import Keyboard, { SimpleKeyboard } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import styles from "./keyboard.module.scss";

export const KeyboardChuvash = () => {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef<SimpleKeyboard>(null);

  // Вызывается при кликах по экранной клавиатуре
  const onChangeScreen = (value: string) => {
    setInput(value);
  };

  // Вызывается при печати на физической клавиатуре
  const onChangePhysical = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInput(value);
    // Синхронизируем виртуальную клавиатуру с вводом извне
    if (keyboard.current) {
      keyboard.current.setInput(value);
    }
  };

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayout(layout === "default" ? "shift" : "default");
    }
  };

  return (
    <div className={styles.container}>
      <input value={input} className={styles.input} onChange={onChangePhysical} />
      <div className={styles.wrapper}>
        <div className={styles.keyboard}>
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={layout}
            onChange={onChangeScreen}
            onKeyPress={onKeyPress}
            layout={{
              default: [
                "ё 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "{tab} й ц у к е н г ш щ з х ъ \\",
                "{lock} ф ы в а п р о л д ж э {enter}",
                "{shift} я ч с м и т ь б ю . {shift}",
                "ӑ ĕ ҫ ӳ {space}", // Ваши чувашские буквы
              ],
              shift: [
                'Ё ! " № ; % : ? * ( ) _ + {bksp}',
                "{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ /",
                "{lock} Ф Ы В А П Р О Л Д Ж Э {enter}",
                "{shift} Я Ч С М И Т Ь Б Ю , {shift}",
                "Ӑ Ӗ Ҫ Ӳ {space}",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};
