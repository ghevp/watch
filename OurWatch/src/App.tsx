import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./Clock";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Textarea,
  IconButton,
  ButtonGroup,
  VStack,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

import { getYear, getMonth, getDay, getDayOfWeek } from "./days";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(
    getYear() + "-" + getMonth() + "-" + getDay()
  );
  const [time, setTime] = useState("00:00");
  const [mustWork, setMustWork] = useState("");
  const [memo, setMemo] = useState("");
  const dateChange = (e) => setDate(e.target.value);
  const ValueChange = (e) => setTime(e.target.value);
  const timeChange = (e) => setTime(e.target.value);
  const mustWorkChange = (e) => setMustWork(e.target.value);
  const memoChange = (e) => setMemo(e.target.value);
  const cancel = () => {
    setDate(getYear() + "-" + getMonth() + "-" + getDay());
    setTime("00:00");
    setMustWork("");
    setMemo("");
  };
  const save = () => {
    console.log(date, time, mustWork, memo);
    
  }
  return (
    <>
      <IconButton
        className="settingButton"
        aria-label="Settings"
        icon={<SettingsIcon />}
      />
      <div>
        <Box style={{ fontSize: "100px" }}>
          <Clock />
        </Box>
        <Box>
          {getYear()}年{getMonth()}月{getDay()}日({getDayOfWeek()})
        </Box>
      </div>
      <Box>
        <Heading>OurWatch</Heading>
      </Box>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <HStack>
          //にちびの入力
          <Input type="date" value={date} onChange={dateChange}></Input>
          // 時間の入力
          <Input type="time" value={time} onChange={timeChange}></Input>
        </HStack>
        <Input
          placeholder="やるべきこと"
          value={mustWork}
          onChange={mustWorkChange}
        ></Input>
        <Textarea
          value={memo}
          onChange={memoChange}
          placeholder="メモ欄"
        ></Textarea>
        <ButtonGroup variant="outline" spacing="6">
          <Button onClick={save} >Save</Button>
          <Button onClick={cancel}>Cancel</Button>
        </ButtonGroup>
        <VStack>
          <Box>
            {date} {time} {mustWork}
          </Box>
          <Box>{memo}</Box>
        </VStack>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
