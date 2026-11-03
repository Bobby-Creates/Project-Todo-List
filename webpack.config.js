// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  resolve:{
    fallback:{
      "path": false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

   module : {
    rules:[
      {
        test: /\.css$/i,
        use:["style-loader" , "css-loader"],
      },
    
      {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type:"asset/resource"
      }
      ,
      {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:8192,
            },
          },
        ],
      },
    ],
  },
};
