import { useProtectRoute } from '../utils/auth/useProtectRoute';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { MainDiv } from '@/components/styled';
import { usePlanets } from '@/hooks';

export default function Planets() {
  useProtectRoute();
  const {isLoading, data } = usePlanets()

  if (isLoading) return <div>Loading...</div>

  return (
    <MainDiv>
        { data.data.map(m => (
            <Card sx={{ maxWidth: 175 }}>
                <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {m.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        climate: {m.climate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        diameter: {m.diameter}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        population: {m.population}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        ))}
    </MainDiv>
  );
}

