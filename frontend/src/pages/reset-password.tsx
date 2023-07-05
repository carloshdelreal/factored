import styles from '@/styles/Home.module.css';
import { PageHead } from '../components/head';
import { useIsAuthenticated } from '../utils/auth/useIsAuthenticated';
import { useRouter } from 'next/router';
import { Container, Button } from '@mui/material';
import styled from '@emotion/styled';
import { ResetPassword } from '@/components/ResetPassword';
import { routes } from '@/utils/routes';

const Separator = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
`;

export default function ResetPasswordPage() {
  const router = useRouter();
  const { loggedIn } = useIsAuthenticated();

  if (loggedIn) router.push(routes.home);
  return (
    <div className={styles.container}>
      <PageHead />

      <ResetPassword />

      <Container maxWidth="xs">
        <Separator />
      </Container>

      <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => router.push(routes.forgotPassword)}
      >
        Reset password again
      </Button>

    </div>
  );
}
