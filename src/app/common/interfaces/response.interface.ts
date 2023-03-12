export interface IPagination {
  pages: number;
  limit: number;
  offset: number;
}

export interface IResponse {
  entities: any[];
  pagination: IPagination;
}
