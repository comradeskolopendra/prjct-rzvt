import { TDepartments } from "../../redux/slices/contents"
import type { RootState } from "../../redux/types"

export const getStateCourseById = (key: TDepartments) => (store: RootState) => store.contents[key];