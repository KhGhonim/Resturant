import {
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";

export default function CheckBox({
  FristName,
  SecoundName,
  ThirdName,
  CatagoryName,
  HandleRadioChange,
  
}) {




  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });

  function BpRadio(props) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }
  
  return (
    <Stack direction={"column"} sx={{ mx: 3,  }}>
      <Typography sx={{  mb: 1 }} variant="body1" color="inherit">
        {CatagoryName}
      </Typography>
      <FormControl>
      <RadioGroup
        defaultValue="All Products"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel onClick={HandleRadioChange} value="All Products" control={<BpRadio />} label="All Products" />
        <FormControlLabel  onClick={HandleRadioChange} value={FristName} control={<BpRadio />} label={FristName} />
        <FormControlLabel onClick={HandleRadioChange} value={SecoundName} control={<BpRadio />} label={SecoundName} />
        <FormControlLabel  onClick={HandleRadioChange}value={ThirdName} control={<BpRadio />} label={ThirdName} />
      </RadioGroup>
      <Divider sx={{ my: 1 }} />

    </FormControl>
    </Stack>
  );
}
