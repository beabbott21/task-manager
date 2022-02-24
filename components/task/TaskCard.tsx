import { useState } from 'react';
import { Priority, TaskAssignment } from '../../shared/types';
import * as S from './styles';

const priorityColors: { [key in Priority]: string } = {
  High: 'red',
  Medium: 'orange',
  Low: 'yellow'
};
const TaskCard = ({ assignment }: { assignment: TaskAssignment }) => {
  const { task, user } = assignment;
  const { id, title, details, priority } = task;
  const { first_name, last_name } = user;
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const [cardExpanded, setCardExpanded] = useState<boolean>(false);

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Id>{id}</S.Id>
      <S.Details>{details}</S.Details>
      <S.Person>
        {first_name.charAt(0)}
        {last_name.charAt(0)}
      </S.Person>
      <S.Priority color={priorityColors[priority]}>{priority}</S.Priority>
    </S.Card>
  );
};

export default TaskCard;
