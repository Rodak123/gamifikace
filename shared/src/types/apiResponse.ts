export type ApiResponse<T> =
  | { success: true; data: T }
  | {
      success: false;
      message: string;
      errors?: { field: string; message: string }[];
      stack?: string;
    };
