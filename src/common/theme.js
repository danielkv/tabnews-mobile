const colors = {
    white: '#ffffff',
    black: '#000000',
    gray: {
        25: '#F6F6F7',
        50: '#C1C3C6',
        100: '#8C9094',
        300: '#585C62',
        500: '#24292F',
        700: '#1B1F23',
        900: '#121518',
    },
}

const theme = {
    colors,
    fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        xl: '18px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
    },
    fontFamily: {
        regular: 'SF-Pro-Display-Regular',
        regularItalic: 'SF-Pro-Display-RegularItalic',
        bold: 'SF-Pro-Display-Bold',
        boldItalic: 'SF-Pro-Display-BoldItalic',
    },
    spacing: {
        1: 1,
        2: 2,
        3: 4,
        4: 6,
        5: 8,
        6: 10,
        7: 14,
        8: 18,
        9: 22,
        10: 26,
        11: 30,
        12: 34,
        14: 38,
        16: 42,
        20: 46,
        24: 50,
        28: 58,
        32: 56,
        36: 64,
        40: 72,
    },
}

module.exports = {
    colors,
    theme,
}
