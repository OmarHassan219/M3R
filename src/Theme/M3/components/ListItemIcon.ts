import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3ListItemIcon {
    MuiListItemIcon: {
        defaultProps?: ComponentsProps['MuiListItemIcon'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiListItemIcon'];
        variants?: ComponentsVariants['MuiListItemIcon'];
    }
};

export const getListItemIcon = (theme: Theme): M3ListItemIcon => {
    const { palette } = theme;
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: palette.onSurfaceVariant.main,
                    minWidth: '24px',
                    height: '56px',
                    '& .Mui-selected': {
                        color: palette.primary.main
                    },
                },
            }
        }
    }
}