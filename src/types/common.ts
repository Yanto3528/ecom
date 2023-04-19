export interface PaginatedResponse<T> {
  status: "success" | "error";
  data: T[];
  pagination: {
    totalCount: number;
    totalPage: number;
  };
}
