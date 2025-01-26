// src/services/utils/error-handler.ts
import { ApiError } from "@/types/lib/utils.types";

export class ErrorHandler {
  static log(error: ApiError) {
    console.error(`Error: ${error.message} (Status: ${error.statusCode})`);
  }

  static notify(error: ApiError) {
    // Toast veya alert göster
    alert(`Error: ${error.message}`);
  }
}