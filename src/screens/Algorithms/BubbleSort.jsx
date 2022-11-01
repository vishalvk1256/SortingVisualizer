import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import ComplexityTable from "../ComplexityTable";

// import Prism from "prismjs";
// import "./prism.css";

function iframe(typ) {
  if (typ == "c")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Bubble/c.html" width="100%" ></iframe>',
    };
  else if (typ == "cpp")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Bubble/cpp.html" width="100%" ></iframe>',
    };
  else if (typ == "java")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Bubble/java.html" width="100%" ></iframe>',
    };
  else if (typ == "python")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Bubble/python.html" width="100%" ></iframe>',
    };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

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

export default function BubbleSort() {
  // useEffect(() => {
  //   Prism.highlightAll();
  // });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      // style={{ display: "flex", flexDirection: "colomn" }}
      style={{ padding: "0 0 0 20px", backgroundColor: "aliceblue" }}
    >
      <div style={{ padding: "0 40px 40px 0px", backgroundColor: "aliceblue" }}>
        <div>
          <h1>DESCRIPTION</h1>
          <ul>
            <li>
              Bubble Sort is an iterative sorting algorithm that imitates the
              movement of bubbles in sparkling water.
            </li>
            <li>The bubbles represents the elements of the data structure.</li>
            <li>
              The bigger bubbles reach the top faster than smaller bubbles, and
              this algorithm works in the same way.
            </li>
            <li>compare algorithms side by side</li>
            <li>
              It iterates through the data structure and for each cycle compares
              the current element with the next one, swapping them if they are
              in the wrong order.
            </li>
            <li>
              It's a simple algorithm to implement, but not much efficient: on
              average, quadratic sorting algorithms with the same time
              complexity such as Selection Sort or Insertion Sort perform
              better.
            </li>
          </ul>
        </div>
      </div>
      <Box sx={{ width: "55%" }}>
        <Box sx={{ bgcolor: "#2e1534", borderRadius: "10px" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="C" />
            <StyledTab label="C++" />
            <StyledTab label="JAVA" />
            <StyledTab label="PYTHON" />
          </StyledTabs>
          {/* <Box sx={{ p: 3 }} /> */}
          <TabPanel
            value={value}
            index={0}
            // style={{ padding: "0 24px 24px 24px" }}
          >
            {/* <Typography style={{ color: "white" }}>C</Typography> */}
            <div dangerouslySetInnerHTML={iframe("c")} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* <Typography style={{ color: "white" }}>C++</Typography> */}
            <div dangerouslySetInnerHTML={iframe("cpp")} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* <Typography style={{ color: "white" }}>JAVA</Typography> */}
            <div dangerouslySetInnerHTML={iframe("java")} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            {/* <Typography style={{ color: "white" }}>PYTHON</Typography> */}
            <div dangerouslySetInnerHTML={iframe("python")} />
          </TabPanel>
        </Box>
      </Box>
      {/* <ComplexityTable avg={""} best= {""} worst={""} space={""}/> */}
      <ComplexityTable
        avg={"O(n2)"}
        best={"O(n)"}
        worst={"O(n2)"}
        space={"O(1)"}
      />
    </div>
  );
}
