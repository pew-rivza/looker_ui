export const parameters = {
    backgrounds: {
        values: [
            {
                name: 'auth',
                value: '#3A3E54',
            },
        ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}