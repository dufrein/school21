import express, { Router } from "express";
import helmet from "helmet";
import logger from "morgan";
import session from "express-session";

import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import MongoStore from "connect-mongo";

//подключичим переменную окружения
import dotenv from "dotenv";

import cors from "cors";
import { maxWeightImgageMb } from "./constants";

// Import routes
import userRoutes from './routes/user.routes';
import tariffRoutes from './routes/tariff.routes';
import courseRoutes from './routes/course.routes';
import lessonRoutes from './routes/lesson.routes';

dotenv.config();

const {
  MONGO_URL,
  MONGO_DBNAME,
  SESS_NAME,
  SESS_SECRET,
  SESS_LIFETIME,
  MODE,
  STATIC_PATH,
} = process.env;

export const app = express();
app.use(cors());

//подключаем сессии
app.use(
  session({
    name: SESS_NAME,
    secret: SESS_SECRET!,
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URL,
      dbName: MONGO_DBNAME,
      collectionName: "session",
      ttl: parseInt(SESS_LIFETIME!),
    }),
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: parseInt(SESS_LIFETIME!),
    },
  })
);

//подключим парсеры (парсит тело запроса - body)
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// подключим защиту (от некоторых широко известных веб-уязвимостей путем соответствующей настройки заголовков HTTP)
// но crossOriginResourcePolicy отключим чтобы отдавать картинки на фронт
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: false,
  })
);

//подключим логгер morgan
app.use(logger("combined"));

app.use(cookieParser());

//заюзаем файлаплоад мидлвар вместо мультера
app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: maxWeightImgageMb * 1024 * 1024 },
  })
);

if (MODE === "development") {
  app.use(express.static(STATIC_PATH || ""));
}

// Routes
app.use('/api/user', userRoutes);
app.use('/api/tariffs', tariffRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);

process.on("unhandledRejection", (error, promise) => {
  console.error("Необработанное отклонение промиса:", error);
});

process.on("uncaughtException", (error) => {
  console.error("Необработанное исключение:", error);
  // process.exit(1); // Завершаем процесс, чтобы избежать нестабильного состояния
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
