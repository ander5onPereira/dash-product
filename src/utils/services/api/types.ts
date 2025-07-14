export interface pageableProps {
  sort?: string;
  page?: number;
  size?: number;
  filterExp?: string;
}
export interface SubmitProps {
  data: any;
  successCallBack?: Function;
  errorCallBack?: Function;
}
export interface DeleteProps {
  id: number|string;
  successCallBack?: Function;
  errorCallBack?: Function;
}