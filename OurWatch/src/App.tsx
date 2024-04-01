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
  Card,
  CardHeader,
  CardBody,
  Stack,
  CardFooter,
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
  const [id, setId] = useState(0);
  const [value, setValue] = useState("");
  const [date, setDate] = useState(
    getYear() + "-" + getMonth() + "-" + getDay()
  );
  const [time, setTime] = useState("00:00");
  const [mustWork, setMustWork] = useState("");
  const [memo, setMemo] = useState("");
  const [workList, setWorkList] = useState([]);
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
  const updateWorkLinst = () => {
    setWorkList([
      ...workList,
      { id: id, date: date, time: time, mustWork: mustWork, memo: memo },
    ]);
  };
  const save = () => {
    console.log(date, time, mustWork, memo);
    updateWorkLinst();
    setId(id + 1);
    cancel();
  };
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
          <Button onClick={save}>Save</Button>
          <Button onClick={cancel}>Cancel</Button>
        </ButtonGroup>
        <VStack>
          <Box>
            {date} {time} {mustWork}
          </Box>
          <Box>{memo}</Box>
        </VStack>
        <Box>
          <Stack spacing="4">
            {workList.map((work) => (
              <Card key={work.id}>
                <CardHeader>
                  {work.date} {work.time}{" "}
                </CardHeader>
                <CardBody>{work.mustWork}</CardBody>
                <CardFooter>
                  <Button colorScheme="blue" >View here</Button>
                </CardFooter>
              </Card>
            ))}
          </Stack>
        </Box>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        copyRight © 2024 ぐゑ All Rights Reserved.
        <br />
        Released under the MIT License.
      </p>
    </>
  );
}

export default App;
