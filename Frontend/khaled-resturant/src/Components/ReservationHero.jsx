import {
  Container,
  Divider,
  InputBase,
  Stack,
  Typography,
  alpha,
  styled,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function ReservationHero({
  handleAlignment,
  InputValue,
  handlechange,
}) {

  return (
    <Container sx={{ mt: 12 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={3}
        mb={5}
      >
        
        <Typography variant="h6" color="white">
          Recomanded
        </Typography>
        <Search onChange={handlechange}>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "white" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={InputValue}
            
          />
          
        </Search>
      </Stack>

      <Stack gap={2} direction={"row"}>

        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={handleAlignment}
          value={"Ankara"}
          variant="outlined"
          color="info"
          
        >
          Ankara
        </Button>

        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={handleAlignment}
          value={"Dinner"}
          variant="outlined"
          color="primary"
        >
          Dinner
        </Button>

        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={handleAlignment}
          value={"Lunch"}
          variant="outlined"
          color="error"
        >
          Launch
        </Button>

        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={handleAlignment}
          value={"Dubai"}
          variant="outlined"
          color="secondary"
        >
          Dubai
        </Button>
      </Stack>
      <Divider sx={{ my: 3 }} />
    </Container>
  );
}
