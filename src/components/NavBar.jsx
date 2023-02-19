import { AppBar, Stack, Button } from "@mui/material";



export default function NavBar() {
  return (
    <AppBar position="static" color="default">
        <Stack direction="row" justifyContent={'center'} spacing={2} m={1}>
          <Button variant="text" href="./">
            Home
          </Button>
          <Button variant="text" href="./">
            Link 1
          </Button>
          <Button variant="text" href="./">
            Link 2
          </Button>
        </Stack>
    </AppBar>
  );
}
