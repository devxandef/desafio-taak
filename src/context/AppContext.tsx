import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Cliente, Contato } from '../types';

interface AppContextData {
  clientes: Cliente[];
  contatos: Contato[];
  addCliente: (cliente: Omit<Cliente, 'id' | 'createdAt'>) => void;
  addContato: (contato: Omit<Contato, 'id' | 'createdAt'>) => void;
  removeCliente: (id: string) => void;
  removeContato: (id: string) => void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [clientes, setClientes] = useState<Cliente[]>([
    {
      id: '1',
      nomeEmpresa: 'GRUPO Taak',
      cnpj: '11.222.333/0001-44',
      contato: 'Matheus Coelho Campos',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
  ]);

  const [contatos, setContatos] = useState<Contato[]>([
    {
      id: '1',
      nomeCompleto: 'Matheus Coelho Campos',
      email: 'matheus.campos@engenha...',
      telefone: '(11) 98602-6835',
      cargo: 'Analista de qualidade',
      dataUltimoContato: '02/05/2025',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
    {
      id: '2',
      nomeCompleto: 'Rafael de Godoy Gonçalves',
      email: 'rafael.godoy@taak.com.br',
      telefone: '(11) 96242-1850',
      cargo: 'Analista de oportunidade',
      dataUltimoContato: '02/02/2025',
      createdAt: '2025-01-01T00:00:00.000Z',
    },
  ]);

  const addCliente = (clienteData: Omit<Cliente, 'id' | 'createdAt'>) => {
    const novoCliente: Cliente = {
      ...clienteData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setClientes(prev => [...prev, novoCliente]);
  };

  const addContato = (contatoData: Omit<Contato, 'id' | 'createdAt'>) => {
    const novoContato: Contato = {
      ...contatoData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setContatos(prev => [...prev, novoContato]);
  };

  const removeCliente = (id: string) => {
    setClientes(prev => prev.filter(cliente => cliente.id !== id));
  };

  const removeContato = (id: string) => {
    setContatos(prev => prev.filter(contato => contato.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        clientes,
        contatos,
        addCliente,
        addContato,
        removeCliente,
        removeContato,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
