import { SmaragdConfig } from 'smaragd/app.config'

export default defineAppConfig({
  smaragd: {
    colors: {
      themeMint: '#CADFD8',
      themeMintHov: '#CADFD8bb',
      themeMintContrast: '#000000',
      themeForrest: '#85ADA1',
      themeForrestHov: '#85ADA1bb',
      themeForrestContrast: '#ffffff',
      themeForrest40: '#85ADA140',
      themeSecondary: '#eeeeee',
      themeSecondaryHov: '#dddddd',
      themeSecondaryContrast: '#000000',
      themeLinks: '#4c4cd8',
      themeLinksHov: '#2222b9',
      themeLinks20: '#4c4cd820',
    },
    fonts: {
      header: '"Montserrat 900", "Roboto", sans-serif',
      major: '"Montserrat 700", "Roboto", sans-serif',
      regular: '"Montserrat 500", "Roboto", sans-serif',
      minor: '"Montserrat 500", "Roboto", sans-serif',
      sub: '"Montserrat 500", "Roboto", sans-serif',
    },
    spacing: {
      tight: '10pt',
      regular: '20pt',
      loose: '50pt',
      contentHeight: '35pt',
      pageWidth: '700pt'
    },
    look: {
      borderRadiusRegular: '12pt',
      borderRadiusLoose: '999pt'
    }
  } satisfies SmaragdConfig
})
