import { useState } from "react";
import { Card, Button, Typography } from "@mui/material"
function App() {
  const [count, setCount] = useState(0);


  return (<div style={{ display: "flex", justifyContent: "center" }}>
    <Card style={{ padding: 20, width: 500 }}>
      <Typography variant="h5" marginLeft={15}>Welcome to counter app</Typography>
      <br />
      <Buttons count={count} setCount={setCount} />
      
    </Card>
  </div>
  )
}

function Buttons({ count, setCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase count={count} setCount={setCount} />
      <Countcomponent count={count} />
      <Decrease count={count} setCount={setCount} />
    </div>
  )
}


function Increase({ count, setCount }) {
  return (
    <div>

      <Button variant={"contained"} onClick={() => {
        setCount(count + 1)
      }}>Increase</Button>
    </div>
  )
}


function Decrease({ count, setCount }) {
  return (
    <div>
      <Button variant={"contained"} onClick={() => {
        setCount(count - 1)
      }}>Decrease</Button>

    </div>
  )
}


function Countcomponent({ count }) {
  return <div><Typography variant='h5' textalign={"center"}>{count}</Typography></div>
}

export default App;