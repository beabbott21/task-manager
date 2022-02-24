import { TaskAssignment } from '../../shared/types';
import * as S from './styles';
import TaskCard from '../task/TaskCard';
import { v4 as uuidv4 } from 'uuid';

const TaskColumn = ({ name, tasks }: { name: string; tasks: TaskAssignment[] }) => {
  return (
    <S.Column>
      <S.ColumnHeader>{name}</S.ColumnHeader>
      <S.List>
        {tasks ? (
          tasks.map((t) => <TaskCard key={uuidv4()} assignment={t} />)
        ) : (
          <S.Message>No Tasks Yet. Get to work!</S.Message>
        )}
      </S.List>
    </S.Column>
  );
};

export default TaskColumn;
