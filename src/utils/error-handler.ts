export class ErrorHandler {
  static handle(error: unknown): string {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      return error.message;
    }
    return "An unknown error occurred";
  }
}