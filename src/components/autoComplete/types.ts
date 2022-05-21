import { SxProps, Theme } from "@mui/material"

export interface IProps {
    label: string;
    options: string[];
    className?: string;
    size?: 'medium' | 'small';
    fullWidth?: boolean;
    disablePortal?: boolean;
    renderInput?: any;
    sx?: SxProps<Theme>;
} 