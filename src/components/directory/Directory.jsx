import { useSelector } from "react-redux";
import { selectDirectory } from "../../Store/directory-slice/directorySelectors";
import MenuItem from "../menu-item/MenuItem";
import classes from "./Directory.module.scss";

const Directory = () => {
  const directory = useSelector(selectDirectory);
  return (
    <div className={classes["directory-menu"]}>
      {directory.map(({ id, ...restProps }) => {
        return <MenuItem key={id} {...restProps} />;
      })}
    </div>
  );
};

export default Directory;
