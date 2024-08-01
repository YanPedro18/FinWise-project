// src/services/transactionsService.ts
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ITransactionResponseProps } from '../interfaces/ITransactionsResponseProps';

// Referência à coleção de transações
const transactionCollectionRef = collection(db, 'transactions');

// Função para adicionar uma transação
export const addTransaction = async (transaction: Omit<ITransactionResponseProps, 'id'>): Promise<string | undefined> => {
  try {
    const docRef = await addDoc(transactionCollectionRef, transaction);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    return undefined;
  }
};

// Função para obter transações
export const getTransactions = async (): Promise<ITransactionResponseProps[]> => {
  try {
    const querySnapshot = await getDocs(transactionCollectionRef);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<ITransactionResponseProps, 'id'>) // Inclui os campos do documento, exceto 'id'
    }));
  } catch (error) {
    console.error('Error getting documents:', error);
    return [];
  }
};
