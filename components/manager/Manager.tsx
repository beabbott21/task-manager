import * as S from './styles';
import TaskColumn from '../shared/TaskColumn';
import { useFetchData } from '../../api/useFetchData';
import { TaskAssignment } from '../../shared/types';
import { ASSIGNMENTS_TASKS_USERS_API, TASKS_API } from '../../shared/constants';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { move, reorder } from '../../shared/utils';
import axios from 'axios';

const Manager = () => {
  const [backlog, setBacklog] = useState<TaskAssignment[]>([]);
  const [progress, setProgress] = useState<TaskAssignment[]>([]);
  const [complete, setComplete] = useState<TaskAssignment[]>([]);

  // I would rather let the backend handle the filtering but deep filtering
  // does not work as intended in json-server documentation.
  const { data, loading, fetchData } = useFetchData<TaskAssignment>(
    'get',
    ASSIGNMENTS_TASKS_USERS_API,
    {},
    null
  );

  useEffect(() => {
    const b: TaskAssignment[] = [],
      p: TaskAssignment[] = [],
      c: TaskAssignment[] = [];

    if (data.length && !loading) {
      data.forEach((ta) => {
        if (ta.task?.completed) {
          c.push(ta);
        } else if (ta.accepted) {
          p.push(ta);
        } else b.push(ta);
      });
      setBacklog(b);
      setProgress(p);
      setComplete(c);
    }
  }, [data, loading]);

  const getState = (dropId: string) => {
    const droppables: { [id: string]: TaskAssignment[] } = {
      backlog: backlog,
      progress: progress,
      complete: complete
    };
    return droppables[dropId];
  };

  const setState = (dropId: string, payload: TaskAssignment[]) => {
    const droppables: { [id: string]: Dispatch<SetStateAction<TaskAssignment[]>> } = {
      backlog: setBacklog,
      progress: setProgress,
      complete: setComplete
    };

    droppables[dropId](payload);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // don't do anything if dragging outside a droppable zone
    if (!destination) return;

    // drag within same list
    // can really be ignored until sort is saved in db
    if (source.droppableId === destination.droppableId) {
      const tasks = reorder<TaskAssignment>(
        getState(source.droppableId),
        source.index,
        destination.index
      );
      setState(source.droppableId, tasks);

      // drag to new list and update task
    } else {
      const result = move(
        getState(source.droppableId),
        getState(destination.droppableId),
        source,
        destination
      );
      Object.keys(result).forEach((key: string) => setState(key, result[key]));
      const updatedTask = { ...getState(source.droppableId)[source.index] };
      if (source.droppableId === 'backlog' && destination.droppableId === 'progress') {
        handleSave(`${TASKS_API}/${updatedTask.task.id}`, { acceped: true });
      }
    }
  };

  const handleSave = async (url: string, data: any) => {
    await axios.get(url, data).then(() => fetchData());
  };

  return (
    <S.Manager>
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskColumn id="backlog" name="Backlog" isLoading={loading} tasks={backlog} />
        <TaskColumn id="progress" name="In Progress" isLoading={loading} tasks={progress} />
        <TaskColumn id="complete" name="Completed" isLoading={loading} tasks={complete} />
      </DragDropContext>
    </S.Manager>
  );
};

export default Manager;
