import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { textVariants } from "@/utils/variants/sidebarVariants";

// import { createElement } from "react";

interface Props {
  toggled: boolean;
  name: string;
  path: string;
  // iconName: string;
}

// const IconPicker = {
//   Home: IconsHome,
//   Convert: IconsConvert,
//   History: IconsGraphs,
//   FAQ: IconsFaq,
// };
export const BaseTab = ({ toggled, name, path }: Props) => {
  //   const { pathname } = useLocation();
  console.log("Sidebar.");
  //   const attrs = { active: path === pathname };

  return (
    <NavLink to={path}>
      <div className="flex justify-start items-end text-black dark:text-white h-10  rounded-md  py-1 max-h-[40px] ">
        {/* {createElement(IconPicker[iconName as keyof typeof IconPicker], attrs)} */}
        <AnimatePresence>
          {toggled ? (
            <motion.span className="ml-2 text-lg leading-0" {...textVariants}>
              {name}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </NavLink>
  );
};
