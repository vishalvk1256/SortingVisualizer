import * as React from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import ComplexityTable from "../ComplexityTable";

function iframe(typ) {
  if (typ == "c")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Quick/c.html" width="100%" ></iframe>',
    };
  else if (typ == "cpp")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Quick/cpp.html" width="100%" ></iframe>',
    };
  else if (typ == "java")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Quick/java.html" width="100%" ></iframe>',
    };
  else if (typ == "python")
    return {
      __html:
        '<iframe  style="position: relative; height: 100vh;" src="./Quick/python.html" width="100%" ></iframe>',
    };
}

// ----------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------

export default function QuickSort() {
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
              Quick Sort is a sorting algorithm based on splitting the data
              structure in smaller partitions and sort them recursively until
              the data structure is sorted.
            </li>
            <li>
              This division in partitions is done based on an element, called
              pivot: all the elements bigger than the pivot get placed on the
              right side of the structure, the smaller ones to the left,
              creating two partitions.
            </li>
            <li>
              Next, this procedure gets applied recursively to the two
              partitions and so on.
            </li>
            <li>
              This partition technique based on the pivot is called Divide and
              conquer.
            </li>
            <li>
              It's a performant strategy also used by other sorting algorithms,
              such as Merge Sort.
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

          <TabPanel value={value} index={0}>
            <div dangerouslySetInnerHTML={iframe("c")} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div dangerouslySetInnerHTML={iframe("cpp")} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div dangerouslySetInnerHTML={iframe("java")} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div dangerouslySetInnerHTML={iframe("python")} />
          </TabPanel>
        </Box>
      </Box>

      <ComplexityTable
        avg={"O(n x log n)"}
        best={"O(n x log n)"}
        worst={"O(n2)"}
        space={"O(n)"}
      />
    </div>
  );
}
