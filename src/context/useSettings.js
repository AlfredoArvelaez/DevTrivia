import { useContext } from "react"
import { AppSettings } from "./AppSettings"
import { settings } from "./types"

export const useSettings = () => {

  const { dispatch } = useContext(AppSettings)

  const setSettigns = (data) => {
    dispatch({
      type: settings.set,
      payload: data
    })
  }

  return { setSettigns }
}
