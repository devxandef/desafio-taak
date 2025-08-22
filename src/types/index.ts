// Tipos globais da aplicação

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface NavigationProps {
  navigation: any;
  route: any;
}
