import React, { useState } from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import UserProfile from './UserProfile';

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const pathname = usePathname();
  const pathDirect = pathname;
  
  // State to track the currently selected NavGroup
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null); // Track the currently open group

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return (
              <NavGroup
                item={item}
                key={item.subheader}
                isSelected={selectedGroup === item.subheader}
                isOpen={openGroup === item.subheader} // Pass open state
                onClick={() => {
                  setSelectedGroup(item.subheader);
                  setOpenGroup(openGroup === item.subheader ? null : item.subheader); // Toggle open state
                }}
              />
            );
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
