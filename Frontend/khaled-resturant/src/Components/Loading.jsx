import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-transparent">
      <CircularProgress className="!w-10 !h-10 animate-spin"  />
    </div>
  );
}
