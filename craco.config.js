import { resolve } from "path";

export const webpack = {
    configure: (webpackConfig, { paths }) => {
        // Add GSAP as an alias for your desired GSAP version (adjust the path as needed)
        webpackConfig.resolve.alias["gsap"] = resolve(
            __dirname,
            "node_modules/gsap/dist/gsap.min.js"
        );

        // Modify other Webpack settings if needed
        // For example, you can customize loaders, rules, or plugins.
        return webpackConfig;
    },
};