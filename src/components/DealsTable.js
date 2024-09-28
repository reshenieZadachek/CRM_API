import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// Контейнер для всего компонента
const Container = styled.div`
  background-color: #0f2231;
  color: #FFFFFF;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

// Компонент сообщения о загрузке
const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
`;

// Компонент сообщения об ошибке
const ErrorMessage = styled(LoadingMessage)`
  color: red;
`;

// Заголовок таблицы
const TableHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

// Контейнер для всех карточек транзакций
const TransactionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

// Компонент отдельной карточки транзакции
const TransactionCard = styled.div`
  background-color: #153043;
  border: 1px solid #596683;
  border-radius: 5px;
  padding: 15px;
  width: 250px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

// Заголовок карточки транзакции
const TransactionHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1691ff;
`;

// Компонент информации о транзакции
const TransactionInfo = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  color: #7f8ba4;
`;

// Компонент даты транзакции
const TransactionDate = styled.div`
  font-size: 14px;
  color: #7f8ba4;
`;

// Компонент для отображения расширенной информации о транзакции
const ExpandedInfo = styled.div`
  margin-top: 15px;
  font-size: 14px;
  border-top: 1px solid #34495E;
  padding-top: 10px;
`;

// Индикатор статуса задачи
const TaskStatus = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: ${props => props.color};
`;

// Компонент загрузки деталей
const LoadingDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 16px;
`;

// Основной компонент для отображения транзакций
const TransactionsTable = ({ accessToken, subdomain }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nowTransactionId, setNowTransactionId] = useState(null);
  const [nowTransactionData, setNowTransactionData] = useState(null);
  const [isLoadingTransactionDetails, setIsLoadingTransactionDetails] = useState(false);
  const uniqueTransactionIds = useRef(new Set());

  // Функция для получения транзакций с API
  const fetchTransactions = async (page = 1) => {
    try {
      const response = await fetch(`https://${subdomain}.amocrm.ru/api/v4/leads?limit=3&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      const text = await response.text();
      if (!text) {
        return null;
      }
      const data = JSON.parse(text);
      return (data && data._embedded && data._embedded.leads) ? data._embedded.leads : [];
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
      return null;
    }
  };

  // Функция для получения детальной информации о конкретной транзакции
  const fetchTransactionDetails = async (id) => {
    try {
      const response = await fetch(`https://${subdomain}.amocrm.ru/api/v4/leads/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
      return null;
    }
  };

  // Хук эффекта для получения всех транзакций
  useEffect(() => {
    let Flag = true;
    let page = 1;

    const fetchAllTransactions = async () => {
      while (Flag) {
        const newTransactions = await fetchTransactions(page);
        if (!newTransactions || newTransactions.length === 0) {
          break;
        }
        
        const filteredTransactions = newTransactions.filter(transaction => !uniqueTransactionIds.current.has(transaction.id));
        filteredTransactions.forEach(transaction => uniqueTransactionIds.current.add(transaction.id));
        
        setTransactions(prevTransactions => [...prevTransactions, ...filteredTransactions]);
        page++;
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setLoading(false);
    };

    if (accessToken) {
      fetchAllTransactions();
    } else {
      setError('Access token не предоставлен');
      setLoading(false);
    }

    return () => {
      Flag = false;
    };
  }, [accessToken, subdomain]);

  // Функция для обработки клика на карточку транзакции
  const handleTransactionClick = async (id) => {
    if (nowTransactionId === id) {
      setNowTransactionId(null);
      setNowTransactionData(null);
    } else {
      setNowTransactionId(id);
      setNowTransactionData(null);
      setIsLoadingTransactionDetails(true);
      const detailedData = await fetchTransactionDetails(id);
      setNowTransactionData(detailedData);
      setIsLoadingTransactionDetails(false);
    }
  };

  // Функция для форматирования даты из временной метки
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  // Функция для определения цвета статуса задачи
  const getTaskStatus = (closest_task_at) => {
    if (!closest_task_at) return '#fd5598'; // Красный
    const now = new Date();
    const taskDate = new Date(closest_task_at * 1000);
    const diffDays = Math.ceil((taskDate - now) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return '#fd5598'; // Красный
    if (diffDays === 0) return '#24BC8C'; // Зеленый
    return '#e4b248'; // Желтый
  };

  if (loading) return <LoadingMessage>Загрузка транзакций...</LoadingMessage>;
  if (error) return <ErrorMessage>Ошибка: {error}</ErrorMessage>;

  return (
    <Container>
      <TableHeader>Список транзакций</TableHeader>
      <TransactionsContainer>
        {transactions.map(transaction => (
          <TransactionCard key={transaction.id} onClick={() => handleTransactionClick(transaction.id)}>
            {nowTransactionId === transaction.id ? (
              isLoadingTransactionDetails ? (
                <LoadingDetails>Загрузка...</LoadingDetails>
              ) : nowTransactionData ? (
                <>
                  <TransactionHeader>{nowTransactionData.name}</TransactionHeader>
                  <ExpandedInfo>
                    <p>ID: {nowTransactionData.id}</p>
                    <p>Дата создания: {formatDate(nowTransactionData.created_at)}</p>
                    <p>
                      Статус задачи: 
                      <TaskStatus color={getTaskStatus(nowTransactionData.closest_task_at)} />
                    </p>
                  </ExpandedInfo>
                </>
              ) : null
            ) : (
              <>
                <TransactionHeader>{transaction.name}</TransactionHeader>
                <TransactionInfo>{transaction.price} ₽</TransactionInfo>
                <TransactionDate>{transaction.id}</TransactionDate>
              </>
            )}
          </TransactionCard>
        ))}
      </TransactionsContainer>
    </Container>
  );
};

export default TransactionsTable;
