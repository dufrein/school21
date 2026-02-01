import { NavLink } from "@components";
import { KeyboardChuvash } from "@features/KeyboardChuvash";

export default async function Dashboard() {
  return (
    <main>
      <h2>Чувашская экранная клавиатура</h2>
      <p>
        Вы можете воспользоваться нашей экранной клавиатурой для печати на чувашском языке. Для
        переключения регистров (строчные/заглавные) используйте клавиши SHIFT или CAPS. Вы можете
        также пользоваться своей клавиатурой.
      </p>
      <KeyboardChuvash />
      <p>
        Если вы не смогли или не хотетие установки раскладку чувашской клавиатуры на устройство мы
        вам предлагаем воспользоваться нашей чувашской экранной клавиатурой. Найти и скачать, а
        также просто прочитать про существующие чувашские раскладки клавиатуры вы можете{" "}
        <NavLink target="_blank" href="https://chgign.ru/p/chuvashskiye-raskladki-i-shrifty.html">
          здесь
        </NavLink>
        {", "}
        <NavLink
          target="_blank"
          href="https://ru.chuvash.org/e/d0a3d181d182d0b0d0bdd0bed0b2d0bad0b020d187d183d0b2d0b0d188d181d0bad0bed0b920d180d0b0d181d0bad0bbd0b0d0b4d0bad0b8"
        >
          здесь
        </NavLink>
        {" и "}
        <NavLink
          target="_blank"
          href="https://ru.wikipedia.org/wiki/Чувашские_раскладки_клавиатуры"
        >
          здесь
        </NavLink>
        {"."}
      </p>
    </main>
  );
}
