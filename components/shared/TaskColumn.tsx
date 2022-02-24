import { TaskAssignment } from '../../shared/types';
import * as S from './styles';
import TaskCard from '../task/TaskCard';
import { v4 as uuidv4 } from 'uuid';

const TaskColumn = ({
  name,
  isLoading,
  tasks
}: {
  name: string;
  isLoading: boolean;
  tasks: TaskAssignment[];
}) => {
  const getMessage = () => (isLoading ? 'Loading' : 'No Tasks Yet. Get to work!');
  return (
    <S.Column>
      <S.ColumnHeader>{name}</S.ColumnHeader>
      <S.List>
        {tasks.length ? (
          tasks.map((t) => <TaskCard key={uuidv4()} assignment={t} />)
        ) : (
          <S.Message>{getMessage()}</S.Message>
        )}
      </S.List>
    </S.Column>
  );
};

export default TaskColumn;
