import {create} from 'zustand';

export const useClients = create(set => ({
  clients: '',
  setClients: data => {
    set({clients: data});
  },
  clientsFilter: '',
  setClientsFilter: data => {
    set({clientsFilter: data});
  },
}));