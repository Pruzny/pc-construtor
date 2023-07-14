interface ResultPage<T> {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  items: T[];
}
export default ResultPage;