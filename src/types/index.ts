
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Cliente {
  id: string;
  nomeEmpresa: string;
  cnpj: string;
  contato: string;
  createdAt: string;
}

export interface Contato {
  id: string;
  nomeCompleto: string;
  email: string;
  telefone: string;
  cargo: string;
  dataUltimoContato: string;
  createdAt: string;
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
