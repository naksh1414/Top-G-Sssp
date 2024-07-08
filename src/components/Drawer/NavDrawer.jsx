import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { FaHome } from "react-icons/fa";
// import { MdOutlineMiscellaneousServices } from "react-icons/md";
// import { LuContact } from "react-icons/lu";
import { NavLink } from "react-router-dom";
export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, paddingTop: 5, paddingLeft: 3 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <List>
        {["Home", "Services", "Contact", "Digital Marketing"].map(
          (text, index) => (
            <NavLink
              key={text}
              to={`${
                index == 0
                  ? "/"
                  : index == 1
                  ? "/services"
                  : index == 2
                  ? ""
                  : "digital-marketing"
              }`}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon>
                    {index === 0 ? (
                      <FaHome />
                    ) : index === 2 ? (
                      <LuContact />
                    ) : (
                      <NavLink href="/digital-marketing">
                        <MdOutlineMiscellaneousServices />
                      </NavLink>
                    )}
                  </ListItemIcon> */}

                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>{" "}
            </NavLink>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <HiOutlineMenuAlt2 className="text-black h-8 w-8 z-10" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
