import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface IToggleProps {
  isToggle: boolean;
  toggleHandler: () => void;
}
export const Toggle = ({ isToggle, toggleHandler }: IToggleProps) => {
  return (
    <div>
      <button onClick={toggleHandler}>
        {isToggle ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};
