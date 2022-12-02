import * as Font from 'expo-font'

function loadFonts() {
    return Font.loadAsync({
        'SF-Pro-Display-Bold': require('@assets/fonts/SF-Pro-Display-Bold.otf'),
        'SF-Pro-Display-BoldItalic': require('@assets/fonts/SF-Pro-Display-BoldItalic.otf'),
        'SF-Pro-Display-Regular': require('@assets/fonts/SF-Pro-Display-Regular.otf'),
        'SF-Pro-Display-RegularItalic': require('@assets/fonts/SF-Pro-Display-RegularItalic.otf'),
    })
}

export async function prepareApp(): Promise<void> {
    await loadFonts()
}
