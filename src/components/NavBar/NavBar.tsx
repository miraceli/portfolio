import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const Navbar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default Navbar
