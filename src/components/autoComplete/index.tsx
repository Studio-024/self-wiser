import styles from './styles.module.scss';
import { Autocomplete, TextField } from '@mui/material';
import { IProps } from './types';

export const AutocompleteField = (
  {
    label,
    options, 
    size = 'medium', 
    fullWidth = true,
    className = styles.default,
    sx = null,  
    renderInput, 
    disablePortal = true 
  }: IProps) => {
  
  return (
      <Autocomplete
      disablePortal={disablePortal}
      className={className}
      options={options}
      fullWidth={fullWidth}
      size={size}
      sx={sx}
      renderInput={renderInput ? renderInput : (params) => <TextField {...params} label={label} />}
      />
  )
}