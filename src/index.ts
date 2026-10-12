import { Elysia } from "elysia";
import { env } from "./config/env";
import { userRoutes } from "./routes";

const app = new Elysia()
  // Health check
  .get("/", () => ({
    status: "ok",
    message: "🚀 Belajar Vibe Coding API is running!",
    timestamp: new Date().toISOString(),
  }))

  // Register routes
  .use(userRoutes)

  // Error handling
  .onError(({ code, error, set }) => {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    switch (code) {
      case "VALIDATION":
        set.status = 400;
        return { error: "Validation Error", message: errorMessage };
      case "NOT_FOUND":
        set.status = 404;
        return { error: "Not Found", message: "Route not found" };
      default:
        set.status = 500;
        return { error: "Internal Server Error", message: errorMessage };
    }
  })

  .listen(env.PORT);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
