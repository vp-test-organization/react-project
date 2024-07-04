import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildSvgLoader from './loaders/buildSvgLoader';
import buildCssLoader from './loaders/buildCssLoader';
import buildBabelLoader from './loaders/buildBabelLoader';

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const svgLoader = buildSvgLoader();
    const babelLoader = buildBabelLoader(options);
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const cssLoader = buildCssLoader(isDev);

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
};

export default buildLoaders;
