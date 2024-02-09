import express from "express";
import morgan from "morgan";
import path from "path";

import dotenv from "dotenv";
dotenv.config(); // ES6 모듈 문법으로 환경 변수를 로드합니다.

const PORT = process.env.PORT || 4000; // 환경 변수에서 포트를 설정하거나 기본값으로 4000을 사용합니다.

const app = express();

const logger = morgan("dev");
app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// 정적 파일을 제공하는 미들웨어를 설정합니다.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.use("/image", express.static(path.join(__dirname, "image")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/client", express.static(path.join(__dirname, "client")));

const handleListening = () => {
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
