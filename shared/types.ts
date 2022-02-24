export type ApiResponse = {
  data: any;
};

export type AxiosResponse<T> = {
  data: T[];
  error: any;
  loading: boolean;
  fetchData: () => void;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export type User = {
  id: number;
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  address: Address;
};

export type Priority = 'High' | 'Medium' | 'Low';

export type Task = {
  id: number;
  title: string;
  details: string;
  completed: string;
  priority: Priority;
  date_created: string;
  user?: User;
};

export type TaskAssignment = {
  id: string;
  taskId: number;
  userId: number;
  accepted: boolean;
  task: Task;
  user: User;
};
