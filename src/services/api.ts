import axios from 'axios';

// Configuração base do Axios
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API de exemplo
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requisições
api.interceptors.request.use(
  (config) => {
    console.log('Requisição sendo feita:', config.url);
    return config;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

// Interceptor para respostas
api.interceptors.response.use(
  (response) => {
    console.log('Resposta recebida:', response.status);
    return response;
  },
  (error) => {
    console.error('Erro na resposta:', error.response?.status);
    return Promise.reject(error);
  }
);

// Serviços de exemplo
export const userService = {
  // Buscar todos os usuários
  getUsers: () => api.get('/users'),
  
  // Buscar usuário por ID
  getUserById: (id: number) => api.get(`/users/${id}`),
  
  // Criar novo usuário
  createUser: (userData: any) => api.post('/users', userData),
  
  // Atualizar usuário
  updateUser: (id: number, userData: any) => api.put(`/users/${id}`, userData),
  
  // Deletar usuário
  deleteUser: (id: number) => api.delete(`/users/${id}`),
};

export const postService = {
  // Buscar todos os posts
  getPosts: () => api.get('/posts'),
  
  // Buscar posts de um usuário
  getPostsByUser: (userId: number) => api.get(`/posts?userId=${userId}`),
  
  // Buscar post por ID
  getPostById: (id: number) => api.get(`/posts/${id}`),
};

export default api;
