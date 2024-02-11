import styled from "styled-components"
import { SubtitleMain } from "./subtitle-main"

export const SubtitleAbout = styled(SubtitleMain)`
  font-weight: 300;
  font-size: 20px;
  opacity: 0.75;
  transition: opacity 0.3s ease-in-out;
  max-width: 510px;
  margin-bottom: 0;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
`