import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { variants, textVariants } from "@/utils/variants/sidebarVariants";
import { BaseTab } from "./base/BaseTab";
import { IconsArrow } from "../icons/iconsArrow";

interface Route {
  [key: string]: {
    path: string;
    iconName: string;
  };
}

const routeMap: Route = {
  home: {
    iconName: "Home",
    path: "/",
  },
  convert: { iconName: "Dashboard", path: "/" },
  history: {
    iconName: "Settings",
    path: "/",
  },
  faq: {
    iconName: "Test",
    path: "/",
  },
};
export const Sidebar = () => {
  const [toggled, setToggled] = useState<boolean>(false);

  //   if (!ready) return "Loading translations....";
  return (
    <motion.aside
      animate={toggled ? " open" : "closed"}
      className="sticky top-0 left-0 flex-col items-center justify-between hidden h-screen px-2 py-8 transition duration-150 bg-gray-100 shadow-xl lg:flex dark:text-white dark:bg-dark-container w-fit"
      initial="closed"
      variants={variants}
    >
      <div className="flex items-center max-h-10 ">
        {/* <motion.img
          className="min-w-[50px] w-[50px] h-[60px] min-h-[50px] py-1 max-w-[50px] max-h-[50px]"
          src="/logo.svg"
          transition={{ duration: 0.7 }}
          whileHover={{ rotateY: 180 }}
        /> */}
        <div className="w-[50px] h-[50px] bg-black rounded-full" />

        <AnimatePresence>
          {toggled ? (
            <motion.span className="ml-4 text-xl ltr:ml-2" {...textVariants}>
              Savvy
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="flex flex-col items-start w-full px-2 gap-y-10">
        {Object.keys(routeMap).map((key) => {
          const name = routeMap[key].iconName;
          const iconName = routeMap[key as keyof typeof routeMap].iconName;
          const path = routeMap[key as keyof typeof routeMap].path;

          return (
            <BaseTab
              iconName={iconName}
              key={name}
              name={name}
              path={path}
              toggled={toggled}
            />
          );
        })}
      </div>
      <div
        className={
          "flex flex-col items-start justify-center  gap-y-5" +
          ` ${toggled} ? 'mr-auto' : 'mx-auto`
        }
      >
        <button
          className="flex items-center justify-center w-full"
          onClick={() => {
            setToggled(!toggled);
          }}
          type="button"
        >
          <IconsArrow toggled={toggled} />
        </button>
      </div>
    </motion.aside>
  );
};
