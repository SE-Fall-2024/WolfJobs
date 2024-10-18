import { Link } from "react-router-dom";

const NavBarItem = (props: { link: string; text: string }) => {
  const { link, text } = props;
  return (
    <>
      <li>
        <Link to={link} className="hover:text-slate-500">
          {text}
        </Link>
      </li>
    </>
  );
};

export default NavBarItem;
