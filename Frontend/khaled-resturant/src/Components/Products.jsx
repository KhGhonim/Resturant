import { Stack } from "@mui/material";

export default function Products({ result }) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 4,
        justifyContent: { xs: "center", md: "normal" },
      }}
    >
      {result}
    </Stack>
  );
}
