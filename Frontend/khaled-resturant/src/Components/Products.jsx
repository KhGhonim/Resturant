import { Stack } from "@mui/material";
import Loading from "./Loading";

export default function Products({ result }) {
  if (!result || result.length === 0) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (result) {
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
}
