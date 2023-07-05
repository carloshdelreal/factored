import React, {
  createContext,
  ReactNode,
  Reducer,
  useContext,
  useReducer,
} from 'react';
import { ReportAction } from '../types';
import { Notifications } from '../components/Notifications';
import { Notification } from '../types';
import { Close, Report } from '../actions/notifications';

export type Action = Report | Close;

const reducer: Reducer<Notification[], Action> = (state, action) => {
  switch (action.type) {
    case ReportAction.report:
      return [...state, action.payload];
    case ReportAction.close:
      return [];

    default:
      throw new Error(`Action type not recognized for AuthContext reducer`);
  }
};

type NotificationContextType = {
  state: Notification[];
  dispatch: React.Dispatch<Action>;
};

export const NotificationContext = createContext<NotificationContextType>({
  state: [],
  dispatch: () => ({}),
});

interface INotificationProvider {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: INotificationProvider) => {
  const [notifications, dispatch] = useReducer(reducer, []);

  return (
    <NotificationContext.Provider value={{ state: notifications, dispatch }}>
      {children}
      <Notifications notifications={notifications} />
    </NotificationContext.Provider>
  );
};

export function useNotificationContext() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(`useNotification must be used inside its provider.`);
  }
  return context;
}
