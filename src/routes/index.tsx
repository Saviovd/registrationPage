import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/context";

export const AppRoutes = () => {
    
    const {toggleTheme} = useAppThemeContext()
    
    return (
        <Routes>  
            <Route path="/pagina-inicial" element={<Button onClick={toggleTheme} variant='contained' color='primary'>teste</Button>}/>

            <Route path="*"  element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
};