import { useEffect, useState } from 'react';
import { Priority, TaskAssignment } from '../../shared/types';
import * as S from './styles';

const priorityColors: { [key in Priority]: string } = {
  High: 'red',
  Medium: 'orange',
  Low: 'yellow'
};
const TaskCard = ({ assignment }: { assignment: TaskAssignment }) => {
  if (!assignment || !assignment.task) return <div />;
  const { task, personId } = assignment;
  const { id, title, details, priority } = task;

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Id>{id}</S.Id>
      <S.Details>{details}</S.Details>
      <S.Person>{personId}</S.Person>
      <S.Priority color={priorityColors[priority]}>{priority}</S.Priority>
    </S.Card>
  );
};

export default TaskCard;
