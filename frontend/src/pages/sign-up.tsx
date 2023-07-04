import styles from '@/styles/Home.module.css';
import { PageHead } from '../components/head';
import { SignUp } from '../components/signup';
import { useIsAuthenticated } from '../utils/auth/useIsAuthenticated';
import { useRouter } from 'next/router';
import { Button, Container } from '@mui/material';
import styled from '@emotion/styled';
import { routes } from '../utils/routes';

const Separator = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
`;

export default function SignUpPage() {
  const router = useRouter();
  const { loggedIn } = useIsAuthenticated();

  if (loggedIn) router.push(`/home`);
  return (
    <div className={styles.container}>
      <PageHead />

      <SignUp />

      <Container maxWidth="xs">
        <Separator />
      </Container>

      <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => router.push(routes.login)}
      >
        Log In
      </Button>
    </div>
  );
}
