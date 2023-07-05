import { useProtectRoute } from '../utils/auth/useProtectRoute';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { MainDiv } from '@/components/styled';
import { usePeople } from '@/hooks/usePeople';

export default function Home() {
  useProtectRoute();
  const {isLoading, data } = usePeople()

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
                        gender: {m.gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        height: {m.height}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        birth year: {m.birth_year}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        ))}
    </MainDiv>
  );
}
