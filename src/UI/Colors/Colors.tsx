const colors = {
  dark: '#0E121A',
  yellow: '#FFDD2D',
  white: '#FFFFFF',
  darkBlue: '#1F2531',
  lightBlue: '#657189',
  whiteOpacity: 'rgba(255,255,255,0.5)',
  mainScreens: '#171D29',
  mainScreensColor: '#4A556C'
}

const switchBG = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.dark
  else return colors.white
}

const activeBG = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.white
  else return colors.white
}

const switchCL = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.white
  else return colors.white
}

const switchCD = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.lightBlue
  else return colors.lightBlue
}

const switchBGInput = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.darkBlue
  else return colors.darkBlue
}

const switchCInput = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.white
  else return colors.white
}

const switchButton = (mode: 'dark' | 'light', type: 'default' | 'prev') => {
  if (type === "default") {
    if (mode === "dark") return colors.yellow
    else return colors.yellow
  } else if (type === 'prev') {
    if (mode === "dark") return colors.darkBlue
    else return colors.darkBlue
  }
}

const switchButtonText = (mode: 'dark' | 'light', type: 'default' | 'prev') => {
  if (type === "default") {
    if (mode === "dark") return colors.dark
    else return colors.dark
  } else {
    if (mode === "dark") return colors.white
    else return colors.white
  }
}

const smallText = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.whiteOpacity
  else return colors.whiteOpacity
}

const mainBG = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.mainScreens
  else return colors.mainScreens
}

const mainColor = (mode: 'dark' | 'light') => {
  if (mode === "dark") return colors.mainScreensColor
  else return colors.mainScreensColor
}

export const Colors = {
  switchBG,   // BACKGROUND
  switchCL,   // COLOR LIGHT
  switchCD,   // COLOR DEFAULT
  switchButton,
  switchButtonText,
  switchBGInput,
  switchCInput,
  smallText,
  mainBG,
  mainColor,
  activeBG
}