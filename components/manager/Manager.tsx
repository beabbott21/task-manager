import { useEffect, useState } from 'react';
import * as S from './styles';
import TaskColumn from '../shared/TaskColumn';
import { useFetchData } from '../../api/useFetchData';
import { TaskAssignment } from '../../shared/types';
const Manager = () => {
  // const [backlogTasks, setBackogTasks] = useState([]);
  // const [inProgressTasks, setInProgressTasks] = useState([]);
  // const [completedTasks, setCompletedTasks] = useState([]);
  const { data, error, loading, fetchData } = useFetchData<TaskAssignment>(
    '/api/assignments?_expand=task'
  );

  // useEffect(() => {
  //   if (loading) return;

  // }, [data, loading]);

  return (
    <S.Manager>
      <TaskColumn name={'Backlog'} tasks={data?.filter((ta: TaskAssignment) => !ta.accepted)} />
      <TaskColumn name={'In Progress'} tasks={data?.filter((ta: TaskAssignment) => ta.accepted)} />
      <TaskColumn
        name={'Completed'}
        tasks={data?.filter((ta: TaskAssignment) => ta.task?.completed)}
      />
    </S.Manager>
  );
};

export default Manager;
