import { ThemeContext } from "@src/context/useThemeContext";
import { useContext } from "react";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Switch mode</button>
    </div>
  );
}
