import { useProtectRoute } from '../utils/auth/useProtectRoute';
import { useFilms } from '@/hooks';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { MainDiv } from '@/components/styled';

export default function Films() {
  useProtectRoute();
  const {isLoading, data } = useFilms()

  if (isLoading) return <div>Loading...</div>

  return (
    <MainDiv>
        { data.data.map(m => (
            <Card sx={{ maxWidth: 175 }}>
                <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {m.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Director: {m.director}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Producer: {m.producer}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        ))}
    </MainDiv>
  );
}
