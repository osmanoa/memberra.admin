import PropTypes from "prop-types";
// mui imports
import { ListSubheader, styled, Theme, Collapse } from "@mui/material";
import { useState } from "react";
import NavItem from "../NavItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type NavGroup = {
  navlabel?: boolean;
  subheader?: string;
  items?: any[]; // Add items prop for sub-items
  icon?: React.ComponentType<{ stroke?: number; size?: string } | any>; // Allow any additional props
};

interface ItemType {
  item: NavGroup;
  isSelected: boolean;
  isOpen: boolean;
  onClick: () => void;
}

const NavGroup = ({ item, isSelected, isOpen, onClick }: ItemType) => {
  const [open, setOpen] = useState(false); // Remove local open state

  const ListSubheaderStyle = styled((props: Theme | any) => (
    <ListSubheader disableSticky {...props} />
  ))(({ theme, open }) => ({
    ...theme.typography.overline,
    fontWeight: "700",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0),
    color: open ? "#49beff" : "#AEB9E1", // Change color to blue when open
    lineHeight: "26px",
    padding: "3px 12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  }));

  return (
    <>
      <ListSubheaderStyle onClick={() => { setOpen(!open); onClick(); }} open={isOpen}>
        {item.icon && (
          <span style={{ marginRight: "12px", color: isOpen ? "#49beff" : "#AEB9E1" }}>
            <item.icon stroke={1.5} size="1rem" />
          </span>
        )}
        {item.subheader}
        <span
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "flex-end",
            gap: "8px",
          }}
        >
          {isOpen ? (
            <ExpandLessIcon style={{ fontSize: "1rem", color: "#49beff" }} />
          ) : (
            <ExpandMoreIcon style={{ fontSize: "1rem", color: "#AEB9E1" }} />
          )}
        </span>
      </ListSubheaderStyle>
      <Collapse in={isOpen}>
        {item.items &&
          item.items.map((subItem) => (
            <NavItem
              item={subItem}
              key={subItem.id}
              onClick={subItem.onClick}
              pathDirect={subItem.pathDirect}
            />
          ))}
      </Collapse>
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
  isSelected: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavGroup;
