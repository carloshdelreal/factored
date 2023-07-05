import {
  Alert,
  AlertTitle,
  Box,
  Button
} from '@mui/material';
import { Notification } from '../../types';
import { useNotification } from '../../hooks';

interface INotifications {
  notifications: Notification[];
}

export const Notifications = ({ notifications }: INotifications) => {
  const display = !!notifications.length;
  const { close } = useNotification();
  if (!display) return null;
  return (
    <div style={{ position: `fixed`, bottom: 10, right: 10 }}>
      <Box style={{
        boxShadow: `1px 0px 24px -11px rgba(0,0,0,0.75)`,
        backgroundColor: `white`
      }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button size='small' variant="text" onClick={close}>x</Button>
        </Box>
        {notifications.map((n) => (
          <Alert key={n.id} severity={n.type}><AlertTitle>{n.title}</AlertTitle>{n.detail}</Alert>
        ))}
      </Box>
    </div>
  );
};
