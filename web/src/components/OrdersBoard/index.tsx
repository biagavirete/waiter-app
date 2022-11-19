import { useState } from 'react';
import { Order } from '../../types/order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface Props {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenOrder() {
    setIsModalVisible(true);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {!!orders.length && (
        <OrdersContainer>
          {orders.map(order => (
            <button key={order._id} type="button" onClick={handleOpenOrder}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}

    </Board>
  );
}