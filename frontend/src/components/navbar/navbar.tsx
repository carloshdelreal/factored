import { Button, Typography } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const Ul = styled.ul`
  display: flex;

`;
export const Li = styled.li`
  list-style: none;
`;

export const Navbar = () => {
  const { logout, userData } = useAuth();
  const router = useRouter();

  if (!userData) return null

  return (
    <Nav>
      <div>
        <Typography onClick={() => router.push(routes.home)} variant='h3' color={'#388e3c'}>Factored</Typography>
      </div>
      <div>
        <Ul>
          <Li>
            <Button onClick={() => router.push(routes.films)}>Films</Button>
          </Li>
          <Li>
            <Button onClick={() => router.push(routes.people)}>People</Button>
          </Li>
          <Li>
            <Button onClick={() => router.push(routes.planets)}>Planets</Button>
          </Li>
        </Ul>
      </div>
      <div>
        <Ul>
          <Li>
            <Button>Hello, { userData?.email}</Button>
          </Li>
          <Li>
            <Button variant={'contained'} onClick={logout}>Logout</Button>
          </Li>
        </Ul>
      </div>
    </Nav>
  );
};
