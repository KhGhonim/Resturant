import {
  Container,
  Divider,
  InputBase,
  Stack,
  Typography,
  alpha,
  styled,
  ToggleButtonGroup,
  ToggleButton,
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
  alignment,
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
      >
        <Typography variant="body1" color="white">
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
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="Dishes" color="warning">
            All Dishes
          </ToggleButton>
          <ToggleButton value="Dinner" color="warning">
            Dinner
          </ToggleButton>
          <ToggleButton value="Steak" color="error">
            Steak
          </ToggleButton>
          <ToggleButton value="Ankara" color="success">
          Ankara
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Divider sx={{ my: 3 }} />
    </Container>
  );
}
