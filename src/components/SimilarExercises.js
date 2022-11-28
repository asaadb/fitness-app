import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant="h3">Exercises that target the same muscle group</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
          {targetMuscleExercises.length && <HorizontalScrollbar data={targetMuscleExercises} />}
      </Stack>
      <Typography variant="h3">Exercises that use the same equipment</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
          {equipmentMuscleExercises.length && <HorizontalScrollbar data={equipmentMuscleExercises} />}
      </Stack>

    </Box>
  )
}

export default SimilarExercises