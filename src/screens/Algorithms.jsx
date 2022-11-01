import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@material-ui/core/AppBar";

import BubbleSort from "./Algorithms/BubbleSort";
import SelectionSort from "./Algorithms/SelectionSort";
import InsertionSort from "./Algorithms/InsertionSort";
import MergeSort from "./Algorithms/MergeSort";
import QuickSort from "./Algorithms/QuickSort";

// ----------------------------------------------------
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// ----------------------------------------------------

const Algorithms = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="BUBBLE" {...a11yProps(0)} />
          <Tab label="SELECTION" {...a11yProps(1)} />
          <Tab label="INSERTION" {...a11yProps(2)} />
        </Tabs>
      </Box> */}
      <AppBar
        position="static"
        color="default"
        style={{
          borderRadius: "10px",
          alignItems: "center",
          width: "fit-content",
          margin: "10px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="BUBBLE" {...a11yProps(0)} />
          <Tab label="SELECTION" {...a11yProps(1)} />
          <Tab label="INSERTION" {...a11yProps(2)} />
          <Tab label="MERGE" {...a11yProps(3)} />
          <Tab label="QUICK" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BubbleSort />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SelectionSort />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InsertionSort />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MergeSort />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <QuickSort />
      </TabPanel>
    </Box>
  );
};

export default Algorithms;
