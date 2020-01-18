export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--foreground-default": "#08090A",
        "--foreground-secondary": "#41474D",
        "--foreground-tertiary": "#797C80",
        "--foreground-quaternary": "#F4FAFF",
        "--foreground-light": "#41474D",

        "--background-default": "#F4FAFF",
        "--background-secondary": "#f5f5f5",
        "--background-tertiary": "#5C7D99",
        "--background-light": "#FFFFFF",

        "--primary-default": "#33cc33",
        "--primary-dark": "#33cc33",
        "--primary-light": "#33cc33",

        "--secondary-default": "#ff9900",
        "--secondary-dark": "#ff9900",
        "--secondary-light": "#ff9900",

        "--tertiary-default": "#ffff00",
        "--tertiary-dark": "#ffff00",
        "--tertiary-light": "#ffff00",

        "--error-default": "#EF3E36",
        "--error-dark": "#800600",
        "--error-light": "#FFCECC",

        "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--foreground-default": "#5C7D99",
        "--foreground-secondary": "#A3B9CC",
        "--foreground-tertiary": "#F4FAFF",
        "--foreground-quaternary": "#E5E5E5",
        "--foreground-light": "#FFFFFF",

        "--background-default": "#797C80",
        "--background-secondary": "#41474D",
        "--background-tertiary": "#08090A",
        "--background-light": "#41474D",

        "--primary-default": "#5DFDCB",
        "--primary-dark": "#24B286",
        "--primary-light": "#B2FFE7",

        "--secondary-default": "#ff9900",
        "--secondary-dark": "#ff9900",
        "--secondary-light": "#ff9900",

        "--tertiary-default": "#ffff00",
        "--tertiary-dark": "#ffff00",
        "--tertiary-light": "#ffff00",

        "--error-default": "#EF3E36",
        "--error-dark": "#800600",
        "--error-light": "#FFCECC",

        "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
    }
};