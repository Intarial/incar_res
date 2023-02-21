import {IconHome} from "../UI/Icons/Icons";

export const TextToIcon = (label: string, color?: string) => {
  switch (label) {
    case 'home': return <IconHome fill={ color ? color : '#8897B7' } />
  }
}