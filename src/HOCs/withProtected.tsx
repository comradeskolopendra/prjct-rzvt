import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";

const WithProtected: FC<{ component: ReactNode }> = ({ component }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/auth/login");
        }
    }, [localStorage.getItem("token")])

    return component;
};

export default WithProtected;