import { motion } from "framer-motion";
import styled from "styled-components";

export const ScrollWatcher = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 3px;
    background: white;
    transform-origin: 0%;
    z-index: 5;
`