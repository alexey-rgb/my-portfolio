const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "develompent";
isProd = !isDev;

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.jsx",
    game: "./src/game/game.jsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    //compress: true,
    port: 5000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
        { from: "src/fonts", to: "fonts" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      /*  {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }, */
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: `./fonts/[name].[ext]`,
          },
        },
      },
      {
        /* test: `./src/sass/${/\.s[ac]ss$/i}`, */
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
