import { TaskAssignment } from '../../shared/types';
import * as S from './styles';
import TaskCard from '../task/TaskCard';
import { v4 as uuidv4 } from 'uuid';
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from 'react-beautiful-dnd';

const TaskColumn = ({
  id,
  name,
  isLoading,
  tasks
}: {
  id: string;
  name: string;
  isLoading: boolean;
  tasks: TaskAssignment[];
}) => {
  const getMessage = () => (isLoading ? 'Loading' : 'No Tasks Yet. Get to work!');
  return (
    <S.Column>
      <S.ColumnHeader>{name}</S.ColumnHeader>
      <Droppable droppableId={id}>
        {(provided: DroppableProvided) => (
          <S.List ref={provided.innerRef}>
            {tasks.length ? (
              tasks.map((t, i) => (
                <Draggable key={uuidv4()} draggableId={t.id} index={i}>
                  {(provided: DraggableProvided, snapshot: any) => (
                    <S.Draggable
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}>
                      <TaskCard assignment={t} />
                    </S.Draggable>
                  )}
                </Draggable>
              ))
            ) : (
              <S.Message>{getMessage()}</S.Message>
            )}
          </S.List>
        )}
      </Droppable>
    </S.Column>
  );
};

export default TaskColumn;

<Droppable droppableId="rotations">
  {(provided: DroppableProvided) => (
    <Rotations dRef={provided.innerRef} aircraft={selectedAircraft} rotation={rotation}>
      {provided.placeholder}
    </Rotations>
  )}
</Droppable>;
