import { useProtectRoute } from '../utils/auth/useProtectRoute';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { MainDiv } from '@/components/styled';
import { useRouter } from 'next/router';
import { routes } from '@/utils/routes';

export default function Home() {
  useProtectRoute();
  const router = useRouter()
  return (
    <MainDiv>
      <Card sx={{ maxWidth: 345 }} onClick={() => router.push(routes.films)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/films.png"
            alt="films"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Films
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} onClick={() => router.push(routes.people)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/people.png"
            alt="films"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              People
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }} onClick={() => router.push(routes.planets)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/planets.png"
            alt="films"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Planets
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </MainDiv>
  );
}
