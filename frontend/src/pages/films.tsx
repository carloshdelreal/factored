import { useProtectRoute } from '../utils/auth/useProtectRoute';
import { useFilms } from '@/hooks/useFilms';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MainDiv } from '@/components/styled';

export default function Home() {
  useProtectRoute();
  const {isLoading, data } = useFilms()

  if (isLoading) return <div>Loading...</div>

  console.log({data})
  return (
    <MainDiv>
        hello
    </MainDiv>
  );
}
